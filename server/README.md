# Tweet Saver aka Save On Tweets!
## The API provider (Back-End)

## Introduction

In order to achieve the task at hand, below NPM packages, frameworks, and libraries were consumed
- KoaJS
- Koa-Router
- dotenv
- node-fetch
- Twit

## How to run the app


> **Important Node**: <br>
> Before you start the server, you must specify your Twitter API consumer keys and access tokens for the server to run correctly, inside the ``.env`` file

Once that's done, in the project directory, please go to the server sub-directory using below command

`cd server`

Once inside, please run following command to run the application

```shell
npm install
npm start
```

This will install all the dependencies and will run the app on the 4100 port.

## Thought Process

The server has been organised with below directory structure:
1. The ``.env`` (dotenv) file is located at the root of the server directory.
   
    This file holds the Twitter API access keys and tokens etc. In order to run the application without any issues, you must provide your API credentials.
   
2. The ``index.js`` acts as an entry point to the application.
   
    It starts the server, the router and a few other basic server configurations
   
3. The *src* directory hosts the majority of development work
   
   Inside the *src* folder, all the controllers are under the *controllers* directory
   The routes are specified under the *routes* directory
   
4. The *utils* directory hosts utilities

## TODO
A software is an ongoing process!
As far as I can think of at the moment, some TODO items are as below:

* **Authorisation**
* **Accessibility**
* **Testing**, more automated testing, and more testing!
* Better error/exception handling
* Logging capabilities
