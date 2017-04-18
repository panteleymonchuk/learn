'use strict';

/*
* Main commands:
*
* Install gulp global
* npm install --global gulp || npm install --g gulp
* ​
* If you've previously installed gulp globally, before following these instructions run:
* npm rm --global gulp
*
* ​Init npm. Created package.json
* npm init
*
* Open plugin homepage
* ​npm home gulp-rev-append
*
* Запуск локалього сервера с целью просмотра сайтра на мобильном устройстве
* browser-sync start --proxy "http://australianwritings.com.local/"
*
* --files=essay/sites/bestessays.com/web/
*
* ​gulp.src("/") - откуда брать файлы или исходные данные
* gulp.dest("/"); - папка результата
* .pipe() : обьединение комманд
* gulp.watch("src", ['otherTask', 'otherTask']
* npm home gulp-rev-append : открыть домашнюю страницу плагина
* rev.manifest() : создает json со старым и новым названием
* */


/*
* BOWER
*
* Init bower package:
* bower init
*
* Search libs:
* bower search jquery || bower s jquery
*
* Install libs:
* bower install jquery#1.8 || bower i jqury#1.8 || bower install jquery#1.8 --save || bower install jquery#1.8 -s
*
* Удалить библиотеку или пакет:
* bower uninstall jquery#1.8
*
* ​Создать файл .bowerrc в котором указать директорию, в которую будет указан путь для скачивания пакетов
* {"directory" : "app/assets"}
* */

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