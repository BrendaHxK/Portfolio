/*let nombre = "Brenda Xiomara ";
let apellido = "Hakimian"
let edad = 24;
let esDocente = false;
let curso = "Programación Web y Desarrollo de apps moviles.";

console.log(`
    Nombre/s: ${nombre} 
    Apellido: ${apellido}
    Edad: ${edad}
    Es docente: ${esDocente} 
    Curso: ${curso}`);

let num1 = 100;
let num2 = 200;

let suma = num1+num2;
let resta = num2-num1;
let multi = num2*num1;
let div = num2/num1;
let mod = num2%num1;

console.log(`
    Suma: ${suma}
    Resta: ${resta}
    Multiplicación: ${multi}
    División: ${div}
    Modulo: ${mod}`)

let nombreCompleto = nombre + apellido
console.log(nombreCompleto);

let saludo = "Mi nombre completo es " + nombreCompleto + " tengo " + edad + " años," + " y estoy cursando " + curso;
console.log (saludo);
let saludoTemplate = (`Mi nombre completo es ${nombreCompleto} tengo ${edad} años, y estoy cursando ${curso}`);
console.log(saludoTemplate);*/

/*let nombre = prompt('Inrese su nombre/s.');
let apellido = prompt('Inrese su apellido.');
let edad = prompt('Ingrese su edad.');
let curso = prompt ("Ingrese su curso/s");
let nombreCompleto = (`${nombre} ${apellido}`);
let saludoTemplate = (`Hola, soy ${nombreCompleto} tengo ${edad} y estoy cursando ${curso}.`);
console.log(saludoTemplate);*/
/*
//ejercicio 1
let num1 = 5;
let num2 = 7;
//let suma =
let sumaTotal = num1 + num2;
console.log(`La suma total es ${sumaTotal}`);

//ejercicio 2
let nombre = "Brenda";
let apellido = "Hakimian";
let nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

//ejercicio 3
let cantidad = 4;
let precio = 150.75;
let costoTotal = cantidad * precio;
console.log("El costo total por 4 productos es de $603.");

//ejercicio 4
let numeroComoTexto = "20";
let numero = parseInt(numeroComoTexto);
console.log(numero + 10);

//ejercicio 5
nombre;
let edad = 24;
let ciudad = "Berisso";
console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}`);*/

