# build
npm run build

# navigate into the build output directory
cd build

# commit
git init
git add -A
git commit -m 'deploy'

# if you are deploying to git@github.com:<USERNAME>/<REPO>
git push -f git@github.com:wolfzxcv/react-repos.git master:gh-pages