@echo off
chcp 65001 >nul
cd /d "%~dp0"
title I'M ROMA Bootcamp

echo.
echo  Iniciando servidor local (puerto 8765)...
echo  Carpeta: %~dp0
echo.

start "I'M ROMA serve" /MIN cmd /k cd /d "%~dp0" ^& npx --yes serve -l 8765 .

echo  Esperando a que el servidor arranque (8 segundos)...
timeout /t 8 /nobreak >nul

echo  Abriendo Chrome o Edge...
start "" "http://127.0.0.1:8765/bootcamp.html"

echo.
echo  Si la pagina sale en blanco o "no carga", espera 10 s mas y abre:
echo  http://127.0.0.1:8765/bootcamp.html
echo.
echo  O usa: ABRIR-BOOTCAMP-SIN-SERVIDOR.bat  (sin localhost)
echo.
pause
