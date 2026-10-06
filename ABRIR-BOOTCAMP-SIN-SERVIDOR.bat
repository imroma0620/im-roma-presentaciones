@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Abriendo menu del bootcamp en tu navegador (sin localhost)...
start "" "%~dp0bootcamp.html"
echo.
echo Si no se abre, ve a esta carpeta y doble clic en bootcamp.html
echo.
pause
