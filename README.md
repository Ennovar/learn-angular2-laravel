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
### Api
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
