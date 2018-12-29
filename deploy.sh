#!/bin/bash
next build 
next export 
touch out/.nojekyll
touch out/CNAME
echo "crossword.chicagomaroon.com" >> out/CNAME
git add out/ 
git commit -m "Deploy to gh-pages" 
git subtree push --prefix out origin gh-pages