var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('client/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('client/css'))
});

gulp.task('watch', ['sass'], function(){
  gulp.watch('client/scss/**/*.scss', ['sass']); 
  // Other watchers
})