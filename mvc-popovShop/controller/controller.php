<?
// проверяем доступна ли досступна константа ishop
defined('ISHOP') or die('Access denied');

// подключаем модель
require_once MODEL;

$view = empty($_GET['view']) ? 'hits' : $_GET['view'];

// подключение вида (шаблона)
require_once TEMPLATE . 'index.php';
?>