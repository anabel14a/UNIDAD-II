/*function areacircunferencia(r){
    const pi =3.14;
    area= pi*(r*r)
    return area
}

let radio= prompt('Ingresa el valor del radio: ');
resultado= areacircunferencia(radio);
console.log(resultado);

function areacuadrado(a){
    multiplicacion= a*a
    return multiplicacion;
}
let lado= prompt('Ingrese el valor del lado: ');
respuestas=areacuadrado(lado);
alert(respuestas)

function areatriangulo(l){
    const raiz = 1.73;
    const abajo = 4;
    area= (raiz*(l*l))/abajo
    return area;
}
let lado =prompt('Ingrese el valor del lado: ');
resultado =areatriangulo(lado)
alert("El área de un triangulo equilátero es: "+ (resultado))*/

function areacircunferencia(r){
    const pi =3.14;
    area= pi*(r*r)
    return area
}

let radio= prompt('Ingresa el valor del radio: ');
resultado= areacircunferencia(radio);
alert("El área de una circunferencia es: "+(resultado));

function volumen(h){
    operacion= area*h;
    return operacion
}
let altura =prompt('Ingresa el valor de la altura: ');
respuesta=volumen(altura);
alert("El volumen de un cilindro es: "+ (respuesta));