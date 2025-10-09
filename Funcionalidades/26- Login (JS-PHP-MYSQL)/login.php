<?php
// Obtener los datos a enviar JSON desde JavaScript
$data = json_decode(file_get_contents("php://input"), true);
$estaRegistrado = '';
$nombres = '';
$cantidadRegistros = '';

// Configurar credenciales de conexión a la base de datos
//  $host = "190.8.176.115"; // Desarrollo Remoto
$host = "localhost"; // Desarrollo Local
$user = "tucultur";      // Usuario de MySQL
$password = "@GWMU!J4p-mgyTJ7";      // Contraseña de MySQL
$dbname = "tucultur_asociados"; // Nombre de la base de datos

// Conectar a base de datos MySQL
$conn = new mysqli($host, $user, $password, $dbname);

// Establecer la codificación de caracteres
mysqli_set_charset($conn, "utf8mb4");

// Verificar la conexión
if ($conn->connect_error) {
  die(json_encode(["success" => false, "message" => "Error de conexión: " . $conn->connect_error]));
}

// Compruebo si existe el dato a tratar
if (isset(
  $data['email'],
  $data['pass']
)) {

  // Paso contenido de variables JS a variables PHP
  // Elimino espacios al inicio y al final
  $email = trim($data['email']);
  $pass = trim($data['pass']);

  // Sanitizo las variable para evitar inyección de código
  $email = htmlspecialchars($email, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
  $pass = htmlspecialchars($pass, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');

  // Realizo la consulta del Email (Primera consulta)
  $sqlEmail = "SELECT 1 FROM registros WHERE email = '$email' LIMIT 1";
  $result = $conn->query($sqlEmail); // Resultado de la consulta

  // verifico que el Email y la contraseña existan
  if ($result && $result->num_rows > 0) {

    // Si el email esta registrado, procedo a verificar la contraseña
    $sqlPassword = "SELECT 1 FROM registros WHERE pass = '$pass' LIMIT 1";
    $result2 = $conn->query($sqlPassword);  // Resultado de la consulta

    // Si la contraseña es correcta obtengo los nombres y los registros
    if ($result2 && $result2->num_rows > 0) {

      // Obtengo los nombres del usuario
      $sqlNombres = "SELECT nombres FROM registros WHERE email = '$email' LIMIT 1";
      $result3 = $conn->query($sqlNombres);
      $row = $result3->fetch_assoc();
      $nombres = $row['nombres'];

      // Obtengo la cantidad de registros del usuario
      $sqlRegistros = "SELECT registros FROM referentes WHERE email = '$email' LIMIT 1";
      $result4 = $conn->query($sqlRegistros);
      $row = $result4->fetch_assoc();
      $cantidadRegistros = $row['registros'];

      // Envio los datos obtenidos al Frontend (JS)
      echo json_encode(['estaRegistrado' => true, 'nombres' => $nombres, 'cantidadRegistros' => $cantidadRegistros]); //devuelve true 

    } else {

      // Si la contraseña no coincide devuevo falso
      echo json_encode(['respuesta' => false]); //devuelve false 
    }
  } else {

    // Si el email no existe devuelvo Falso
    echo json_encode(['respuesta' => false]); //devuelve false 
  }

  // Si el email consultado no existe...
} else {
  echo json_encode(['status' => 'error', 'respuesta' => 'Datos faltantes']);
}

// Cerrar la conexión
$conn->close();
