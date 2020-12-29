<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");


/*
 $host      =  "localhost";
 $banco     =  "a420ma";
 $user      =  "root";
 $passaword =  "";
 */

$banco = "u132039622_agua";
$user = "u132039622_agua";
$passaword = "Agua2020";
$host = "sql184.main-hosting.eu"; 


$mysqli = mysqli_connect($host, $user, $passaword, $banco);

if (mysqli_connect_errno())
{
    printf("Cone&ccedil;&atilde;o falhou: %s\n", mysqli_connect_error());
    //printf("Falha ao logar. Entre em contato com o Administrador");
    exit();
}

mysqli_close($mysqli);

 
?>