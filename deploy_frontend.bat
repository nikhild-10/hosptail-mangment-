@echo off
cd /d "%~dp0"
cd client
echo Starting Vercel Deployment...
echo [INFO] You might be asked to Log In. Check your browser!
echo [INFO] Press ENTER to accept default settings (Project Name, Directory, etc.)
echo.
cmd /c "npx vercel"
pause
