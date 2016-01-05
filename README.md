# Boilerplate to build an AngularJS web app

###Introduction

Boilerplate to build an AngularJS web app.  Includes global files such as SCSS mixins and JS vendors files.  @TODO: have the ```global/js/vendor``` files referenced in the browserify config instead of those in the app.

### Node Modules

* [Grunt](http://gruntjs.com/)
* [Grunt-CLI](https://github.com/gruntjs/grunt-cli)
* [Compass](https://github.com/gruntjs/grunt-contrib-compass)
* [Concurrent](https://github.com/sindresorhus/grunt-concurrent)
* [Clean](https://github.com/gruntjs/grunt-contrib-clean)
* [Connect](https://github.com/gruntjs/grunt-contrib-connect)
* [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)
* [grunt-contrib-csslint](https://github.com/gruntjs/grunt-contrib-csslint)
* [grunt-browserify](https://github.com/jmreidy/grunt-browserify)
* [Watch / Live reload](https://github.com/gruntjs/grunt-contrib-watch)
* [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks)
* [Assemble](https://github.com/assemble/assemble)
* [Handlebars Helpers](https://github.com/assemble/handlebars-helpers)

### Libraries

* [Compass](http://compass-style.org/)
* [Homebrew](http://brew.sh/)
* [NPM](https://www.npmjs.com)
* [RVM](https://github.com/creationix/nvm)
* [Node](http://nodejs.org/)
* [NVM](https://github.com/creationix/nvm)

### Requirements
Make sure your have the following installed with these versions or greater when running the bootstrap

* ```Angular 1.4.8```
* ```Node v0.10.26```
* ```Sass v3.3.9```
* ```Compass >1.0.0.alpha.20```

### Grunt Task(s)

##### Default
Runs the default task from the root directory of the Git folder.

```
$ grunt 
```

Note: includes following packages Assemble, Browserify, Compass, Connect, Clean, Watch (with live reload), Copy

Note: This will automatically open your browser to ```localhost:7777``` using Node Module "Connect" that is pointed to the generated "/dist" folder.

### Installation

#### For Mac Users

```
# Recommend installing [NVM](https://github.com/creationix/nvm)
 curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash

# Install Node and NPM
 nvm install v0.10.26

# Set Node default
 nvm alias default v0.10.26

# Clone this GIT Repo
# --depth 1 removes all but one .git commit history
$ git clone git@github.com:adriaanbalt/boilerplate-angular.git

# Change directory to our repo
$ cd boilerplate-angular

# Install the repo with npm
$ npm install

# start the server
$ grunt
```

#### For Windows Users

```
# Download the Windows installer from the [Nodes.js web site](https://nodejs.org/en).

# Run the installer (the .msi file you downloaded in the previous step.)

# Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).

# Restart your computer. You won’t be able to run Node.js until you restart your computer.

# Clone this GIT Repo
# --depth 1 removes all but one .git commit history
$ git clone git@github.com:adriaanbalt/boilerplate-angular.git

# Change directory to our repo
$ cd boilerplate-angular

# Install the repo with npm
$ npm install

# start the server
$ grunt
```