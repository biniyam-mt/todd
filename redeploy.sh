npm run build
# cd ../toddaustin
# rm -r *
# cd ../todd/
cp -r ./build/* ../toddaustin
cd ../toddaustin
git add .
git commit -m "rebuilt"
git push
cd ../todd/
