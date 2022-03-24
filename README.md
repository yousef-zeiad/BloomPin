<!-- language-all: javascript -->

# BloomPin

React-native iOS / Android app

---

[![Prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://github.com/microsoft/TypeScript)

## Table of Contents
- [BloomPin](#bloompin)
  - [Table of Contents](#table-of-contents)
- [Assets](#assets)
  - [images](#images)
- [Structure](#structure)
  - [yarn start](#yarn-start)
  - [yarn lint](#yarn-lint)
- [Integrations](#integrations)
  - [Expo](#expo)
  - [Styled Components](#styled-components)
  - [React Navigation](#react-navigation)
- [Components](#components)
  - [NumberPad](#numberPad)
  - [Shared](#shared)
- [Environment](#environment)
  - [Git](#git)
  - [Node](#node)
  - [Yarn](#yarn)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

# Assets

Custom assets are used with license and available in the [assets](./assets) folder.

# Structure

Describes the app structure and usage of each part. Add additional ReadMe-files in each folder as needed and link them here.

- [assets](./assets) - place any images and fonts here
- [components](./components) - see **[Components](#Components)** section
- [feature](./features) - main app code divided by feature. A features folder contains all the screens, style, etc for that feature.
- [navigation](./navigation) - [react-navigation](https://reactnavigation.org/) implementation.
- [theme](./theme) - global theming files
- [services](./services) - place to write our SDK's
- [localization](./localization) - Translation handler

<!-- ## yarn pod

Update and install iOS pods. Run after cloning or adding a native module.

## yarn pod-install

As above but with repo update if any pod is out of date, such when you update an NPM package with native modules. -->

## yarn start

Run **`yarn start`** to Start the React-Native packager. You can optionally

- **`yarn clear`** to start and reset cache of the bundler.

## yarn lint

use `yarn lint` to analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs.

# Integrations

## Expo

The app is built using [Expo](https://docs.expo.io/) for React-Native. It allows working with JavaScript without native code and instant releases Over The Air (OTA). The commands (above) uses Expo to start, run, build and deploy the app.

- [app.json](./app.json) - Expo config
- [expo-shared](./.expo-shared/README.md) - shared Expo config for all developers

## Styled Components

Project uses Styled components v5.3.3 for RN to make the styles
read more:

- [styled-components](https://styled-components.com)

## React Navigation

We use React navigation v6 to handle the navigation between the screens and the modals.
Read more:

- [react-navigation-v6](https://reactnavigation.org/docs/getting-started)

# Components

The design uses different components depending on the type of data. Here's a reference to what component to use when.

## NumberPad

A Component that shows the numbers

```typescript

export const NumberButton: React.FC<NumberPadProp> = ({ onPress, number }) => {
  return (
    <Container>
      <NumberContainer>
        {number.map(item => (
          <NumberPad key={item.id} activeOpacity={0.8} onPress={() => onPress(item.number)}>
            <NumberText>{item.number}</NumberText>
          </NumberPad>
        ))}
      </NumberContainer>
    </Container>
  );
};

```

## Shared

A shared component that have the scrollView, SafeAreaView, keyboardAvoidingView and inputLabel etc.

```typescript
import {
  Body,
  KeyboardView,
  StackPage,
} from 'components';

     <StackPage>
       <Body>
        <!--Your work must be here-->
       </Body>
     </StackPage>

```

# Environment

## Git

We're using latest stable. Install the version for your OS from:

**[https://git-scm.com/downloads](https://git-scm.com/downloads 'Download Git')**

## Node

These versions provides stable compatibility with React Native and other frameworks:

- **Node v12.XX** (`node --version`)
- **npm 6.XX** (`npm --version`)

**[Download Node with NPM](https://nodejs.org/download/release/v12.16.3/)**

## Yarn

We install and run our scripts with yarn, as an alternative to npm:

**[Download Yarn](https://yarnpkg.com/lang/en/docs/install/)**

## Visual Studio Code

We use Visual Studio Code with relevant plugins.

- **[React-Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)**
- **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**
- **[TypeScript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero)**
- **[TypeScript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)**
- **[TypeScript toolbox](https://marketplace.visualstudio.com/items?itemName=DSKWRK.vscode-generate-getter-setter)**
- **[Add jsdoc comments](https://marketplace.visualstudio.com/items?itemName=stevencl.addDocComments)**
- **[Expo Tools](https://marketplace.visualstudio.com/items?itemName=byCedric.vscode-expo)**
- **[GitHub](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-github)**
- **[Styled Components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)**
- **[ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)**
- **[Tabnine Autocomplete AI: autocompletion smart code](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)**
