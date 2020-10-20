# Cypress Assignment

This is a Cypress project that automates Celonis website

## Framework Details

1. It is using Page Object Model as a design pattern
2. Base URL, Username is stored in cypress.json config file
3. Password is passed as a Cypress environment variable. Should be configured when run on a CI server like Jenkins/Gitlab
4. Hardcoded string are stored in hash in a separate file under stubData folder
4. Two npm scripts have been defined
     a. 'open' - Opens up Cypress application and should be used while developing the tests locally
     b. 'run:chrome' - Runs all the tests on Chrome browser. Should be used while running on CI server like Jenkins/Gitlab

## Installation

Run the following command to install all npm dependencies

```bash
npm install
```

## Usage

While executing the tests, we need to use 'CYPRESS_password' environment variable for password.

Run the following command to execute the tests

```bash
CYPRESS_password=<password> npm run run:chrome
```