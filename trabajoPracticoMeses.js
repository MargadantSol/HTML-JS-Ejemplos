var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var diasDelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var meses31dias = "";
var meses30dias = "";


for (var i = 0; i < 12; i++) {
    if (diasDelMes[i] == 31) {
        meses31dias = meses31dias +' \n ' + meses[i];
    }

    if (diasDelMes[i] == 30) {
        meses30dias = meses30dias + ' \n ' + meses[i];
    }

}
console.log("Los meses con 31 dias son: " + meses31dias);
console.log("Los meses con 30 dias son: " + meses30dias);