<#
  정비 스크립트 — CLAUDE.md "## 정비 작업" 1~6단계를 자동화한다.
  로컬에 Node가 없으므로 PowerShell(5.1/7+)로 돈다.

  사용법:
    pwsh scripts/maintain.ps1            # 리포트만 (파일 안 건드림)
    pwsh scripts/maintain.ps1 -Apply     # related 추가 + index.md 재생성까지 적용
    (Windows PowerShell: powershell -ExecutionPolicy Bypass -File scripts/maintain.ps1)

  단계:
    1. frontmatter 정규화 점검(+ -Apply 시 related의 [[]] 대괄호 제거)
    2. related 상호 채우기 — 태그(대분류 포함)가 2개 이상 겹치는 카드끼리 상호 추가,
       기존 항목은 삭제하지 않고, 카드당 최대 5개(겹침 수 많은 순)
    3. 빈 위키링크 점검(보고만)
    4. 심화 노트 참조 점검(보고만)
    5. 해설 없는 체인 점검(보고만)
    6. index.md 재생성(-Apply 시). 기존 행 순서를 보존하고 새 항목은 뒤에 붙인다.

  ⚠ resolveName/Sluggify 는 scripts/sync-content.mjs 와 반드시 동일해야 한다.
    (빌드가 링크를 해석하는 규칙과 어긋나면 이 스크립트의 링크 점검이 거짓말을 한다.)
    sync-content.mjs 의 sluggify/resolveName 이 바뀌면 여기도 같이 고칠 것.
#>
[CmdletBinding()]
param([switch]$Apply)

$ErrorActionPreference = "Stop"
try { [Console]::OutputEncoding = [System.Text.Encoding]::UTF8 } catch {}

$root      = Split-Path -Parent $PSScriptRoot
$cardsDir  = Join-Path $root "cards"
$deepDir   = Join-Path $root "deep-notes"
$indexPath = Join-Path $root "index.md"
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

# ── 공통 헬퍼 ────────────────────────────────────────────────────────────
function Strip-Quotes([string]$s) {
    if ($null -eq $s) { return "" }
    $v = $s.Trim()
    if ($v.Length -ge 2 -and (($v[0] -eq '"' -and $v[-1] -eq '"') -or ($v[0] -eq "'" -and $v[-1] -eq "'"))) {
        $v = $v.Substring(1, $v.Length - 2)
    }
    return $v.Trim()
}

# sync-content.mjs 의 sluggify 와 동일 (세그먼트별 치환)
function Sluggify([string]$s) {
    $out = foreach ($seg in ($s -split '/')) {
        ($seg -replace '\s','-' -replace '&','-and-' -replace '%','-percent' -replace '\?','' -replace '#','')
    }
    return (($out -join '/') -replace '/$','')
}

# frontmatter 파서: 상단 --- --- 블록만. 인라인 [..] 배열과 블록(- item) 배열 모두 처리.
function Parse-Doc([string]$text) {
    $lines = $text -split "`r?`n"
    if ($lines[0] -ne '---') { return $null }
    $i = 1
    $fm = New-Object System.Collections.Generic.List[string]
    while ($i -lt $lines.Count -and $lines[$i] -ne '---') { $fm.Add($lines[$i]); $i++ }
    $body = if (($i + 1) -le ($lines.Count - 1)) { ($lines[($i + 1)..($lines.Count - 1)]) -join "`n" } else { "" }

    $scalars = @{}; $arrays = @{}
    $j = 0
    while ($j -lt $fm.Count) {
        $l = $fm[$j]
        if ($l -match '^([A-Za-z_]+):\s*(.*)$') {
            $key = $matches[1]; $val = $matches[2]
            if ($val -match '^\[(.*)\]\s*$') {
                $inner = $matches[1]; $items = @()
                if ($inner.Trim() -ne '') {
                    foreach ($p in ($inner -split ',')) { $x = Strip-Quotes $p; if ($x -ne '') { $items += $x } }
                }
                $arrays[$key] = @($items)
            }
            elseif ($val.Trim() -eq '') {
                $items = @()
                while (($j + 1) -lt $fm.Count -and $fm[$j + 1] -match '^\s*-\s+(.*)$') { $items += (Strip-Quotes $matches[1]); $j++ }
                if ($items.Count -gt 0) { $arrays[$key] = @($items) } else { $scalars[$key] = "" }
            }
            else { $scalars[$key] = Strip-Quotes $val }
        }
        $j++
    }
    return @{ scalars = $scalars; arrays = $arrays; body = $body }
}