//ejercicio 6
/*let numero1 = parseInt(prompt("ingrese el primer numero"));
let numero2 = parseInt(prompt("ingrese el segundo numero"));

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;

console.log(`
    Suma: ${suma}
    Resta: ${resta}
    Multiplicación: ${multiplicacion}
    division: ${division} 
    `);

//ejercicio 7
const pi = Math.PI
let radio = 5;
let area = pi * Math.pow(radio,2);
console.log(area);
let areaDosDecimales = parseFloat(area.toFixed(2));
console.log(areaDosDecimales);

//ejercicio 8
cantidad = 3;
productos = 'manzanas';
console.log(`Compraste ${cantidad} manzanas.`);

//ejercicio 9
let miNumero = parseInt(prompt('Ingrese un número.'));
 if (miNumero > 0){
    console.log ('El número es positivo.');
} else if (miNumero < 0){
    console.log('El número es negativo.');
} else if (miNumero == 0){
    console.log('El número ingresado es 0.');
} else {
    console.log('No ingresaste ningún número.');
}

//ejercicio 10

let edad = 18;
let tieneMembresia = true;
if (tieneMembresia && edad){
    console.log('Ingreso válido (VIP).');
}

let edad = parseInt(prompt("Ingrese su edad."));
if (edad <= 0) {
    console.log("No ha nacido");
} else if (edad > 0 && edad <= 12) {
    console.log("Es infante");
} else if (edad > 12 && edad <= 21) {
    console.log("Es adolescente");
} else if (edad > 21 && edad <= 75) {
    console.log("Es adulto jóven");
} else if (edad > 75 && edad < 100) {
    console.log("Es adulto mayor");
} else if (edad >= 100) {
    console.log("Que ganas...");
} else {
  console.log("No ingresó un número válido");
}

let dia = prompt("Ingrese el día.");
let primaria = "primaria";
let secundaria = "secundaria";
let pollo = "pollo al horno.";
let fideos = "fideos con bolognesa.";
let = albondigas = "albondigas con arroz primavera.";
let chuletas = "chuletas de cerdo con ensalada mixta.";
let hamburguesas = "hamburguesas con papas fritas.";

switch (dia) {
    case "lunes":
        console.log
        (`El menu para ${primaria} es ${pollo} 
        Para ${secundaria}: ${fideos}`);
        break;
     case "martes":
        console.log
        (`El menu para ${primaria} es ${fideos} 
        Para ${secundaria}: ${albondigas}`);
        break;
     case "miercoles":
        console.log
        (`El menu para ${primaria} es: ${chuletas} 
        Para ${secundaria}: ${pollo}`);
        break;   
     case "jueves":
        console.log
        (`El menu para ${primaria} es: ${albondigas}
        Para ${secundaria}: ${chuletas}`);
    break;     
     case "viernes":
        console.log
        (`El menu para ${primaria} y para ${secundaria} es ${hamburguesas}`);
        break;    
    default:
        console.log("Día inválido.")
        break;
}

let dia = "usted cobra el día"
let nroDoc = prompt("Ingrese su nro de documento:");
let ultimoNumero = parseInt(nroDoc[nroDoc.length - 1]);

if (ultimoNumero == 0 || ultimoNumero == 1) {
    console.log (`${dia} lunes`);
} else if (ultimoNumero == 2 || ultimoNumero == 3) {
    console.log (`${dia} martes`);
} else if (ultimoNumero == 4 || ultimoNumero == 5) {
    console.log (`${dia} miercoles`);
} else if (ultimoNumero == 6 || ultimoNumero == 7) {
    console.log (`${dia} jueves`);
} else if (ultimoNumero == 8 || ultimoNumero == 9) {
    console.log (`${dia} martes`);
} else {
    console.log ('Ingresó un número inválido');
}
//let nota = parseFloat(prompt("Ingrese su nota"));
let reprobado = (nota >= 0 && nota <= 4);
let aprobado = (nota > 4 && nota <= 6);
let notable = (nota > 6 && nota <= 8);
let sobresaliente = (nota > 8 && nota <=10);

if (reprobado) {
    console.log("su nota es desaprobado");   
}else if (aprobado){
    console.log("su nota es aprobado"); 
}else if (notable){
    console.log("su nota es notable"); 
}else if (sobresaliente){
    console.log("su nota es sobresaliente"); 
} else {
    console.log("Nota inválida"); 
}

let notaAlumnos = [4.5, 5.3, 6, 6.7, 7, 8.2, 9, 10, 8.5, 7.3, 6.5, 5.7, 3.2];
let cuentaVuelta = 0;
//let aprobados = 0;
//let desaprobados = 0;
while (cuentaVuelta < notaAlumnos.length) {
  let nota = notaAlumnos[cuentaVuelta];
  let reprobado = nota >= 0 && nota <= 4;
  let aprobado = nota > 4 && nota <= 6;
  let notable = nota > 6 && nota <= 8;
  let sobresaliente = nota > 8 && nota <= 10;
   if (reprobado) {
     console.log(`${nota} desaprobado`);
   } else if (aprobado) {
     console.log(`${nota} aprobado`);
   } else if (notable) {
     console.log(`${nota} notable`);
   } else if (sobresaliente) {
     console.log(`${nota} sobresaliente`);
   } else {
     console.log("Nota inválida");
   }
  cuentaVuelta++;
}

let frutas = ["manzana", "banana", "naranja"];
for (let i = 0; i < frutas.length; i++){
    let fruta = frutas[i];
    console.log(fruta);
    console.log(i); 
}

for (let i = 1; i < 11; i++){
     const multi = 5;
     console.log(i*multi);
    
}

let vueltas = 1;
let numero = 1;

while (vueltas < 101) {
    if (numero%2 == 0){
        console.log(`${numero} es par`);
    } else
    console.log(`${numero} es impar`);
numero++;    
vueltas++;

for (let i = 1; i < 101; i++){
    if (i%2 == 0){
        console.log(`${i} es par`);
    } else
    console.log(`${i} es impar`);
}
function datosPersona(nombre, apellido, direccion) {
    return (`Me llamo ${nombre} y ${apellido} y vivo en ${direccion}`)
};
console.log(datosPersona("Brenda","Hakimian", 33525));

function sonMultiplos(num1, num2) {
    if ((num1 % num2) == 0 ){
        return("Es multiplo");
    }else {
        return("No es multiplo");
    }
}

console.log(sonMultiplos(10,2));

function contar(num) {
for (let i = 0; i <= num; i++) {   
    console.log(i);     
    }
return;
}
contar(4);

function sumaEnteros(num1, num2) {
    let suma = (num1 + num2);
    return suma*suma;
}

console.log(sumaEnteros(3,2));


let numeros = [1,3,5,7,9];
let doblesConMap = numeros.map((numero) =>{
    return numero * 2;})

.filter((numero) => numero % 3 == 0);
console.log(numeros);
console.log(doblesConMap);

let numeros = [10, 20, 30, 40, 50];

function doblar(array) {
  return array.map((numero) => {
    return numero * 2;
  });
}
let multiplicacion = doblar(numeros);

console.log(multiplicacion);

let numerosMezclados = [3, 75, 657, 32, 10, 100, 532];

function SumarPares(array) {
  let pares = array
    .filter((numero) => numero % 2 == 0)
    .reduce((acc, numero) => acc + numero, 0);
  return pares;
}
console.log(SumarPares(numerosMezclados));

let array1 = ["hola", "sanguche", "perro", "gatos", "mapas"];
function palabras5 (palabras){
    return palabras.filter((palabra)=> palabra.length>5);
}
console.log(palabras5(array1));


//ejercicio 1
function retornarCuadrado(valor) {
  return valor * valor;
}
console.log(retornarCuadrado(3));

//ejercicio 2
function esPar(number) {
  if (number % 2 == 0) {
    return "es par";
  }
}
console.log(esPar(10));

function saludoPersonalizado(nombre) {
  return `Hola ${nombre}`;
}
console.log(saludoPersonalizado("Brenda"));

function calculadora(num1, operador, num2) {
  switch (operador) {
    case "suma":
      return num1 + num2;
      break;
    case "resta":
      return num1 - num2;
      break;
    case "div":
      return num1 / num2;
      break;
    case "multi":
      return num1 * num2;
      break;
    default:
      return "No ingrsó un operador válido";
      break;
  }
}
console.log(calculadora(1, "suma", 2));

function RepetirMensaje(cantidad) {
  for (let i = 1; i <= cantidad; i++) {
    console.log("mensaje numero: " + i);
  }
  return;
}
RepetirMensaje(20)

/*
- Crear una clase soldado que tenga las propiedades nombre, edad, rango, vehiculoAsignado y el método "disparar".
- Crear una clase sargento que extienda de la clase soldado, con las propiedades numeroCompania, soldadosACargo, y el método "dar orden".
- Crear un clase vehiculoMilitar con las propiedades cantRuedas, cantSoldados, velocidadPromedio y el método movilizar.
- Crear las clases tanque y camión que extiendan de vehiculoMilitar. Tanque debe tener las propiedades artillero, conductor, cantMunicion y espesorBlindaje, y el metodo disparar y recarga. Camión debe tener  las propiedades soldadosTransportados, cantCombustible, destino y el método comunicarDestino.
- Crear la clase capitán que extienda de sargento, con las propiedades nombrePeloton, cantMedallas, y el método armarEstrategia.

class Soldado { 
  constructor(nombre, edad, rango, vehiculoAsignado) { 
      this.nombre = nombre; 
      this.edad = edad; 
      this.rango = rango; 
      this.vehiculoAsignado = vehiculoAsignado; 
  } 
  disparar() { 
      return (`${this.nombre} disparó!`); 
  } 
} 

console.log(`Estos soldados van a disparar. \n\n`);

let soldado1 = new Soldado("Juan", 25, "Soldado", "tanque"); 
let soldado2 = new Soldado("Pedro", 27, "Soldado", "avión"); 
let soldado3 = new Soldado("Carlos", 30, "Soldado", "Barco"); 
let soldado4 = new Soldado("Martin", 29, "Soldado", "tanque"); 
let soldados = [soldado1, soldado2, soldado3, soldado4];

soldados.forEach(soldado => {
  console.log(soldado.disparar());
});

/*- Crear una clase sargento que extienda de la clase soldado, con las propiedades numeroCompania, soldadosACargo, y el método "dar orden".

class Sargento extends Soldado {
  constructor(nombre, edad, rango, vehiculoAsignado, numeroCompania, soldadosACargo) {
  super(nombre, edad, rango, vehiculoAsignado);
  this.numeroCompania = numeroCompania;
  this.soldadosACargo = soldadosACargo;
  }
  darOrden() {
      return `${this.nombre} esta ordenando.`;
      }
  }

let sargento1 = new Sargento ("Hugo", 50, "sargento", "tanque", 12, 20);
let sargento2 = new Sargento ("Charles", 45, "sargento", "avion", 18, 5);
let sargento3 = new Sargento ("Alberto", 42, "sargento", "submarino", 1, 50);
let sargentos = [sargento1, sargento2, sargento3];

console.log("Estos sargentos estan dando ordenes.\n\n");

sargentos.forEach(sargento => {
  console.log(sargento.darOrden()); 
});


class vehiculoMilitar {
  constructor (tipoVehiculo, cantRuedas, cantSoldados, velocidadPromedio) {
      this.tipoVehiculo = tipoVehiculo;
      this.cantRuedas = cantRuedas;
      this.cantSoldados = cantSoldados;
      this.velocidadPromedio = velocidadPromedio;
  }
  movilizar(){
      return (`${this.tipoVehiculo} se esta movilizando`);
  }
}
let vehiculoMilitar1 = new vehiculoMilitar ("tanque","10 ruedas", "6 soldados", "velocidad: 60km/h");
let vehiculoMilitar2 = new vehiculoMilitar ("Camión", "4 ruedas", "4 soldados", "velocidad: 40km/h");

console.log(vehiculoMilitar2.movilizar());

class tanque extends vehiculoMilitar {
  constructor(tipoVehiculo, cantRuedas, cantSoldados, velocidadPromedio, artillero, conductor, cantMunicion, espesorBlindaje){
  super(tipoVehiculo, cantRuedas, cantSoldados, velocidadPromedio);
  this.artillero = artillero;
  this.conductor = conductor;
  this.cantMunicion = cantMunicion;
  this.espesorBlindaje = espesorBlindaje;    
  }
  disparar(){
      return(`${this.artillero} está disparando`);
  }
  recargar(){
      return (`${this.conductor} esta recargando ${this.cantMunicion} municiones`);
  }
}

let tanque1 = new tanque ("tanque", 20, 6, "60km/h", "Pedro", "Hernesto", 30, "5kg");
console.log(tanque1.disparar());
console.log(tanque1.recargar());

class Camion extends vehiculoMilitar {
  constructor(tipoVehiculo, cantRuedas, cantSoldados, velocidadPromedio, soldadosTransportados, cantCombusible, destino){
  super(tipoVehiculo, cantRuedas, cantSoldados, velocidadPromedio);    
  this.soldadosTransportados = soldadosTransportados;
  this.cantCombusible = cantCombusible;
  this.destino = destino;    
  }
  comunicarDestino(){
      return (`${this.tipoVehiculo} se está dirigiendo a ${this.destino}`)
  };
}

let camion1 = new Camion ("Camión", 10, 8, "100km/h", "Juan, Pedro, Matías, Lucas", "40L", "Alemania");
console.log(camion1.comunicarDestino());

class Capitan extends Sargento {
  constructor (nombre, edad, rango, vehiculoAsignado, numeroCompania, soldadosACargo, nombrePeloton, cantMedallas){
      super(nombre, edad, rango, vehiculoAsignado, numeroCompania, soldadosACargo)
  this.nombrePeloton = nombrePeloton;
  this.cantMedallas = cantMedallas;
  }
  armarEstrategia(){
      return (`${this.nombrePeloton} está armando la estrategia`);
  }
}

let capitan1 = new Capitan ("Juan", 30, "sargento", "submarino", 2, 45, "Pelotón mapache", 6);

console.log(capitan1.armarEstrategia());
*/