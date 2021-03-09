const table = document.getElementById('table');

var mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var diasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

index = 0;


var dibujarAsincronico = setInterval(() => {
    if (index < mes.length) {
        var tr = document.createElement('tr')
        var td = document.createElement('td')
        var td2 = document.createElement('td')

        td.innerHTML = mes[index]
        td2.innerHTML = diasMes[index]

        tr.appendChild(td)
        tr.appendChild(td2)
        table.appendChild(tr)
        index++
    } else {
        clearInterval()
    }
}, 10);


function ClickDiurno() {
    document.body.style.backgroundColor = "lightslategrey";
    rows = document.getElementsByTagName('tr');

    for (let index = 1; index < rows.length; index++) {
        rows[index].style.color = "black";

        if (index % 2 == 0) {
            rows[index].style.backgroundColor = "palevioletred";
        }
        else {
            rows[index].style.backgroundColor = "pink";
        }
    }
}

function ClickNocturno() {
    document.body.style.backgroundColor = "darkslategrey";
    rows = document.getElementsByTagName('tr');

    for (let index = 1; index < rows.length; index++) {
        rows[index].style.color = "white";

        if (index % 2 == 0) {
            rows[index].style.backgroundColor = "grey";
        }
        else {
            rows[index].style.backgroundColor = "black";
        }
    }
}

function cambiarTextoBoton(event, textoBoton) {
    switch (event.target.innerHTML) {
        case textoBoton:
            event.target.innerHTML = 'Evento3'
            event.target.style.color = 'blue'
            break;
        case 'Evento1':
            event.target.innerHTML = textoBoton
            event.target.style.color = 'white'
            break;
        default:
            event.target.innerHTML = 'Evento1'
            break;
    }
    //event.target.innerHTML = textoBoton;
    //poner clickNocturno() abajo del case
    //utilizar el ejemplo de arriba para hacer el de abajo
    //dibujar asincronico no funciona 

}
//ON CLICK = MYFUNCTION ()
//FIX THAT show it to the boss


function ClickSwitch(event) {
    switch (event.target.innerHTML) { 
        case "Nocturno":
        ClickNocturno()
            break;

        case "Diurno":
        ClickDiurno() 
        break;

        default:
           
            break;
    }
}

function Click(backgroundColor, color2, color3, color4){
    document.body.style.backgroundColor = backgroundColor;
    rows = document.getElementsByTagName('tr');

    for (let index = 1; index < rows.length; index++) {
        rows[index].style.color = color2;

        if (index % 2 == 0) {
            rows[index].style.backgroundColor =color3;
        }
        else {
            rows[index].style.backgroundColor = color4;
        }
    }
}