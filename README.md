# sample-nodejs-project

## Description

Sample NodeJS project for beginners
Continuation of web-ux course for intermediate learners

### Pre-requisites

- a terminal shell (such as terminal on Mac, or Powershell on Windows) and a basic understanding of using the shell to navigate the file system
- ensure you have install on the terminal, `git`, `node`
- a basic understanding of using `git`, such as `git clone` and `git branch`
- a basic understanding of HTML, CSS and Javascript language
- a basic understanding of JSON

If you're on a Mac this is easy to install with Homebrew.

First update Homebrew with `brew`. Homebrew is a popular package manager for Macs.

```shell
brew update
```

Then install node

```shell
brew install node
```

and git

```shell
brew install git
```

## Getting started

1. Clone this repository onto your computer

Run the below command to download the project files onto your current **working directory**.

> ::bulb A **working directory** is the folder your terminal is operating in.
This could be your Desktop folder, or Downloads folder, or even one you create yourself.

```shell
git clone https://github.com/nlouie/sample-nodejs-project.git
```

2. Install any dependencies

Many node projects are built using other node projects.

`npm` is Node Package Manager

```shell
npm install
```

3. Start your Server with `node`


```shell
npm start
```

Now you can access your node server from your browser.

```
localhost:3000
```

## Background info

### Creating your own NPM project from scratch

Follow this guide and look at the commit history to see how I created this project.

#### Initialize

It's easy to get started with npm (node package manager)

```shell
npm init
```

You can select all its default by pressing Enter.

This will create a new file, `package.json` which contains all the important information about your project such as its name, its **entry point** and other packages it relies on.

##### Entry points

An entry point in this case, is the file that is run first. Think of it as the root to your entire web application. It's defined in the `package.json`, `main` attribute.

#### Create your first js file

copy the below content to `index.js`, or whatever you defined your entrypoint to be.

```Javascript
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

```

### Adding Express

Now that we know how to create a basic node application, let's create another project under the, `app`, directory, using Express, a common Javascript framework. We will not longer be using `src/`

#### Install dependencies

```shell
npm update -g express
```

```shell
sudo npm install -g express-generator
```

#### Create a new project

```shell
express --view="ejs" app
```

#### Install its dependencies

```shell
cd app
npm install
```

#### Doing it yourself

You can view and edit your HTML in `app/views/index.ejs`

stylesheets are found `app/public/stylesheets`

Javascript files are found `app/public/javascripts`

Have fun!

### Model View Controller

A model view controller (MVC) architecture is common in software engineering.

A model describes the data
A view describes how the data is presented
A controller describes how the data is handled between the model and the view.


### Creating a git branch and pushing it


You may want to create a branch to save your current work

```
git checkout -b "my-branch-name"
git add myfile.txt
git commit -m "my commit message"
git push --set-upstream origin my-branch-name
```

### Resources

- https://codeburst.io/node-js-by-example-part-1-668376cd4f96
- https://closebrace.com/tutorials/2017-03-02/creating-a-simple-restful-web-app-with-nodejs-express-and-mongodb
