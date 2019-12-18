Boilerplate for hot-reload webpack React application.
Clone and run `yarn` to install and `yarn start` to start development.
OR install packages and copy contents of [webpack.config.js](webpack.config.js) as required.

```
#initialize repo
mkdir hotpack && cd hotpack
git init
yarn init -y

#add eslint-airbnb-config with prettier
exec 3<&1;bash <&3 <(curl https://gist.githubusercontent.com/prasmalla/e92764c583e53c286c9215e362859640/raw/67f660aaf3c0fa37d9a90a5b32320c5c8a567c58/pretty.sh 2> /dev/null)

#add webpack/dev-server
yarn global add webpack webpack-cli webpack-dev-server
yarn add webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader @babel/core @babel/preset-env @babel/preset-react -D
touch webpack.config.js

#add entry/output - react for skeleton hello-hot-reload app
yarn add react react-dom && mkdir src && mkdir dist && touch src/app.js && src/index.html && touch README.md

#add server
yarn add express body-parser
yarn add nodemon -D
mkdir server && touch server/server.js && touch src/404.html
mkdir server/routes && touch server/routes/api.js

#fullstack - demo with swapi
yarn add node-fetch react-router-dom file-loader style-loader css-loader node-sass sass-loader
mkdir server/controllers && touch server/controllers/starWars.js
touch src/App.jsx
touch .babelrc
mkdir src/components && touch src/components/Characters.jsx && touch src/components/Character.jsx
mkdir src/assets && mkdir src/assets/images
mkdir src/assets/stylesheets && touch src/assets/stylesheets/layout.scss
```
