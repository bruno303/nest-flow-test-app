<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description
Proof of concept to see different flows applied in same entity with different types.

## Flow
```mermaid
graph TD
    create[Create] --> prod{Product type}
    prod -->|Car| approve_car[Approve Car]
    prod -->|House| approve_house[Approve House]
    prod -->|Supplies| pay_taxes[Pay taxes]
    approve_car --> pay_taxes
    approve_house --> pay_taxes
    pay_taxes --> confirm_taxes[Confirm taxes payment]
    confirm_taxes --> prod2{Product type}
    prod2 -->|Car| register_car[Register Car]
    prod2 -->|House| register_house[Register House]
    prod2 -->|Supplies| pay[Pay]
    register_car --> pay
    register_house --> pay
    
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
