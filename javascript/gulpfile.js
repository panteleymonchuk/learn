'use strict';

var browserSync = require('browser-sync');
var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch-files', function () {
    return gulp.src('')
        .pipe( gulp.dest('') )
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'app/'
        }
    })
});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch(['app/**/*.js', 'app/index.html'], ['watch-files']);
});

gulp.task('default', ['watch']);