#!/bin/bash
next build 
next export 
touch out/.nojekyll
touch out/CNAME
echo "games.chicagomaroon.com" >> out/CNAME
git add out/ 
git commit -m "Deploy to gh-pages" 
git push origin --delete gh-pages
git subtree push --prefix out origin gh-pages