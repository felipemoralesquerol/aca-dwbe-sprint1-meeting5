function cargar_paises() {
    let paises = [['ar', 'Argentina'], ['mx', 'Mexico'], ['bo', 'Bolivia']];

    let select = document.getElementById("paises");

    select.innerHTML = '';
    for (i = 0; i < paises.length; i++) {
        let valor = paises[i][0]
        let texto = paises[i][1]

        select.innerHTML += "<option class='paises_items' value=\"" + valor + "\">" + texto + "</option>";

    };
    console.log('Cargue paises');
};

function cargar_hobbies() {
    //<input type="checkbox" name="h12" id="h11" value="h1"> <label for="h11">Hobbie 1</label>  
    let hobbies = [['tenis', 'Tenis'], ['foto', 'Fotografía']];
    let elemento = document.getElementById("hobbies");

    elemento.innerHTML = '';
    for (i = 0; i < hobbies.length; i++) {
        let valor = hobbies[i][0]
        let texto = hobbies[i][1]
        let e = '<input type="checkbox" class="hobbies" name="hobbies" id="' + valor + '" value="' + valor + '"> <label for="h11">' + texto + '</label> <br>'

        elemento.innerHTML += e;
    };
    console.log('Cargue paises');
};

function mostrar_resultados() {
    console.log('mostrar_resultados');
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;

    // Ciclar el select sexo
    let sexo_texto = '';
    let sexo = document.getElementsByClassName("sexo");
    console.log(sexo)

    // Ciclar el radio sexo
    for (let i = 0; i < sexo.length; i++) {
        console.log(sexo[i])
        if (sexo[i].checked == true) {
            sexo_texto = sexo[i].value;
        }
    }

    // Ciclar el select hobbies
    let hobbies_texto = '';
    let hobbies = document.getElementsByClassName("hobbies");


    // Ciclar el radio sexo
    for (let i = 0; i < hobbies.length; i++) {
        console.log(hobbies[i])
        if (hobbies[i].checked == true) {
            hobbies_texto += hobbies[i].value + ' ';
        }
    }

    let aux = 'Nombre: ' + nombre + '<br> ' +
        'Apellido: ' + apellido + '<br> ' +
        'Edad: ' + edad + '<br> ' +
        'Sexo: ' + sexo_texto + '<br> ' +
        'Hobbies: ' + hobbies_texto + '<br> ';
    document.getElementById('respuestas').innerHTML = aux;

}


cargar_hobbies();
cargar_paises();
// Agregado de listener a boton ver_resultados
document.getElementById("ver_resultados").addEventListener('click', mostrar_resultados, true);