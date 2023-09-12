<?php
// Recupera o contador atual do armazenamento local ou define-o como 0 se for a primeira vez
$contador = isset($_COOKIE['contador']) ? $_COOKIE['contador'] : 0;
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador de Cliques</title>
</head>
<body>
    <h1>Contador de Cliques</h1>
    <p>Quantidade de Cliques: <?php echo $contador; ?></p>
    <a href="contador.html">Voltar</a>
</body>
</html>
