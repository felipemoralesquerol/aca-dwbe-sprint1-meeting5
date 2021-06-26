function cargar_paises(){
  let paises = [['ar', 'Argentina'], ['mx', 'Mexico']];

  let select = document.getElementById("paises");

  select.innerHTML = '';
  for(i=0; i<paises.length; i++){
     let valor = paises[i][0]
     let texto = paises[i][1]

     select.innerHTML += "<option value=\"" + valor + "\">" + texto + "</option>";

  };
 console.log('Cargue paises');
};

function cargar_hobbies(){
  //<input type="checkbox" name="h12" id="h11" value="h1"> <label for="h11">Hobbie 1</label>  
  let hobbies = [['tenis', 'Tenis'], ['foto', 'Fotografía']];
  let elemento = document.getElementById("hobbies");

  elemento.innerHTML = '';
  for(i=0; i<hobbies.length; i++){
   let valor = hobbies[i][0]
   let texto = hobbies[i][1]
   let e = '<input type="checkbox" name="h12" id="'+valor+'" value="'+valor+'"> <label for="h11">'+texto+'</label> <br>'

   elemento.innerHTML += e;
  };
  console.log('Cargue paises');
};

cargar_hobbies();
cargar_paises();