@echo off
cd /d "%~dp0"
echo Adding files to git...
git add .
echo Committing changes...
git commit -m "Add Heart Pulse Animation to Navbar"
echo Pushing to remote...
git push origin main
echo Done!
pause
