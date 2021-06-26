
let original = ['Curso', 'Backend', 'Squad', 'Acámica', 'Trainees', 'Working', 'Javascript', 'Html'];
let array = [];


function addArray() {
    array = []
    for(let i = 0; i < original.length; i++){
        array.push(original[i]);
    }
    showArray();
}

function showArray() {
    console.log('addArray');
    let divElementos = document.getElementById('elementos');
    divElementos.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        item = document.createElement('div')
        item.textContent = i + '-' + array[i];
        item.className = 'elemento';
        divElementos.appendChild(item);
    }
}


function delFirstArray() {
    console.log('delFirstArray');
    array.splice(0,1);
    showArray();
}

function delLastArray() {
    console.log('delLastArray');
    array.pop();
    showArray();
}

