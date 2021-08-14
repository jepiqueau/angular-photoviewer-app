<p align="center"><br><img src="https://avatars3.githubusercontent.com/u/16580653?v=4" width="128" height="128" /></p>

<h3 align="center">Ionic/Angular Photoviewer App Starter</h3>
<p align="center"><strong><code>angular-photoviewer-app</code></strong></p>
<p align="center">Ionic/Angular application demonstrating the use of the</p>
<p align="center"><strong><code>@capacitor-community/photoviewer</code></strong></p>
<br>
<p align="center"><strong><code>this app uses Capacitor3</code></strong></p>
<br>
<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2021?style=flat-square" />
  <a href="https://github.com/jepiqueau/angular-photoviewer-app"><img src="https://img.shields.io/github/license/jepiqueau/angular-photoviewer-app?style=flat-square" /></a>
  <a href="https://github.com/jepiqueau/angular-photoviewer-app"><img src="https://img.shields.io/github/package-json/v/jepiqueau/angular-photoviewer-app/master?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors-"><img src="https://img.shields.io/badge/all%20contributors-1-orange?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
</p>

## Maintainers

| Maintainer        | GitHub                                    | Social |
| ----------------- | ----------------------------------------- | ------ |
| Quéau Jean Pierre | [jepiqueau](https://github.com/jepiqueau) |        |


## Installation

To start building your App using this Starter App, clone this repo to a new directory:

```bash
git clone https://github.com/jepiqueau/angular-photoviewer-app.git 
cd angular-photoviewer-app
git remote rm origin
```

 - then install it

```bash
npm install
```

 - then go to the building process

```bash
npm run build
npx cap sync
npm run build
npx cap copy
npx cap copy web
```

the capacitor config parameters are:

```
  "appId": "com.jeep.app.ionic.angular",
  "appName": "angular-photoviewer-app",
```

### Building Web Code

The `@capacitor-community/photoviewer` is using a companion Stencil component `jeep-photoviewer`.


```bash
ionic serve
```

### Building Native Project


#### Android

```bash
npx cap open android
```
Once Android Studio launches, you can build your app through the standard Android Studio workflow.

### iOS

```bash
npx cap open ios
```



## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/jepiqueau"><img src="https://avatars3.githubusercontent.com/u/16580653?v=4" width="100px;" alt=""/><br /><sub><b>Jean Pierre Quéau</b></sub></a><br /><a href="https://github.com/jepiqueau/angular-photoviewer-app/commits?author=jepiqueau" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
