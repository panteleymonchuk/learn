<?

// проверяем доступна ли досступна константа ishop
defined('ISHOP') or die('Access denied');

// домен
define ('PATH', "http://learn/complex/popovShop/");

// модель
define('MODEL', 'model/model.php');

// контроллер
define('CONTROLLER', 'controller/controller.php');

// вид
define('VIEW', 'views/');

// активный шаблон. Подключаем сразу
define('TEMPLATE', VIEW . 'iShop/');

// сервер базы
define('HOST', 'localhost');

// пользователь
define('USER', 'root');

// пароль
define('PASS', '');

// БД
define('DB', 'popovShop');

// название магазина
define('TITLE', 'Интернет-магазин сотовых телефонов.');

mysql_connect(HOST, USER, PASS) or die('No connect to server');
mysql_select_db(DB) or die('No connect to DB');
mysql_query("SET NAMES 'UTF8'") or die('Cant set charset');


?>