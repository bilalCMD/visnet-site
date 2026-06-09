@echo off
REM ============================================================
REM  VIS Networks - local preview (clean URLs, no .html)
REM  Double-click this file to view the site at localhost:8000
REM ============================================================
cd /d "%~dp0"

where python >nul 2>nul
if %errorlevel%==0 (
  python run-local.py
  goto :eof
)

where py >nul 2>nul
if %errorlevel%==0 (
  py run-local.py
  goto :eof
)

echo.
echo  Python is not installed. Two options:
echo    1) Install Python from https://python.org  then double-click this file again.
echo    2) Or just deploy the folder to Netlify / GitHub Pages - clean URLs work there automatically.
echo.
pause
