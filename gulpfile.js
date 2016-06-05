var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

//Styles Task: Convert sass files to css
gulp.task('styles', function() {
    gulp.src('public/stylesheets/sass/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({indentedSyntax: true}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/stylesheets/css/'))
        .pipe(livereload());
});

//Watch task
gulp.task('default', function(){
  livereload.listen();
  gulp.watch('public/stylesheets/sass/*.sass', ['styles']);
});