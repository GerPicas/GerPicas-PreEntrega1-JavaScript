alert("Calculadora de promedio de notas para alumnos")


let alumno = prompt("Ingrese el nombre del alumno: ");

while (isNaN(alumno) === false) {
    alumno = prompt ("Ingrese el nombre del alumno:");
}

while (alumno === ""){
    alumno = prompt("Ingrese el nombre del alumno:");
}


function calcularPromedio() {

    alert("Ingrese las tres notas de "+alumno+" entre 1 y 10")
    let nota1 = parseFloat(prompt("Ingrese la primer nota de " + alumno + ":"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota de " + alumno + ":"));
    let nota3 = parseFloat(prompt("Ingrese la tercer nota de " + alumno + ":"));
    let promedio = (nota1 + nota2 + nota3) / 3

    if (nota1 >= 1 && nota2 >= 1 && nota3 >= 1){
        alert("El promedio de "+alumno+" es: "+promedio);
    } else if (nota1 == 0 || nota2 == 0 || nota3 == 0){
        alert("No se pudo calcular el promedio de "+alumno+ " ya que no se ingresaron correctamente los datos");
    } else if (nota1 < 11 || nota2 < 11 || nota3 < 11){
        alert("No se pudo calcular el promedio de "+alumno+ " ya que no se ingresaron correctamente los datos");
    }

    
} 

calcularPromedio();

