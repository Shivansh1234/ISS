# ISS

ISS is a Frontend application which will provide the realtime location of International Space Station. It is integrated with Google Maps and consumes a backend API which will point out the exact location of the ISS overhead.

## Before You Begin
Before you begin, I recommend you read about the basic building blocks of an Angular application:
* Angular - Angular's [Official Website](https://angular.io/docs/) is a great starting point. You can kickstart with the official [tour of heroes](https://angular.io/tutorial/) guide.
* Google Maps Javascript API - You need to create an API key to integrate application with Google maps. You can create your key [here](https://developers.google.com/maps/documentation/javascript/get-api-key).


## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Visual Studio Code - I recommend using [VSC](https://code.visualstudio.com/download) to code this application further, But you can use any other Code editor of your choice.
* Angular - Install [Angular](https://angular.io/cli), followed by [Material](https://material.angular.io/guide/getting-started)

```bash
$ npm install -g @angular/cli
```

```bash
$ ng add @angular/material
```

## Quick Install
Once you've downloaded the boilerplate and installed all the prerequisites, proceed to install the dependencies. Run this command in frontend application folder from the command-line:

```bash
$ npm install
```

This command does a few things:
* First it will install the dependencies required for the application to run.
* To update these packages later on, just run `npm update`

## Few Checks about API
* If you are using an unpaid API, please expect a muddy map with watermark (For development purposes only).
* You need to add API key in index.html file.

## Running Your Application

### Run your Angular server using npm:

```bash
$ ng serve
```
Your frontend application should run on port 4200 with the environment configuration, so in your browser just go to [http://localhost:4200](http://localhost:4200)

---
THAT'S IT! YOUR APPLICATION SHOULD BE RUNNING NOW.
