<?php
	include 'conexion.php';

	$nombre = $_POST['nom'];
	$apellido = $_POST['apel'];
	$email = $_POST['email'];
	$celular = $_POST['cel'];
	$direccion = $_POST['dir'];
	$ciudad = $_POST['ciudad'];
	$mensaje = $_POST['mensaje'];
	$query = "INSERT INTO persona (nombre, apellido, email, celular,direccion, ciudad, mensaje) VALUES ('$nombre','$apellido','$email','$celular','$direccion','$ciudad','$mensaje') ";
	$ejecutar = mysqli_query($conexion, $query);

	if ($ejecutar){
		echo '
		<script>
			alert ("Usuario guardado exitosamente");
			window.location = "pagina_web_gatos.html";
		</script>
		';
	}else {
		echo '
		<script>
			alert ("Intentalo de nuevo, usuario no almacenado");
			window.location = "pagina_web_gatos.html";
		</script>
		';
	}
	mysql_close($conexion);

?>