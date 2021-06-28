
let arrayOriginal = ['Curso', 'Backend', 'Squad', 'Acámica', 'Trainees', 'Working', 'Javascript', 'Html'];
let arrayOperaciones = [];


function addElementsArray() {
    // Agrega los elementos del array original al array de operaciones
    arrayOperaciones = []
    for(let i = 0; i < arrayOriginal.length; i++){
        arrayOperaciones.push(arrayOriginal[i]);
    }
    showArray();
}

function showArray() {
    // Muestra los elementos de un array en index
    console.log(this);
    let divElementos = document.getElementById('elementos');
    divElementos.innerHTML = '';
    for (let i = 0; i < arrayOperaciones.length; i++) {
        item = document.createElement('div')
        item.textContent = i + '-' + arrayOperaciones[i];
        item.className = 'elemento';
        divElementos.appendChild(item);
    }
}


function delFirstArray() {
    // Elimina el primer elemento del array y lo muestra en pantalla
    console.log('delFirstArray');
    arrayOperaciones.splice(0,1);
    showArray();
}

function delLastArray() {
    // Elimina el último elemento del array y lo muestra en pantalla
    console.log('delLastArray');
    arrayOperaciones.pop();
    showArray();
}