# ── 카드 로드 ────────────────────────────────────────────────────────────
$cards = [ordered]@{}
$byTitle = @{}
foreach ($f in (Get-ChildItem $cardsDir -Filter *.md | Sort-Object Name)) {
    $name = $f.BaseName
    $d = Parse-Doc ([System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8))
    if ($null -eq $d) { Write-Host "  [경고] frontmatter 없음: $name"; continue }
    $tags = @($d.arrays['tags'])
    $card = [PSCustomObject]@{
        name    = $name
        title   = if ($d.scalars.ContainsKey('title')) { $d.scalars['title'] } else { '' }
        tags    = $tags
        related = @($d.arrays['related'])
        parent  = if ($d.scalars.ContainsKey('parent')) { $d.scalars['parent'] } else { '' }
        status  = if ($d.scalars.ContainsKey('status')) { $d.scalars['status'] } else { '' }
        result  = if ($d.scalars.ContainsKey('result')) { $d.scalars['result'] } else { '' }
        aliases = @($d.arrays['aliases'])
        body    = $d.body
        hasBracketRelated = ((@($d.arrays['related']) -join '') -match '\[\[')
    }
    $cards[$name] = $card
    $t = $card.title
    if ($t -ne '') { if (-not $byTitle.ContainsKey($t)) { $byTitle[$t] = @() }; $byTitle[$t] = @($byTitle[$t]) + $name }
}

# sync-content.mjs resolveName 과 동일: byBase → byTitle(완성 우선) → sluggify → aliases
function Resolve-Ref($ref) {
    if ($null -eq $ref) { return $null }
    $n = ([string]$ref).Trim()
    if ($n -eq '') { return $null }
    if ($cards.Contains($n)) { return $n }
    if ($byTitle.ContainsKey($n)) {
        $cand = @($byTitle[$n])
        $done = @($cand | Where-Object { $cards[$_].status -eq '완성' })
        if ($done.Count -gt 0) { return $done[0] }
        return $cand[0]
    }
    $sl = Sluggify $n
    if ($cards.Contains($sl)) { return $sl }
    foreach ($k in $cards.Keys) { if ($cards[$k].aliases -contains $n) { return $k } }
    return $null
}
function Title-Of($base) { $c = $cards[$base]; if ($c -and $c.title) { return $c.title } return $base }

$report = New-Object System.Collections.Generic.List[string]
function Say($s) { Write-Host $s }

# ── 1. frontmatter 정규화 점검 ──────────────────────────────────────────
Say ""; Say "===== 1. frontmatter 정규화 ====="
$fmIssues = 0
foreach ($k in $cards.Keys) {
    $c = $cards[$k]
    if ($c.hasBracketRelated) { Say "  [related에 [[]] 대괄호] $k"; $fmIssues++ }
    if ($c.tags.Count -eq 0)   { Say "  [tags 없음] $k"; $fmIssues++ }
    if ($c.status -eq '')      { Say "  [status 없음] $k"; $fmIssues++ }
    if ($c.title -eq '')       { Say "  [title 없음] $k"; $fmIssues++ }
}
if ($fmIssues -eq 0) { Say "  이상 없음" }

# ── 3. 빈 위키링크 점검 (본문) ──────────────────────────────────────────
function Broken-Wikilinks($body) {
    $res = @()
    foreach ($m in [regex]::Matches($body, '\[\[([^\]]+)\]\]')) {
        $inner = $m.Groups[1].Value.Trim()
        if (Resolve-Ref $inner) { continue }
        $a1 = ($inner -split '\|')[0].Trim(); $a2 = ($inner -split '#')[0].Trim()
        if ((Resolve-Ref $a1) -or (Resolve-Ref $a2)) { continue }
        $res += $inner
    }
    return $res
}
Say ""; Say "===== 3. 빈 위키링크 (본문 [[...]] → 없는 카드) ====="
$wlIssues = 0
foreach ($k in $cards.Keys) {
    foreach ($b in (Broken-Wikilinks $cards[$k].body)) { Say "  [$k] -> [[$b]]"; $wlIssues++ }
}
if ($wlIssues -eq 0) { Say "  이상 없음" }

