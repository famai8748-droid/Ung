@echo off
cd /d "%~dp0"
title IS Study Web Server
cls
echo ========================================================================
echo   IS STUDY AND EXAM HUB - SERVER LAUNCHER
echo ========================================================================
echo.
echo Starting Web Server, opening browser, and creating Public URL...
echo.
node server.js
pause
