git merge temp-master scheduled-builds
date +%s > deploy.current
git add -A
git commit -m "Scheduled build."
git push origin Scheduled-builds

