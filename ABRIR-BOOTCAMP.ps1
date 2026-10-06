# Servidor local bootcamp — carpeta con espacios OK
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -LiteralPath $Root

Write-Host "`nI'M ROMA Bootcamp — localhost:8765`n" -ForegroundColor DarkMagenta

Start-Process -WindowStyle Minimized -FilePath "cmd.exe" -ArgumentList @(
  "/k", "cd /d `"$Root`" && npx --yes serve -l 8765 ."
)

Write-Host "Esperando servidor (10 s)..."
Start-Sleep -Seconds 10

Start-Process "http://127.0.0.1:8765/bootcamp.html"

Write-Host @"

Si no carga:
  1. Abre http://127.0.0.1:8765/bootcamp.html en Chrome manualmente
  2. O ejecuta ABRIR-BOOTCAMP-SIN-SERVIDOR.bat

"@

Read-Host "Enter para cerrar (el servidor sigue en la ventana minimizada)"
