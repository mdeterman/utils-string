var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var jsdoc = require('gulp-jsdoc')

gulp.task('test', function() {
    return gulp.src('./test/*.js')
        .pipe(jasmine());
});

gulp.task('docs', function() {
    gulp.src(["./lib/utils-string.js", "README.md"])
        .pipe(jsdoc('./docs'));
});

gulp.task('default', ['test', 'docs'])