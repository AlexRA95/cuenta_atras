let fecha=new Date();
fecha.setFullYear(fecha.getFullYear()+1);

//Esto genera el principio de la página junto a la fecha
function crearFecha () {
  let cont = document.getElementById('cont')
  let titulo = document.createElement('h1')
  titulo.setAttribute('id', 'fechaTop')
  titulo.textContent = 'La fecha limite es ' + fecha.toLocaleString("es-ES");
  cont.append(titulo)
}

//Esto actualiza la fecha de la parte superior
function actFecha() {
    let titulo = document.getElementById('fechaTop');
    if ( !isNaN(fecha) ) {
        titulo.textContent = 'La fecha limite es ' + fecha.toLocaleString("es-ES");
    }else{
        alert("Eso no es una fecha");
    }
    
}

//Esto crea la tabla y su cuerpo en el HTML
function cuerpo () {
  let cont = document.getElementById('cont')
  let table = document.createElement('table')
  let tbody = document.createElement('tbody')
  tbody.setAttribute('id', 'cuerpo')
  let thead = document.createElement('thead')
  let tr = document.createElement('tr')
  let anios = document.createElement('th')
  let meses = document.createElement('th')
  let dias = document.createElement('th')
  let horas = document.createElement('th')
  let minutos = document.createElement('th')
  let segundos = document.createElement('th')
  anios.style.borderBottom = '1px solid white'
  meses.style.borderBottom = '1px solid white'
  dias.style.borderBottom = '1px solid white'
  horas.style.borderBottom = '1px solid white'
  minutos.style.borderBottom = '1px solid white'
  segundos.style.borderBottom = '1px solid white'
  anios.textContent = 'Años'
  meses.textContent = 'Meses'
  dias.textContent = 'Días'
  horas.textContent = 'Horas'
  minutos.textContent = 'Minutos'
  segundos.textContent = 'Segundos'

  tr.append(anios, meses, dias, horas, minutos, segundos)
  thead.appendChild(tr)
  table.appendChild(thead)
  table.appendChild(tbody)
  cont.append(table)
}

//Esto genera los elementos para la cuenta atras
function cuentaAtras() {
    let cuerpo= document.getElementById('cuerpo');
    let tr = document.createElement('tr');
    cuerpo.setAttribute('class','lejos');
            let anios = document.createElement('td');
            anios.setAttribute('id','anios');
            anios.setAttribute('class','lejos');
            let meses = document.createElement('td');
            meses.setAttribute('id','meses');
            meses.setAttribute('class','lejos');
            let dias = document.createElement('td');
            dias.setAttribute('id','dias');
            dias.setAttribute('class','lejos');
            let horas = document.createElement('td');
            horas.setAttribute('id','horas');
            horas.setAttribute('class','lejos');
            let minutos = document.createElement('td');
            minutos.setAttribute('id','minutos');
            minutos.setAttribute('class','lejos');
            let segundos = document.createElement('td');
            segundos.setAttribute('id','segundos');
            segundos.setAttribute('class','lejos');
            tr.append(anios, meses, dias,horas,minutos,segundos);
            cuerpo.appendChild(tr);
}

//Esto genera el input de la fecha
function crearInput() {
    let cont= document.getElementById('cont');
    let esto = document.createElement('input');
    
    esto.setAttribute('type','datetime');
    esto.setAttribute('name','fecha');
    esto.setAttribute('id','fecha');
    cont.append(esto);
}

//Esto se ejeucta primero
function dateToMilisec() {
    const milliseconds = Date.parse(fecha);
    console.log(milliseconds);
    fecha=milliseconds;
}

//Esto se ejecuta despues
function milisecToDate() {
    const lol = new Date(fecha);
    console.log(lol);
    fecha=lol;
}

function obtenerValor() {
    fecha = document.getElementById('fecha').value;
}

function crearBoton () {
  const botonAdd = document.createElement('button')
  botonAdd.textContent = 'Insertar fecha'
  botonAdd.onclick = hacerCosas; 
  document.getElementById('cont').appendChild(botonAdd)
}

const milisec_de_segundo=1000;
const milisec_de_minuto= milisec_de_segundo*60;
const milisec_de_hora = milisec_de_minuto*60;
const milisec_de_dia= milisec_de_hora*24;
const milisec_de_mes= milisec_de_dia*30;
const milisec_de_anio= milisec_de_dia*365; 

function actualizarContador() {
    const Now = new Date();
    const Duracion = fecha - Now;
    const anios_rest = Math.floor(Duracion/milisec_de_anio);
    let anios = document.getElementById("anios");
    
    const meses_rest = Math.floor((Duracion%milisec_de_anio)/milisec_de_mes);
    let meses = document.getElementById("meses");
    
    const dias_rest= Math.floor((Duracion%milisec_de_mes)/milisec_de_dia);
    let dias = document.getElementById("dias");
    
    const horas_rest=Math.floor((Duracion%milisec_de_dia)/milisec_de_hora);
    let horas = document.getElementById("horas");
    
    const min_rest = Math.floor((Duracion%milisec_de_hora)/milisec_de_minuto);
    let minutos = document.getElementById("minutos");
    
    const sec_rest= Math.floor((Duracion%milisec_de_minuto)/milisec_de_segundo);
    let segundos = document.getElementById("segundos");
    
    if (anios_rest<=0 && meses_rest<=0&&dias_rest<=0&&dias_rest<=0&&horas_rest<=0&&min_rest<=0&&sec_rest<=0) {
        anios.textContent = 0;
    meses.textContent = 0;
    dias.textContent=0;
    horas.textContent=0;
    minutos.textContent=0;
    segundos.textContent=0;
    }else if(isNaN(anios_rest)){
        fecha= new Date();
        fecha.setFullYear(fecha.getFullYear()+1);
        anios.textContent = anios_rest;
    meses.textContent = meses_rest;
    dias.textContent=dias_rest;
    horas.textContent=horas_rest;
    minutos.textContent=min_rest;
    segundos.textContent=sec_rest;
    }
    else{
        anios.textContent = anios_rest;
    meses.textContent = meses_rest;
    dias.textContent=dias_rest;
    horas.textContent=horas_rest;
    minutos.textContent=min_rest;
    segundos.textContent=sec_rest;
    }

    if (anios_rest<=0 && meses_rest<=0  &&dias_rest<7) {
        anios.setAttribute('class','cerca');
        meses.setAttribute('class','cerca');
        dias.setAttribute('class','cerca');
        horas.setAttribute('class','cerca');
        minutos.setAttribute('class','cerca');
        segundos.setAttribute('class','cerca');
    }else if(anios_rest<=0 && meses_rest<=0  &&dias_rest<14){
        anios.setAttribute('class','medio');
        meses.setAttribute('class','medio');
        dias.setAttribute('class','medio');
        horas.setAttribute('class','medio');
        minutos.setAttribute('class','medio');
        segundos.setAttribute('class','medio');
    }else{
        anios.setAttribute('class','lejos');
        meses.setAttribute('class','lejos');
        dias.setAttribute('class','lejos');
        horas.setAttribute('class','lejos');
        minutos.setAttribute('class','lejos');
        segundos.setAttribute('class','lejos');
    }
}

function hacerCosas() {
    obtenerValor();
    dateToMilisec();
    milisecToDate();
    actFecha();
}

crearFecha();
cuerpo();
cuentaAtras();
crearInput();
crearBoton();
setInterval(actualizarContador,1000);