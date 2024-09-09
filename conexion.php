<?php

$conexion = mysqli_connect( "localhost", "root","","bd_gatos");
	if ($conexion){
		'Conectado exitosamente a la base de datos';
	}else {
		'No se ha podido conectar a la base de datos';
	}

?>