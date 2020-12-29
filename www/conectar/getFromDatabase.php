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
$usuario = "u132039622_agua";
$senha = "Agua2020";
$hostname = "sql184.main-hosting.eu"; 
 
 $mysqli = mysqli_connect($host, $user, $passaword, $banco);


if (mysqli_connect_errno())
{
    printf("Cone&ccedil;&atilde;o falhou: %s\n", mysqli_connect_error());
    //printf("Falha ao logar. Entre em contato com o Administrador");
    exit();
}

$queryString   = ("SELECT * FROM dados");
$query = mysqli_query($mysqli, $queryString) or die("Algum problema na query".mysql_Error());
$num_rows = mysqli_num_rows($query);
$paises = array();

$nome = "dados";
 while($pais = mysqli_fetch_assoc($query))
 {
     $paises[]             = $pais['dados'];
 }
	echo json_encode($paises);
	mysqli_close($mysqli);
	
?>