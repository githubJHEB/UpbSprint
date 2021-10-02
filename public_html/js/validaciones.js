/*
 * To change this license header
 */
let registros = [];
function isLetter(string){ /*Start validation rutine. Check letter condition jheb*/
    var letras = "ABCDEGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var valueToReturn = true;
    for (var i = 0; i < string.value.length; i++) {
        if (!(letras.includes(string.value.charAt(i)))) {
            valueToReturn = false;
            break;
        }
    }
    return valueToReturn;
}

function doubleCheck(string){ /*Check numbers and letters validation rutine jheb*/
    var numeros = "0123456789";
    var letras = "ABCDEGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var valueToReturn = true;
    for (var i = 0; i < string.value.length; i++) {
        if (!(numeros.includes(string.value.charAt(i)))) {
            if (!(letras.includes(string.value.charAt(i)))) {
                valueToReturn = false;
                break;
            }
        }
    }
   return valueToReturn;
}

function myFunction() {
    var entrada2 = document.getElementById("in_confirmar_contrasena");
    var entrada1 = document.getElementById("in_nombre_usuario");
    var entrada = document.getElementById("in_contrasena")
    validar_contrasena(entrada);
    validar_nombre_usuario(entrada1);
    confirmar_contrasena(entrada, entrada2);
}

function validar_nombre_usuario(string){/*Validate nombre_usuario jheb*/
    if((string.value.length>=6 && string.value.length<=30) && isLetter(string)){
        //alert("validar_nombre_usuario true");
        return true;
    } else {
        //alert("validar_nombre_usuario false");
        return false;
    }
}

function validar_contrasena(string){ /*Validate contrasena jheb*/
    if(string.value.length>=6 &&  doubleCheck(string)){
        //alert("validar_contrasena true");
        return true;
    } else {
        //alert("validar_contrasena false");
        return false;
    }
}


function confirmar_contrasena(stringA, stringB){/*Confirmar_contrasena jheb*/
    if(validar_contrasena(stringA) && validar_contrasena(stringB)){
        if(stringA.value === stringB.value){
            alert("confirmar_contrasena true");
            return true;
        } else {
            alert("confirmar_contrasena false");
            return false;
        }
    } else {
        alert("confirmar_contrasena false");
        return false;
    }
}   /*End validation rutine jheb*/



////function validar_nombre_usuario(string){
//}

//function validar_contrasena(string){
//     var key = string.keyCode,
//  tecla = String.fromCharCode(key).toLowerCase(),
//  letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789",
//  especiales = [8, 37, 39, 46],
//  tecla_especial = false;

//for (var i in especiales) {
//  if (key == especiales[i]) {
//    tecla_especial = true;
//    break;
//  }
//}

//if (letras.indexOf(tecla) == -1 && !tecla_especial) {
//  return false;
//}
//if (nombre.length<6){
//  return false;
//}else{
//  return true;
//}
//}
//function confirmar_contrasena(string){

//}

function agregarRegistro(){
	var usuario = document.getElementById("in_nombre_usuario").value;
		var contrasena = document.getElementById("in_contrasena").value;
		var confirmar_contrasena = document.getElementById("in_confirmar_contrasena").value;
	function Persona(usuario, contrasena, confirmar_contrasena){
		
		this.usuario = usuario;
		this.contrasena = contrasena;
		this.confirmar_contrasena = confirmar_contrasena;
}
nuevoUsuario = new Persona(usuario, contrasena, confirmar_contrasena);
	registros.push(nuevoUsuario);
	console.log(registros);
}
    
    
function OrdenarArreglo(arreglo){
    arreglo = arreglo.sort(function (a, b) {
        if (a.usuario > b.usuario) {
            return 1;
        }
        if (a.usuario< b.usuario) {
            return -1;
        }
        return 0;
    });

     return arreglo;
}
  
    
module.exports.registros=registros;
module.exports.OrdenarArreglo=OrdenarArreglo;
module.exports.agregarRegistro=agregarRegistro;
module.exports.validar_nombre_usuario=validar_nombre_usuario;
module.exports.validar_contrasena=validar_contrasena;
module.exports.confirmar_contrasena=confirmar_contrasena;
