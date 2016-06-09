var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

//Styles Task: Convert sass files to css
gulp.task('styles', function() {
    gulp.src('public/stylesheets/sass/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({indentedSyntax: true}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/stylesheets/css/'))
        .pipe(livereload());
});

//Combine and minify Javascript Files
gulp.task('scripts', function(){
  return gulp.src('./public/javascripts/*.js')
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./public/javascripts'))
    .pipe(rename('application.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/javascripts'));
});

//Watch CSS
gulp.task('default', function(){
  livereload.listen();
  gulp.watch('public/stylesheets/sass/*.sass', ['styles']);
});



