let indice = 7;
while (indice <= 100){
    console.log (indice);
    indice= indice +7 ;
}
const colores= [ 'rojo', 'amarillo', 'verde', 'negro'];
let i= 0;
while (colores.length > i ){
    console.log(colores[i]);
    i = i+1;
}
let i = 0;
do{
    i = i+1;
    console.log(i);
}while(i < 5)

//const patron = /hola/;
//const patron = /hola[0-9]mundo/;
//const patron = /hola[0-9]+mundo/;
//const patron = /^hola$/;
const patron = /^[0-9]+$/;
//const patron = /pato/;
let dato;
do{
    dato= prompt('Ingrese el valor')
}while(!patron.test(dato));



