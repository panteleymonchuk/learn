#Guide to bower

## Основные команды:
* `bower init` Init bower package
* `bower search jquery` || `bower s jquery` Search libs
* `bower install jquery#1.8` || `bower i jqury#1.8` || `bower install jquery#1.8 --save` || `bower install jquery#1.8 -s` Install libs
* `bower uninstall jquery#1.8` Uninstall package or libs

При создании файла `.bowerrc` в нём можно указать директорию, в которую будут скачиваться все пакеты и библиотеки
```json
{
  "directory" : "app/assets"
}
```