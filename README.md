# Woodside React Typescript Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Getting Started

## Prerequisites

1. [Node JS Version 16](https://nodejs.org/en/download/)
2. [Latest Git](https://git-scm.com/download)
3. [Latest AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
4. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
5. [Yarn]()

```
sudo npm install --location=global yarn
```

## Project Setup

1. Clone this repository onto your local machine
2. Then run below commands into your terminal

```
cd frontend
```

3. We use licensed version of fontawesome so set the license key in your npm config using below command

```
npm config set "@fortawesome:registry" https://npm.fontawesome.com/
npm config set "//npm.fontawesome.com/:_authToken" #LICENSE_KEY#
```

4. Now run below command

```
yarn
```

5. Once installation is successful, run below command to start the app

```
yarn start
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.