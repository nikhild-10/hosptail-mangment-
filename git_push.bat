@echo off
cd /d "%~dp0"
echo Adding files to git...
git add .
echo Committing changes...
git commit -m "Visual Overhaul: 3D Animations & Scroll Effects"
echo Pushing to remote...
git push origin main
echo Done!
pause
