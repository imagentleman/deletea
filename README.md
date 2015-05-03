# deletea

> An io.js package to delete folders and files using ES 2015 features (no dependencies; only uses the buitin fs)

## Pre-requisites

Install the lastest version of [io.js](https://iojs.org/).

## Installation

- Run `npm install -g deletea` to install it globally
- Or run `npm install --save deletea` to install it locally and add it to your project's package.json dependencies 

### Usage

Just require it and send the path to delete.

For example, if you wanted to delete a folder and its contents in a clean task for gulp, it would look like this:

    var gulp = require('gulp');
    var deletea = require('deletea');
    
    gulp.task('default', ['clean'], function() {
      gulp.src('src/**/*')
        // local folder dist will get a copy of src contents
        .pipe(gulp.dest('dist'));
    });
    
    gulp.task('clean', function() {
      // local folder named dist will get deleted
      deletea('dist');
    });
