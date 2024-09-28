<?php
	

	$nombre = $_POST['nom'];
	$apellido = $_POST['apel'];
	$email = $_POST['email'];
	$celular = $_POST['cel'];
	$direccion = $_POST['dir'];
	$ciudad = $_POST['ciudad'];
	$mensaje = $_POST['mensaje'];
	
$header = 'From: '.$mail."\r\n";
$header .="X-Mailer: PHP/".phpversion()."\r\n";
$header .="Mime-Version: 1.0"."\r\n ";
$header .="Content-Type: text/plain";


$mensaje = "Este mensaje fue enviado por: ".$nombre."\r\n";
$mensaje .= "Su email: ".$email."\r\n";
$mensaje .="Telefono de contacto: ".$celular."\r\n";
$mensaje .="Mensaje: ".$_POST['mensaje']."\r\n";
$mensaje .="Enviado el: ".date(d/m/Y, time());
$para = 'andressantacruz1214@gmail.com';
$asunto = 'Asunto del mensaje';

mail($para, $asunto, utf8_decode($mensaje), $header);
header("Location:index.html");


?>