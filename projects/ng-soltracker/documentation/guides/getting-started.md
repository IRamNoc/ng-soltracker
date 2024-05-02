---
title: Getting started
---

# Getting started

With ng-soltracker we are providing an Angular powered user interface (UI) library.

### Prerequisite

You should have Node.js and the Angular CLI installed.

### Automatic setup with ng add

1. **Create your project with [Angular CLI](https://cli.angular.io/):**

    ```console
    npm install -g @angular/cli
    ng new my-allianz-project
    ```

2. **Add ng-soltracker:**

    ```console
    ng add @aposin/ng-soltracker
    ```

    Add the background color of the default theme to your styles file:

    ```scss
    body {
        background: #0f2a3d;
    }
    ```

Congratulations you're done 💪

Now you can include components and start building your application.

### Manual setup

You can also install ng-soltracker manually.

1. **Create your project with [Angular CLI](https://cli.angular.io/):**

    ```
    npm install -g @angular/cli
    ng new my-allianz-project
    ```

2. **Install ng-soltracker and dependencies**

    ```
    cd my-allianz-project
    npm install @aposin/ng-soltracker
    npm install @angular/cdk
    ```

    Depending on your needs, you may also install

    - [iban.js](https://github.com/arhs/iban.js/) if you want to use the [iban mask](./documentation/mask/overview#iban-mask) (`npm install iban`)

    - [moment.js](https://github.com/moment/moment) if you want to use it as the adapter for the [datefield](./documentation/datefield/overview) (`npm install moment`)

    You can check the supported versions of peer dependencies [here](https://github.com/allianz/ng-soltracker/blob/main/projects/ng-soltracker/src/package.json).

3. **Add base styles**

    Add the styles to the `angular.json`. You need the base styles ('normalize.css') and a theme file ('aposin.css' or 'expert.css'):

    ```json
    "architect": {
      "build": {
        "builder": "@angular-devkit/build-angular:browser",
        "options": {
          // ...
          "styles": [
            // ...
            "node_modules/@aposin/ng-soltracker/css/normalize.css",
            "node_modules/@aposin/ng-soltracker/themes/aposin.css"
          ]
        }
      }
    }
    ```

    Add the background color of the default theme to your styles file:

    ```css
    body {
        background: #0f2a3d;
    }
    ```

4. **Add NxExpertModule (optional)**

    In an expert/b2b application you also need the `NxExpertModule` to your `app.module.ts`. More information can be found on the [documentation page about the expert module](./documentation/config/overview).

    ```ts
    // ...
    import { NxExpertModule } from '@aposin/ng-soltracker/config';

    @NgModule({
        imports: [
            // ...
            NxExpertModule,
        ],
        // ...
    })
    export class AppModule {}
    ```

### Device and Browser Support

We fully support the following browsers:

-   Chrome: latest
-   Firefox: latest and extended support release (ESR)
-   MS Edge: 2 most recent major versions
-   Safari: 2 most recent major versions

We do not support IE11 since version 13 and recommend to use modern browsers instead.

### Contributing

We do not support external contributions yet, but hope we can in future.
