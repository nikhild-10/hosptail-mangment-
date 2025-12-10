@echo off
cd /d "%~dp0"
echo Adding files to git...
git add .
echo Committing changes...
git commit -m "Enhance Doctor Portal: Mock Login & Analytics Dashboard"
echo Pushing to remote...
git push origin main
echo Done!
pause
