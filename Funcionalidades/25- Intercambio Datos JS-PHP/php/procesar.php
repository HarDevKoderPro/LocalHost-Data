<?php
// Obtener los datos JSON enviados desde JavaScript
$data = json_decode(file_get_contents("php://input"), true);

// Comprobar si los datos están presentes
if (isset($data['nombre'], $data['apellido'], $data['edad'])) {
  $nombre = $data['nombre'];
  $apellido = $data['apellido'];
  $edad = $data['edad'];

  // Respuesta devuelta al cliente
  echo json_encode([
    'nombre' => $nombre,
    'apellido' => $apellido,
    'edad' => $edad
  ]);

  // echo json_encode('Carechimba!');

} else {
  echo json_encode(['status' => 'error', 'message' => 'Datos faltantes']);
}