# ── 심화 노트 로드 ───────────────────────────────────────────────────────
$deep = [ordered]@{}
foreach ($f in (Get-ChildItem $deepDir -Filter *.md | Sort-Object Name)) {
    $d = Parse-Doc ([System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8))
    if ($null -eq $d) { continue }
    $deep[$f.BaseName] = [PSCustomObject]@{
        name   = $f.BaseName
        title  = if ($d.scalars.ContainsKey('title')) { $d.scalars['title'] } else { $f.BaseName }
        tags   = @($d.arrays['tags'])
        chains = @($d.arrays['chains'])
        cards  = @($d.arrays['cards'])
        body   = $d.body
    }
}

# ── 4. 심화 노트 참조 점검 ──────────────────────────────────────────────
Say ""; Say "===== 4. 심화 노트 참조 (chains/cards·본문 위키링크) ====="
$dnIssues = 0
foreach ($nk in $deep.Keys) {
    $dn = $deep[$nk]
    foreach ($ref in (@($dn.chains) + @($dn.cards))) {
        if ($null -eq $ref -or ([string]$ref).Trim() -eq '') { continue }
        if (-not (Resolve-Ref $ref)) { Say "  [$nk] chains/cards -> $ref"; $dnIssues++ }
    }
    foreach ($b in (Broken-Wikilinks $dn.body)) { Say "  [$nk] 본문 -> [[$b]]"; $dnIssues++ }
}
if ($dnIssues -eq 0) { Say "  이상 없음" }

# ── 5. 해설 없는 체인 점검 ──────────────────────────────────────────────
$children = @{}
foreach ($k in $cards.Keys) {
    $pf = if ($cards[$k].parent) { Resolve-Ref $cards[$k].parent } else { $null }
    if ($pf) { if (-not $children.ContainsKey($pf)) { $children[$pf] = @() }; $children[$pf] = @($children[$pf]) + $k }
}
function Expand-Tree($rootName) {
    $set = New-Object System.Collections.Generic.HashSet[string]
    $stack = New-Object System.Collections.Stack; $stack.Push($rootName)
    while ($stack.Count -gt 0) {
        $n = $stack.Pop(); [void]$set.Add($n)
        if ($children.ContainsKey($n)) { foreach ($ch in $children[$n]) { if (-not $set.Contains($ch)) { $stack.Push($ch) } } }
    }
    return $set
}
$covered = New-Object System.Collections.Generic.HashSet[string]
foreach ($dn in $deep.Values) {
    foreach ($ref in @($dn.chains)) { $rf = Resolve-Ref $ref; if ($rf) { foreach ($m in (Expand-Tree $rf)) { [void]$covered.Add($m) } } }
    foreach ($ref in @($dn.cards))  { $rf = Resolve-Ref $ref; if ($rf) { [void]$covered.Add($rf) } }
}
Say ""; Say "===== 5. 해설 없는 체인 (parent 트리인데 심화 노트에 안 걸림) ====="
$chIssues = 0
foreach ($r in ($cards.Keys | Where-Object { $cards[$_].parent -eq '' } | Sort-Object)) {
    if (-not $children.ContainsKey($r)) { continue }
    $tree = Expand-Tree $r
    $any = $false; foreach ($m in $tree) { if ($covered.Contains($m)) { $any = $true; break } }
    if (-not $any) { Say "  루트 $r (카드 $($tree.Count)장)"; $chIssues++ }
}
if ($chIssues -eq 0) { Say "  이상 없음" }

