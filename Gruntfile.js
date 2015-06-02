module.exports = function(grunt) {
    'use strict';
    
    require('time-grunt')(grunt);

    var browserifySiteConfig = require('./browserify.config.js');

    grunt.initConfig({

        // Package Info
        pkg: grunt.file.readJSON('package.json'),

        // Grunt Clean
        // Clear files and folders that are auto generated
        // https://github.com/gruntjs/grunt-contrib-clean
        clean: {
            dist: {
                files: [{
                    src: [
                        '<%= pkg.directory.dest %>/*'
                    ]
                }],
                options:{
                    force: true // enables deletion fo folders outside of working directory
                }
            }
        },

        // Grunt Copy
        // Copies files and folders
        // https://github.com/gruntjs/grunt-contrib-copy
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= pkg.directory.app %>',
                    dest: '<%= pkg.directory.dest %>',
                    src: [
                        'index.html',
                        'assets/ajax/**/*',
                        'assets/images/**/*'
                    ]
                }]
            }
        },

        // Compass
        // Generates the CSS from SCSS files
        // https://github.com/gruntjs/grunt-contrib-compass
        compass: {
            dist: {
                options: {
                    sassDir: '<%= pkg.paths.page.scss %>',
                    cssDir: '<%= pkg.directory.dest %>/assets/css',
                    imagesDir: '<%= pkg.directory.dest %>/assets/images',
                    javascriptDir: '<%= pkg.directory.dest %>/assets/js',
                    fontsDir: '<%= pkg.directory.dest %>/assets/fonts',
                    relativeAssets: false,
                    outputStyle: 'expanded',
					importPath: '<%= pkg.paths.global.scss %>' // Compass will also look at the global scss file directory
                }
            }
        },

        // Assemble
        // Static site generator for Node.js, Grunt.js, and Yeoman (and soon, Gulp).
        // https://github.com/assemble/assemble
        assemble: {
            dist: {
                options: {
                    assets: '<%= pkg.directory.dest %>',
                    partials: ['<%= pkg.paths.page.partials %>'],
                    layout: ['<%= pkg.paths.page.layout %>'],
                    data: ['<%= pkg.paths.page.data %>'],
                    production: true,
                    pages: ['<%= pkg.paths.page.pages %>']
                },
                files: [{
                    expand: true,
                    src: ['**/*.hbs'],
                    cwd: '<%= pkg.directory.app %>/views/pages/',
                    dest: '<%= pkg.directory.dest %>'
                }]
            }
        },

        // Browserify
        // https://github.com/jmreidy/grunt-browserify
        browserify: {
            app: {
                files: {
                    '<%= pkg.directory.dest %>/assets/js/app.min.js': ['<%= pkg.directory.app %>/assets/js/app.js']
                },
                options: {
                    alias: browserifySiteConfig,
                    debug: true
                }
            }
        },

        // Grunt Connect
        // https://github.com/gruntjs/grunt-contrib-connect
        // Used to create a static web server for dev
        connect: {
            options: {
                port: 7777,
                keepalive: true,
                hostname: 'localhost'
            },
            dist: {
                options: {
                    open: true,
                    base: 'dist'
                }
            }
        },
        
        // Watch
        // Watches for changes to specific files
        // https://github.com/gruntjs/grunt-contrib-watch
        watch: {
            js: {
                files: ['<%= pkg.paths.page.js %>'],
                tasks: ['browserify'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['<%= pkg.paths.page.partials %>','<%= pkg.paths.page.pages %>'],
                tasks: ['assemble:dist'],
                options: {
                    livereload: true
                }
            },
            styles: {
                files: ['<%= pkg.paths.page.scss %>/**/*.scss'],
                tasks: ['compass'],
                options: {
                    livereload: true
                }
            },
            json: {
                files: ['<%= pkg.paths.page.data %>','<%= pkg.paths.page.ajax %>'],
                tasks: ['copy:dist','assemble:dist'],
                options: {
                    livereload: true
                }
            }
        },
        // Concurrent
        // Allow multiple tasks to occur at once.  Using this technique because it gives us flexibility in the future to add other tasks such as CONNECT.
        // https://github.com/sindresorhus/grunt-concurrent
        concurrent: {
            dist: ['watch','connect'],
            options: {
                logConcurrentOutput: true
            }
        }

    });

    require('load-grunt-tasks')(grunt,{
        pattern: ['grunt-*', 'assemble']
    });

    // Development grunt task
    grunt.registerTask('build', [
        // Cleanup Previously Generated Files
        'clean:dist',

        // Sass compilation
        'compass:dist',

        // Concat Required Browserify Modules
        'browserify',

        // Copy HTML and assets
        'copy:dist',

        // Generate HTML
        'assemble:dist'
    ]);

    // Development grunt task
    grunt.registerTask('default', [

        // reuse the above build task.  gives us core flexibilty if we want to add more types of tasks in the future
        'build',

        // Runs WATCH 
        'concurrent:dist'
    ]);

};
