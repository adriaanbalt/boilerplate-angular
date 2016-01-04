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
* [NVM](https://github.com/creationix/nvm) (optional)

### Requirements
Make sure your have the following installed with these versions or greater when running the bootstrap

* ```Node v0.10.26```
* ```Sass v3.3.9```
* ```Compass >1.0.0.alpha.20```

### Grunt Task(s)

##### Default
Runs the default task:

```
grunt 
```

includes Assemble, Browserify, Compass, Connect, Clean, Watch (with live reload), Copy

### Installation

#### For Mac Users

1. Clone this Git repository
```$ git clone git@github.com:adriaanbalt/boilerplate-angular.git```

2. Run ```$ npm install```

3. Run ```$ npm install -g grunt-cli```

4. Run ```$ grunt``` in the root folder of Git repository.

5. This will automatically open your browser to ```localhost:7777``` using Node Module "Connect" that is pointed to the generated "/dist" folder.

#### For Windows Users

1. Download the Windows installer from the Nodes.js® web site.

2. Run the installer (the .msi file you downloaded in the previous step.)

3. Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).

4. Restart your computer. You won’t be able to run Node.js® until you restart your computer.