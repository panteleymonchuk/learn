'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var server = require('gulp-server-livereload');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');

gulp.task('useref', function(){
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'))
});

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe( sass().on('error', sass.logError) )
        .pipe( autoprefixer( {browsers: ['last 2 versions'], cascade: false} ) )
        .pipe( cleanCSS({compatibility: 'ie8'}) )
        .pipe( rename('styles.css') )
        .pipe( gulp.dest('dist/css/') )
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('livereload', function () {
    gulp.src('dist')
        .pipe(server({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'dist'
        }
    })
});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);