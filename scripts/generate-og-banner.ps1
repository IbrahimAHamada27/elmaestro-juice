Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630
$bmp = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Background deep forest green #174D32
$bgColor = [System.Drawing.ColorTranslator]::FromHtml("#174D32")
$bgBrush = New-Object System.Drawing.SolidBrush($bgColor)
$g.FillRectangle($bgBrush, 0, 0, $width, $height)

# Load hero photo
$heroPath = Resolve-Path "public/images/brand/elmaestro-hero.jpg"
if (Test-Path $heroPath) {
    $heroImg = [System.Drawing.Image]::FromFile($heroPath)
    $imgRect = New-Object System.Drawing.Rectangle(660, 35, 505, 560)
    $g.DrawImage($heroImg, $imgRect)
    $heroImg.Dispose()

    $goldPen = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml("#D5A449"), 4)
    $g.DrawRectangle($goldPen, $imgRect)
    $goldPen.Dispose()
}

# Load Logo badge
$logoPath = Resolve-Path "public/images/brand/elmaestro-logo.png"
if (Test-Path $logoPath) {
    $logoImg = [System.Drawing.Image]::FromFile($logoPath)
    $logoRect = New-Object System.Drawing.Rectangle(80, 50, 160, 160)
    $g.DrawImage($logoImg, $logoRect)
    $logoImg.Dispose()
}

# Typography
$fontFamily = New-Object System.Drawing.FontFamily("Arial")
$titleFont = New-Object System.Drawing.Font($fontFamily, 32, [System.Drawing.FontStyle]::Bold)
$subFont = New-Object System.Drawing.Font($fontFamily, 22, [System.Drawing.FontStyle]::Bold)
$tagFont = New-Object System.Drawing.Font($fontFamily, 16, [System.Drawing.FontStyle]::Regular)

$whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$goldBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#D5A449"))
$mutedBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#EAF5EC"))

$g.DrawString("المايسترو", $titleFont, $whiteBrush, 80, 230)
$g.DrawString("محمصات وفريشات - مدينة العبور", $subFont, $goldBrush, 80, 290)
$g.DrawString("عصائر طبيعية فريش 100% • ركن القهوة والآيس كوفي", $tagFont, $mutedBrush, 80, 350)
$g.DrawString("سنتر العبور (بجوار أبو حلب) • دليفري 24 ساعة: 01037733214", $tagFont, $whiteBrush, 80, 395)

# Button Pill
$pillBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#279653"))
$g.FillRectangle($pillBrush, 80, 470, 420, 50)
$pillFont = New-Object System.Drawing.Font($fontFamily, 16, [System.Drawing.FontStyle]::Bold)
$g.DrawString("طلب أونلاين سريع وتوصيل لجميع أحياء العبور", $pillFont, $whiteBrush, 95, 482)

$outPath = Resolve-Path "public/images/brand"
$outFile = Join-Path $outPath "elmaestro-og-banner.jpg"
$bmp.Save($outFile, [System.Drawing.Imaging.ImageFormat]::Jpeg)

$g.Dispose()
$bmp.Dispose()
Write-Host "Created OG Banner at $outFile"
