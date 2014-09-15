// Include Gulp
var gulp = require('gulp');

// Include Plugins
var path = require('path');
var sass = require('gulp-sass');
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

// Compile CSS from SCSS Files
gulp.task('sass', function () {
  gulp.src('css/scss/*.scss') // get all files
    .pipe(sass()) // compile sass
    .pipe(minifyCSS()) // minify CSS
    .pipe(gulp.dest('css')); // files destination
});

// Watch for changes in files
gulp.task('watch', function() {
  // Watch .js files
  gulp.watch('js/*.js', ['scripts']);

  // Watch .scss files
  gulp.watch('css/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['scripts', 'sass', 'watch']);