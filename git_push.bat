@echo off
cd /d "%~dp0"
echo Adding files to git...
git add .
echo Committing changes...
git commit -m "Configure backend for Render: Switch to Postgres and fix build"
echo Pushing to remote...
git push origin main
echo Done!
pause
