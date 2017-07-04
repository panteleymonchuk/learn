<?php
require '../assets/phpmailer/phpmailer/PHPMailerAutoload.php';
//Order data
$orderItemTitle = $_POST['orderItemTitle'];
$orderItemPrice = $_POST['orderItemPrice'];
$orderItemCount = $_POST['orderItemCount'];
$orderItemSum = $_POST['orderItemSum'];
$ordersDelivery = $_POST['ordersDelivery'];
$ordersSum = $_POST['ordersSum'];

//User data
$userName = $_POST['userName'];
$userPhone = $_POST['userPhone'];
$userAdress = $_POST['userAdress'];
$userComment = $_POST['userComment'];

// Delivery data
$orderDataRadio = $_POST['orderDateRadio'];
$orderDeliveryTime = "на ближайшее время";
$orderDate = $_POST['orderDate'];
$orderTime = $_POST['orderTime'];

if ($orderDataRadio == "orderDateAssigned") {
    $orderDeliveryTime = "Дата доставки: " . $orderDate . "\n Время доставки: " . $orderTime;
}


/*
 * Формируем таблицу с заказом
 * */
$mail__message = "";
$mail__message .= " Имя: " . $userName;
$mail__message .= "\n Номер телефона: " . $userPhone;
$mail__message .= "\n Адрес доставки: " . $userAdress;
$mail__message .= "\n Время доставки: " . $orderDeliveryTime;
$mail__message .= "\n Cтоимость доставки: " . $ordersDelivery . "грн";
$mail__message .= "\n Сумма к оплате: " . $ordersSum . "грн";
$mail__message .= "\n Комментарий к заказу: " . $userComment;


for ($i = 0; $i < count( $orderItemTitle ); $i++) {
    $mail__message .= "\n\nНазвание товара: " . $orderItemTitle[$i] . " \nЦена за товар: " . $orderItemPrice[$i] . " \nКоличество: " . $orderItemCount[$i] . " \nСумма за товар: " . $orderItemSum[$i] . "\n";
}


$mail = new PHPMailer;
$mail->setFrom('raki2016kiev@gmail.com', 'Admin');
$mail->addAddress('raki2016kiev@gmail.com', 'Admin');
$mail->addAddress('elljay@ya.ru');
$mail->addAddress('Artur.kizim@gmail.com');
$mail->CharSet = 'UTF-8';
$mail->Subject = 'Заказ с сайта';
$mail->Body    = $mail__message;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

?>