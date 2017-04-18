<?

defined('ISHOP') or die('Access denied');

/*======Catalog - получение массива ========*/
function catalog(){
    $query = "SELECT * FROM 'brands' ORDER BY parent_id, brand_name";
    $res = mysql_query($query) or die(mysql_query());
}
/*======Catalog - получение массива ========*/


?>