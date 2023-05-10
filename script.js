// Las llaves de encriptacion son las siguientes:
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar() {
    var texto = document.getElementById("text-area").value;
    var textoEncriptado = texto.replace(/e/gm, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/gm, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/gm, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/gm, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/gm, "ufat");

    document.getElementsByClassName("img-mensaje")[0].style.display = "none";
    document.getElementsByClassName("mensaje-vacio")[0].style.display = "none";
    document.getElementById("mensaje").innerHTML = textoEncriptado;
    document.getElementById("mensaje").style.textAlign = "Left";
    document.getElementById("copiar").style.display = "show"; 
    document.getElementById("copiar").style.display = "block";
}

function desencriptar() {
    var texto = document.getElementById("text-area").value;
    var textoDesencriptado = texto.replace(/enter/gm, "e");
    var textoDesencriptado = textoDesencriptado.replace(/imes/gm, "i");
    var textoDesencriptado = textoDesencriptado.replace(/ai/gm, "a");
    var textoDesencriptado = textoDesencriptado.replace(/ober/gm, "o");
    var textoDesencriptado = textoDesencriptado.replace(/ufat/gm, "u");

    document.getElementsByClassName("img-mensaje")[0].style.display = "none";
    document.getElementsByClassName("mensaje-vacio")[0].style.display = "none";
    document.getElementById("mensaje").innerHTML = textoDesencriptado;
    document.getElementById("mensaje").style.textAlign = "Left";
    document.getElementById("copiar").style.display = "show"; 
    document.getElementById("copiar").style.display = "block";
}

function pegar() {
    navigator.clipboard.readText()
        .then(text => {
            var textArea = document.getElementById("text-area");
             textArea.value = text;
        })
        .catch(err => {
             console.error('No se pudo pegar el contenido del portapapeles: ', err);
        });
}

function limpiar() {
    document.getElementById("text-area").value = ""
    document.getElementById("text-area").innerHTML = "Ingrese el texto aqui...";
    document.getElementById("mensaje").innerHTML = "Ingresa el texto que desees encriptar o desencriptar."
    document.getElementsByClassName("img-mensaje")[0].style.display = "inline-block";
    document.getElementsByClassName("mensaje-vacio")[0].style.display = "inline-block";
    document.getElementById("copiar").style.display = "none"; 
}

function copiar() {
    var contenido = document.getElementById("mensaje").value;
  
    navigator.clipboard.writeText(contenido).then(function() {
      console.log("El contenido ha sido copiado al portapapeles");
    }, function(error) {
      console.error("Error al copiar el contenido al portapapeles: ", error);
    });
  }








