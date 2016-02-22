# learn-angular2-laravel
## Prerequisites
### Install The Following
- [php composer](https://getcomposer.org/) (dependency manager for php)
- [laravel](https://laravel.com/) web app framework
- [node](https://nodejs.org/en/)
- [angularjs2](https://angular.io/) (check package.json)
- [chrome](https://www.google.com/intl/en/chrome/browser/desktop/index.html#brand=CHMB&utm_campaign=en&utm_source=en-ha-na-us-sk&utm_medium=ha)
- [chrome Cors extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)

## Project Structure
- api -> Laravel 5 app
- client-js -> Javascript version of a AngularJS 2 app (not finished/ typescript is the perfered method for angular 2)
- client-ts -> Typescript version (recommended)

## Getting Started
### Api (Laravel)
*Initial Setup*
- To run the API you must have all the above installed and ready to go.
- Mysql must also be installed, it is also helpful to install the toolbench that comes with it. The toolbench will let you view data and your table structures.
- Make sure mysql is running
- Create an inital database with the toolbench or CLI so our api can connect to it.
- edit the database config file to connect to the DB, also the .env with passwords to connect to your mysql service.

*Install Dependencies Locally*
Using composer we need to install the dependecies that are in the composer.json file.
> composer install # make sure you are in the api directory when executing any of these commands

*DB Migrations*
The next thing we need to do is setup the tables that hold our blog model.
> php artisan migrate # creates the tables in the DB

*Make Sure DB Setup Correctly*
connect to the local port that is configured for mysql and use the toolbench to see that the table was made properly

*Should Work To Start Server*
> php artisan serve # start server

### Client (Angular 2)
*NOTE: Angularjs 2 apps can be written in js or typescript although typscript is better documented*

*Inital Setup*
- To run the client you must have all the above installed and ready to go.
- Installing angular is as simple as installing some node packages
**Example package.json for a simple angular app**

```
 {
  "name": "angular2-quickstart",
  "version": "1.0.0",
  "scripts": {
    "postinstall": "npm run typings install",
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "lite": "lite-server",
    "start": "concurrent \"npm run tsc:w\" \"npm run lite\" ",
    "typings" : "typings"
  },
  "license": "ISC",
  "dependencies": {
    "angular2": "2.0.0-beta.6",
    "systemjs": "0.19.20",
    "es6-promise": "^3.0.2",
    "es6-shim": "^0.33.3",
    "reflect-metadata": "0.1.2",
    "rxjs": "5.0.0-beta.0",
    "zone.js": "0.5.14"
  },
  "devDependencies": {
    "concurrently": "^1.0.0",
    "lite-server": "^2.0.1",
    "typescript": "^1.7.5",
    "typings":"^0.6.8"
  }
}
```
> npm install # make sure you are in the client-ts directory of the project

this will start chrome and show the app on port 3000


### Reporting Errors
- create an issue if this tutorial misses steps -> fixing it and creating a pull request would be even better
- create an issue if something needs explained better
