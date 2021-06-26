let arrayMarcas = [];
console.log('blanquea array')

function limpiarForm() {
    console.log('limpiarForm');
    document.getElementById("formulario").reset();
}

function validateForm() {
    console.log('validateForm');
    let x = document.forms["formulario"]["marca"].value;
    if (x == "") {
        alert("Debe cargar una marca antes de enviar información");
        return false;
    } else {
        return true;
    }
}


function agregarMarcaArray() {
    // Asume que la marca ya fue validada como no nula
    console.log('agregarMarcaArray');

    if (!validateForm()) {
        return false;
    }


    // recuperación de datos del formulario
    let marcas = document.getElementById('marcas');
    let marca = document.getElementById('marca');


    // chequeo que el elemento no este repetido en el arrayMarcas
    console.log(arrayMarcas.indexOf(marca))
    if (arrayMarcas.indexOf(marca.value) === -1) {
        // agrego la marca al arreglo
        arrayMarcas.push(marca.value);

        // crea la nueva opcion para agregar al selector
        let aux = document.createElement('option');
        aux.text = marca.value;
        //aux.value = marca;
        aux.name = 'marca' + arrayMarcas.length;

        // agregado de marca al selector
        marcas.appendChild(aux);
    } else {
        console.log("Elemento repetido")
    }
    // blanqueo la marca
    console.log(marca);
    marca.value = '';
   
    console.log(arrayMarcas);

}