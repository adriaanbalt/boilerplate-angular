# Boilerplate to build an AngularJS web app

###Introduction

Boilerplate to build an AngularJS web app

### Node Modules

* [Grunt](http://gruntjs.com/)
* [Grunt-CLI](https://github.com/gruntjs/grunt-cli)
* [Compass](https://github.com/gruntjs/grunt-contrib-compass)
* [Concurrent](https://github.com/sindresorhus/grunt-concurrent)
* [Clean](https://github.com/gruntjs/grunt-contrib-clean)
* [Connect](https://github.com/gruntjs/grunt-contrib-connect)
* [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)
* [grunt-contrib-csslint](https://github.com/gruntjs/grunt-contrib-csslint)
* [grunt-browserify](https://github.com/gruntjs/grunt-browserify)
* [Watch / Live reload](https://github.com/gruntjs/grunt-contrib-watch)
* [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks)

### Libraries

* [Compass](http://compass-style.org/)
* [NPM](https://www.npmjs.com)
* [NVM](https://github.com/creationix/nvm)
* [RVM](https://github.com/creationix/nvm)
* [Node](http://nodejs.org/)

### Requirements
Make sure your have the following installed with these versions or greater when running the bootstrap

* ```Node v0.10.26```
* ```Sass v3.3.9```
* ```Compass >1.0.0.alpha.20```

### Dependencies

#### Grunt Task(s)

##### Default
Runs the degault task.  Compiles the languages into their corresponding folders in the /dist directory.

```
grunt 
```

### Installation

1. Clone the master version of this Git repository
```git clone git@github.com:adriaanbalt/boilerplate-angular.git```

2. Run ```npm install```

3. Run ```grunt``` in the root folder of Git repository.

4. This will open your browser to ```localhost:7777``` using Node Module "Connect" that is pointed to the generated "/dist" folder.
