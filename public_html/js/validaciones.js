function validar_nombre_usuario(string){
}
function validar_contrasena(string){
     var key = string.keyCode,
  tecla = String.fromCharCode(key).toLowerCase(),
  letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789",
  especiales = [8, 37, 39, 46],
  tecla_especial = false;
  
for (var i in especiales) {
  if (key == especiales[i]) {
    tecla_especial = true;
    break;
  }
}

if (letras.indexOf(tecla) == -1 && !tecla_especial) {
  return false;
}
if (nombre.length<6){
  return false;
}else{
  return true;
}    
}
function confirmar_contrasena(string){
}

module.exports.validar_nombre_usuario=validar_nombre_usuario;
module.exports.validar_contrasena=validar_contrasena;
module.exports.confirmar_contrasena=confirmar_contrasena;
