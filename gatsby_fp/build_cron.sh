git merge master Scheduled-builds
date +%s > deploy.current
git add -A
git commit -m "Scheduled build."
git push origin Scheduled-builds