# ── 2. related 상호 채우기 (계산) ───────────────────────────────────────
function Overlap($a, $b) {
    $c = 0; foreach ($t in @($a.tags)) { if (@($b.tags) -contains $t) { $c++ } }; return $c
}
$existingResolved = @{}
foreach ($k in $cards.Keys) {
    $set = New-Object System.Collections.Generic.List[string]
    foreach ($r in @($cards[$k].related)) { $rn = Resolve-Ref $r; if ($rn -and -not $set.Contains($rn)) { [void]$set.Add($rn) } }
    $existingResolved[$k] = $set
}
$additions = @{}
foreach ($k in $cards.Keys) {
    $c = $cards[$k]
    $cand = @()
    foreach ($ok in $cards.Keys) {
        if ($ok -eq $k) { continue }
        $ov = Overlap $c $cards[$ok]
        if ($ov -ge 2) { $cand += [PSCustomObject]@{ name = $ok; ov = $ov } }
    }
    $cand = @($cand | Sort-Object -Property @{Expression='ov';Descending=$true}, @{Expression='name';Descending=$false})
    $cur = $existingResolved[$k]
    $toAdd = New-Object System.Collections.Generic.List[string]
    foreach ($x in $cand) {
        if (($cur.Count + $toAdd.Count) -ge 5) { break }
        if ($cur.Contains($x.name) -or $toAdd.Contains($x.name)) { continue }
        [void]$toAdd.Add($x.name)
    }
    if ($toAdd.Count -gt 0) { $additions[$k] = @($toAdd) }
}
$totalAdd = 0; foreach ($k in $additions.Keys) { $totalAdd += $additions[$k].Count }
Say ""; Say "===== 2. related 상호 채우기 ====="
Say "  추가 대상 카드 $($additions.Count)장, 링크 $totalAdd 개"
foreach ($k in ($additions.Keys | Sort-Object)) { Say "  [$k] +$($additions[$k].Count): $((@($additions[$k]) | ForEach-Object { $_ }) -join ', ')" }

# ── index.md 재생성 (내용 생성; -Apply 시 기록) ─────────────────────────
function Card-Row($c) {
    $cat = if ($c.tags.Count -gt 0) { $c.tags[0] } else { '' }
    $sub = if ($c.tags.Count -gt 1) { ($c.tags[1..($c.tags.Count - 1)] -join ', ') } else { '' }
    return "$($c.title) | $cat | $sub | $($c.result) | $($c.status)"
}
function Deep-Row($dn) {
    $cat = if ($dn.tags.Count -gt 0) { $dn.tags[0] } else { '' }
    $chainTitles = @(); foreach ($r in @($dn.chains)) { $rf = Resolve-Ref $r; if ($rf) { $chainTitles += (Title-Of $rf) } elseif ($r) { $chainTitles += $r } }
    $cardTitles  = @(); foreach ($r in @($dn.cards))  { $rf = Resolve-Ref $r; if ($rf) { $cardTitles  += (Title-Of $rf) } elseif ($r) { $cardTitles += $r } }
    if ($chainTitles.Count -eq 0 -and $cardTitles.Count -gt 0) {
        $roots = "(체인 일부) " + ($cardTitles -join ', ')
    } else {
        $roots = ($chainTitles -join ', ')
        if ($cardTitles.Count -gt 0) { $roots += " (+ " + ($cardTitles -join ', ') + ")" }
    }
    return "$($dn.title) | $cat | $roots"
}

# 기존 index.md 의 행 순서를 보존한다: 제목→행 매핑을 만들고, 현재 순서대로 재출력 후 새 항목을 append.
$oldIndex = if (Test-Path $indexPath) { [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8) } else { "" }
$oldLines = $oldIndex -split "`r?`n"
$cardOrder = @(); $deepOrder = @(); $inDeep = $false
foreach ($l in $oldLines) {
    if ($l -match '^##\s*심화') { $inDeep = $true; continue }
    if ($l -notlike '*|*') { continue }
    if ($l -like '제목 |*' -or $l -like '--- |*') { continue }
    $t = ($l -split ' \| ')[0].Trim()
    if ($inDeep) { $deepOrder += $t } else { $cardOrder += $t }
}
# 카드: 기존 순서 우선, 새 카드는 뒤에
$cardRows = New-Object System.Collections.Generic.List[string]
$emitted = @{}
foreach ($t in $cardOrder) {
    $base = $null
    if ($byTitle.ContainsKey($t)) { $base = (Resolve-Ref $t) }
    if ($base -and -not $emitted.ContainsKey($base)) { $cardRows.Add((Card-Row $cards[$base])); $emitted[$base] = $true }
}
foreach ($k in $cards.Keys) { if (-not $emitted.ContainsKey($k)) { $cardRows.Add((Card-Row $cards[$k])); $emitted[$k] = $true } }
# 심화 노트: 기존 순서 우선, 새 노트는 뒤에
$deepTitleToBase = @{}; foreach ($nk in $deep.Keys) { $deepTitleToBase[$deep[$nk].title] = $nk }
$deepRows = New-Object System.Collections.Generic.List[string]
$demit = @{}
foreach ($t in $deepOrder) { if ($deepTitleToBase.ContainsKey($t)) { $b = $deepTitleToBase[$t]; if (-not $demit.ContainsKey($b)) { $deepRows.Add((Deep-Row $deep[$b])); $demit[$b] = $true } } }
foreach ($nk in $deep.Keys) { if (-not $demit.ContainsKey($nk)) { $deepRows.Add((Deep-Row $deep[$nk])); $demit[$nk] = $true } }

