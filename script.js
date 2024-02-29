const campo_texto = document.querySelector("#texto");
const campo_mensaje = document.querySelector("#mensaje");

console.log(campo_mensaje, campo_texto);

document.querySelector('.btnCopiar').style.display = 'none';

const codigo_matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnEncriptar() {

    validarTextoVacio();
    const texto = encriptar(campo_texto.value);
    console.log(texto);
    campo_mensaje.value = texto;
}


function btnDesencriptar() {

    validarTextoVacio();
    const texto = desencriptar(campo_texto.value);
    console.log(texto);
    campo_mensaje.value = texto;
}


function encriptar(fraseEncriptada) {

    for (let i = 0; i < codigo_matriz.length; i++) {
        if (fraseEncriptada.includes(codigo_matriz[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                codigo_matriz[i][0],
                codigo_matriz[i][1]
            );
        }
    }
    return fraseEncriptada;
}


function desencriptar(fraseDesencriptada) {

    for (let i = 0; i < codigo_matriz.length; i++) {
        if (fraseDesencriptada.includes(codigo_matriz[i][1])) {
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                codigo_matriz[i][1],
                codigo_matriz[i][0]
            );
        }
    }
    return fraseDesencriptada;
}


document.querySelector('.btnCopiar').addEventListener('click', function () {

    var mensaje = document.querySelector('#mensaje');
    mensaje.select();
    document.execCommand('copy');
    mensaje.setSelectionRange(0, 0);
});

function validarTextoVacio() {
    
    if (campo_texto.value.trim() === "") {
        document.querySelector('.rectangulo').style.backgroundImage = 'url(img/Lupa.svg)'; // Reemplaza "tu_imagen.jpg" con la ruta correcta de tu imagen
        document.querySelector('.btnCopiar').style.display = 'none';
    } else {
        document.querySelector('.rectangulo').style.backgroundImage = 'none';
        document.querySelector('.btnCopiar').style.display = 'block';
    }
}



