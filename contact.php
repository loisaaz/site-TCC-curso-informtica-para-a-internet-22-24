<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "heloisalacerda23@gmail.com"; // e-mail real
    $subject = "Nova mensagem do formulário de contato";
    $body = "Nome: $name\nE-mail: $email\nMensagem:\n$message\n";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo '<div class="message">Mensagem enviada com sucesso!</div>';
    } else {
        echo '<div class="message" style="background-color: #f2dede; color: #a94442;">Falha ao enviar a mensagem.</div>';
    }
}
?>
