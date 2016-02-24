var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('default', function() {
});

gulp.task('jpgs', function() {
  return gulp.src('images/*.jpg')
  .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
  .pipe(gulp.dest('images'));
});
