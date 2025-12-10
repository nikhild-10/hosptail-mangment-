@echo off
cd /d "%~dp0"
echo Adding files to git...
git add .
echo Committing changes...
git commit -m "Complete Frontend Implementation: Admin/Doctor Portals & Vercel Deployment"
echo Pushing to remote...
git push origin main
echo Done!
pause
