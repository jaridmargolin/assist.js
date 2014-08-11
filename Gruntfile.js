/*!
 * Gruntfile.js
 * 
 * Copyright (c) 2014
 */


// ----------------------------------------------------------------------------
// GRUNT
// ----------------------------------------------------------------------------

module.exports = function (grunt) {


// Load all grunt tasks
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


// Browsers
var browsers = [
  // Latest Versions
  { browserName: 'firefox', platform: 'WIN8' },
  { browserName: 'chrome', platform: 'WIN8' },
  // { browserName: 'opera', platform: 'WIN7' },

  // Internet Explorer
  { browserName: 'internet explorer', platform: 'WIN8', version: '10' },
  { browserName: 'internet explorer', platform: 'VISTA', version: '9' },
  { browserName: 'internet explorer', platform: 'XP', version: '8' }
];


// Config
grunt.initConfig({

  // --------------------------------------------------------------------------
  // PKG CONFIG
  // --------------------------------------------------------------------------

  'pkg': grunt.file.readJSON('package.json'),


  // --------------------------------------------------------------------------
  // JSHINT
  // --------------------------------------------------------------------------

  'jshint': {
    src: [
      'Gruntfile.js',
      'src/**/*.js',
      'test/**/*.js'
    ],
    options: {
      jshintrc: '.jshintrc',
      force: true
    }
  },


  // --------------------------------------------------------------------------
  // CLEAN (EMPTY DIRECTORIES)
  // --------------------------------------------------------------------------

  'clean': {
    js: ['dist'],
    build: ['dist/*.*']
  },


  // --------------------------------------------------------------------------
  // REQUIREJS BUILD
  // --------------------------------------------------------------------------

  'requirejs': {
    compile: {
      options: {
        name: '_index',
        baseUrl: 'src',
        out: 'dist/assist.js',
        optimize: 'none',
        skipModuleInsertion: true,
        paths: {
          'underscore': '../node_modules/underscore/underscore',
          'assist' : '../src'
        },
        exclude: ['underscore'],
        onModuleBundleComplete: function(data) {
          var fs = require('fs'),
            amdclean = require('amdclean'),
            outputFile = data.path;

          fs.writeFileSync(outputFile, amdclean.clean({
            filePath: outputFile,
            prefixMode: 'camelCase',
            wrap: false,
            escodegen: {
              format: {
                indent: { style: '  ' }
              }
            }
          }));
        }
      }
    }
  },

  // --------------------------------------------------------------------------
  // UMD WRAP
  // --------------------------------------------------------------------------

  'umd': {
    all: {
      src: 'dist/assist.js',
      objectToExport: 'index',
      globalAlias: '_',
      dest: 'dist/assist.js',
      deps: {
        'default': ['underscore']
      }
    }
  },


  // --------------------------------------------------------------------------
  // MINIFY JS
  // --------------------------------------------------------------------------

  'uglify': {
    all: {
      expand: true,
      cwd: 'dist/',
      src: ['**/*.js'],
      dest: 'dist/',
      ext: '.min.js'
    }
  },


  // --------------------------------------------------------------------------
  // CREATE COMMONJS VERSION IN DIST
  // --------------------------------------------------------------------------

  'nodefy': {
    all: {
      expand: true,
      src: ['**/*.js'],
      cwd: 'src/',
      dest: 'dist/common'
    }
  },


  // --------------------------------------------------------------------------
  // Copy Parts
  // --------------------------------------------------------------------------

  'copy': {
    js: {
      expand: true,
      src: ['**/*.js'],
      cwd: 'src',
      dest: 'dist/amd'
    }
  },


  // --------------------------------------------------------------------------
  // WATCH FILES
  // --------------------------------------------------------------------------

  'watch': {
    options: {
      spawn: true
    },
    grunt: {
      files: ['Gruntfile.js'],
      tasks: ['build'],
      options: { livereload: true }
    },
    tests: {
      files: ['test/**/*.*'],
      options: { livereload: true }
    },
    js: {
      files: ['src/**/*.js'],
      tasks: ['build:js'],
      options: { livereload: true }
    }
  },


  // --------------------------------------------------------------------------
  // SERVER
  // --------------------------------------------------------------------------

  'connect': {
    server: {
      options: { base: '', port: 9999 }
    },
  },


  // --------------------------------------------------------------------------
  // TEST PLATFORM (SAUCELABS) - PUBLIC
  // --------------------------------------------------------------------------

  'saucelabs-mocha': {
    all: {
      options: {
        urls: [
          'http://127.0.0.1:9999/test/_runner.html',
          'http://127.0.0.1:9999/test/_dist-amd.html',
          'http://127.0.0.1:9999/test/_dist-umd.html'
        ],
        build: process.env.TRAVIS_JOB_ID || '<%= pkg.version %>',
        tunnelTimeout: 5,
        concurrency: 3,
        browsers: browsers,
        testname: 'marionette.dynamicLayout'
      }
    }
  },


  // --------------------------------------------------------------------------
  // TEST LOCAL - PUBLIC
  // --------------------------------------------------------------------------

  'mocha_phantomjs': {
    all: [
      'test/_runner.html',
      'test/_dist-amd.html',
      'test/_dist-umd.html'
    ]
  }

});


// DEFAULT
grunt.registerTask('default', ['build']);

// BUILD
grunt.registerTask('build', ['build:js']);
grunt.registerTask('build:js', ['clean:js', 'jshint', 'requirejs', 'umd', 'uglify', 'copy:js', 'nodefy']);

// TEST
grunt.registerTask('test', ['test-local']);
grunt.registerTask('test-local', ['jshint', 'mocha_phantomjs']);
grunt.registerTask('test-sauce', ['jshint', 'connect', 'saucelabs-mocha']);

// DEVELOP
grunt.registerTask('dev', ['build', 'connect', 'watch']);


};