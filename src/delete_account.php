<?php
    $destino = 'admin.team@sugar.coach';
    $usuario = $_POST['username'];
    $email = $_POST['email'];
    $contenido = "Usuario:" . $usuario . "\r\nEmail:" . $email . "Enviado el " . date('d/m/y', time()) . "\r\n";
    if (mail($destino, 'Cuenta borrada', utf8_decode($contenido), $header);) {
        echo 'Email sent successfully!';
    } else {
        echo 'Error sending email: ' . error_get_last()['message']; // Assuming error reporting is enabled
    }
    header('Location:https://www.sugar.coach/deleted');
?>