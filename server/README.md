# Tweet Saver aka Save On Tweets!

## The Back-End
## Introduction
The user facing app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In order to achieve the task at hand, below NPM packages, frameworks, and libraries were consumed
- KoaJS
- Koa-Router
- dotend
- node-fetch
- Twit

## How to run the app


> **Important Node**: <br>
> Before you run the server, you must add your own Twitter API consumer keys and access tokens for the server to run correctly.

Once that's done, in the project directory, please go to the client sub-directory using below command

`cd server`

Once inside, please run following command to run the application

```shell
npm install
npm start
```

This will install all the dependencies and will run the app on the 4100 port.\

## Thought Process

The application has been organised in a simple yet as semantically standard manner as possible, as below:
1. The *src* folder hosts the majority of development work
2. Inside the *src* folder, all the React visual components are under the *components* folder
3. The configuration related data, server URL, server PORT etc. is listed under *config*
4. The visual containers, (at the moment, we only have one) are hosted under *containers* directory
5. The *store* directory, as the name suggested initialises the Application store
6. The *utils* directory hosts utilities such as DnD item types, and local storage related operations

## TODO
While I had so much fun building this app, I would definitely want to add a few features to make it even more usable and appealing.\
As far as I can think of at the moment, some TODO items are as below:

*   **Localisation**

    For any standard web application to make a real outreach, localisation plays an important role. I would love to localise the app into at least two languages.

*   **Night Mode**

    This tiny little feature could make the app way more fun and useful

*   **Accessibility**

    While I have tried as much as possible to include ARIA labels and keyboard focus, there's still so much more to do. Especially if the focus is on implementing the W3C ARIA guidelines.
    Regardless, I think it's really important to keep accessibility in mind when building web applications.

*   **Testing**, more automated testing, and more testing!
