var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('default', function() {
});

gulp.task('minify-images', function() {
  return gulp.src('images/*')
  .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
  .pipe(gulp.dest('images'));
});
