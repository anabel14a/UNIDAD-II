/*for (var i = 1; i <= 10; i++){
    console.log(i)
}

let text = "";
for (let i = 1; i <=10; i++){
    text +=i + "<br>";
}
document.getElementById("demo").innerHTML= text;*/

const animales = ["Gato", "Conejo", "Perro", "Jirafa", "Delfin", "Mono"]

let text ="";
for(let i= 5; i >=0; i--){
    text += animales[i] +"<br>";
}
document.getElementById("demo").innerHTML=  text;

const animales = ["Gato", "Conejo", "Perro", "Jirafa", "Delfin", "Mono"]

let text ="";
for(let i= 0; i >animales.length; i++){
    text += animales[i] +"<br>";
}
document.getElementById("demo").innerHTML=  text;