# AngularBasics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Project detailing

-- Global feed
-- CRUD
-- Like/Dislike a post
-- Registration
-- Login, Authorization(Local storage token)
-- Routing
-- Pagination
-- NgRx State Management


## Architecture of project

/app
    /article
        /components
        /store(NgRx)
        /types
        /services
            article.service.ts(non shareable)
        article.routes
    /globalFeed
        /components
            /globalFeed
        globalFeed.routes(Lazy loading)
    /shared
        /components
            /backendErrorMessages
                backendErrorMessages.component.ts
            /popularTags
                popularTags.component.ts
                /types
                /store
                /services
        /types
            article.interface.ts
        /services
            article.service.ts(shareable)
    /app.routes
main.ts
