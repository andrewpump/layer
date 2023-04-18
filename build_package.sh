

cd ./layer-test-create-react-app
rm -r ./node_modules
npm install
cd ..

cd ./layer-test-create-react-app/node_modules/react
npm link
cd ../../..

cd ./layer-react-npm-package
rm -r ./node_modules
npm i
npm link react
npm link
npm run rollup
cd ..

cd ./layer-test-create-react-app
npm link duckdevatgit-layer
cd ..