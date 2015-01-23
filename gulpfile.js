// Include Gulp
var gulp = require('gulp');

// Include Plugins
var path = require('path');
var sass = require('gulp-sass');
var watch = require("gulp-watch");
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var minifyCSS = require('gulp-minify-css');

// Paths
var paths = {
    js: 'src/js/',
    scss: 'src/scss/'
}


// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src([
    paths.js+'/functions.js',
    paths.js+'/main.js'
  ]) // get specific files
    .pipe(concat('main.js')) // concat files
      .pipe(rename({suffix: '.min'})) // rename file
      .pipe(uglify()) // minify file
      .pipe(jshint('.jshintrc')) // show debug
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(gulp.dest('www/js')); // file destination
});

// Compile CSS from SCSS Files
gulp.task('sass', function () {
  gulp.src(paths.scss+'/*.scss') // get all files
    .pipe(sass()) // compile sass
    .pipe(minifyCSS()) // minify CSS
    .pipe(gulp.dest('www/css')); // files destination
});

// Watch for changes in files
gulp.task('watch', function() {
  // Watch .js files
  gulp.watch(paths.js+'/*.js', ['scripts']);

  // Watch .scss files
  gulp.watch(paths.scss+'/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['scripts', 'sass', 'watch']);