# Guide to gulp.js

## Список плагинов gulp:
* `gulp`
* `gulp-concat-css`
* `gulp-minify-css` (gulp-clean-css)
* `gulp-notify`
* `gulp-rename`
* `gulp-less`
* `gulp-autoprefixer`
* `gulp-livereload`
* `gulp-connect` локальный сервер
* `gulp-watch`
* `gulp-sass`
* `gulp-uglify` _удаляет не используемый js_
* `gulp-uncss` _удаляет не используемый код_
* `gulp-rev-append` _проверка файла на кэширование `app/style.css?rev=@@hash`. После выполнения хэш изменяется, если изменен исходный файл_
* `gulp-rev` _изменение названия файла с учетом хэша_
* `gulp-rev-collector` _замена имени подключаемого файла_
* `gulp-rev-outdater` _оставляет на диске последние несколько версий файлов. Требует доп.модулей_
* `gulp wiredep` _по синтаксису прописывает автоматически пути к модулям, указанным в bower_
* `gulp-useref`
* `gulp-sftp` _отправка файлов на сервер_
* `gulp-clean` _очищает полностью папку_
* `browser-sync`


## Основные команды:
* Install gulp global `npm install --global gulp` `npm install --g gulp`. If you've previously installed gulp globally, before following these instructions run: `npm rm --global gulp`
* ​Init npm. Created package.json `npm init`. If package.json already exist - all packages from the file are downloaded
* Open plugin homepage `​npm home gulp-rev-append`
* Запуск локалього сервера с целью просмотра сайтра на мобильном устройстве `browser-sync start --proxy "http://australianwritings.com.local/"`. Возможно добавление `--files=essay/sites/bestessays.com/web/`

Создание задачи
```javascript
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
```

Зависимости
```javascript
gulp.task('default', ['watch']);
```