$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine("# 카드 인덱스")
[void]$sb.AppendLine("")
[void]$sb.AppendLine("제목 | 대분류 | 세부태그 | result | status")
[void]$sb.AppendLine("--- | --- | --- | --- | ---")
foreach ($r in $cardRows) { [void]$sb.AppendLine($r) }
[void]$sb.AppendLine("")
[void]$sb.AppendLine("## 심화 노트")
[void]$sb.AppendLine("")
[void]$sb.AppendLine("이미 해설이 있는 체인이다. 이 체인을 이어가면 새 노트를 만들지 말고 해당 노트에 절을 덧붙인다.")
[void]$sb.AppendLine("")
[void]$sb.AppendLine("제목 | 대분류 | 다루는 루트 카드")
[void]$sb.AppendLine("--- | --- | ---")
foreach ($r in $deepRows) { [void]$sb.AppendLine($r) }
$newIndex = $sb.ToString() -replace "`r`n", "`n"
if (-not $newIndex.EndsWith("`n")) { $newIndex += "`n" }

Say ""; Say "===== 6. index.md 재생성 ====="
$indexChanged = ($newIndex.TrimEnd() -ne $oldIndex.Replace("`r`n","`n").TrimEnd())
if ($indexChanged) { Say "  변경 있음 (카드 $($cardRows.Count)행 · 심화 $($deepRows.Count)행)" }
else { Say "  변경 없음 (이미 최신)" }

# ── 적용 ────────────────────────────────────────────────────────────────
if ($Apply) {
    Say ""; Say "----- 적용 중 -----"
    $filesChanged = 0
    foreach ($k in $additions.Keys) {
        $adds = @($additions[$k] | Where-Object { $_ -and ([string]$_).Trim() -ne '' })
        if ($adds.Count -eq 0) { continue }
        $path = Join-Path $cardsDir ($k + ".md")
        $raw = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
        $crlf = $raw.Contains("`r`n")
        $lines = $raw -split "`r?`n"
        $newList = New-Object System.Collections.Generic.List[string]
        foreach ($e in @($cards[$k].related)) { if ($e -and ([string]$e).Trim() -ne '') { $newList.Add([string]$e) } }
        foreach ($a in $adds) { $newList.Add([string]$a) }
        $items = ($newList | ForEach-Object { '"' + $_ + '"' }) -join ', '
        $idx = -1
        for ($i = 0; $i -lt $lines.Count; $i++) { if ($lines[$i] -match '^related:') { $idx = $i; break } }
        if ($idx -lt 0) { Say "  [건너뜀: related 라인 없음] $k"; continue }
        $lines[$idx] = "related: [$items]"
        $nl = if ($crlf) { "`r`n" } else { "`n" }
        [System.IO.File]::WriteAllText($path, ($lines -join $nl), $utf8NoBom)
        $filesChanged++
    }
    Say "  related 적용: $filesChanged 개 파일"
    if ($indexChanged) { [System.IO.File]::WriteAllText($indexPath, $newIndex, $utf8NoBom); Say "  index.md 재생성 완료" }
    else { Say "  index.md 변경 없음" }
} else {
    Say ""; Say "  (리포트 전용 모드 — 적용하려면 -Apply 를 붙여 다시 실행)"
}

$stubs = @($cards.Values | Where-Object { $_.status -ne '완성' }).Count
Say ""; Say "요약: 카드 $($cards.Count)장 (스텁 $stubs), 심화 노트 $($deep.Count)편, related 추가 후보 $totalAdd 개"
