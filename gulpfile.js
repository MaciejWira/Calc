const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');

gulp.task("css", () => {
  gulp.src('./css/style.css')
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'))
});

gulp.task("js", () => {
  gulp.src('dist/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});
