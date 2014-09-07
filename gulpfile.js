// Include Gulp
var gulp = require('gulp');

// Include Plugins
var path = require('path');
var less = require('gulp-less');
var watch = require("gulp-watch");
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src([
    'js/functions.js',
    'js/main.js'
  ]) // get specific files
    .pipe(concat('main.js')) // concat files
      .pipe(rename({suffix: '.min'})) // rename file
      .pipe(uglify()) // minify file
      .pipe(gulp.dest('js/build')); // file destination
});

// Compile CSS from Less files
gulp.task('less', function() {
    gulp.src('css/less/*.less') // get all files
      .pipe(less()) // compile less
      .pipe(gulp.dest('css')) // files destination
      .pipe(concat('style.css'))  // make one file
        .pipe(rename({suffix: '.min'})) // rename final file
        .pipe(minifyCSS()) // minify CSS
        .pipe(gulp.dest('css')); // file destination
});

// Watch for changes in files
gulp.task('watch', function() {
  // Watch .js files
  gulp.watch('js/*.js', ['scripts']);

  // Watch .less files
  gulp.watch('css/less/*.less', ['less']);
});

// Default Task
gulp.task('default', ['scripts', 'less', 'watch']);