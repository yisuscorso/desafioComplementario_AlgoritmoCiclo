
// Selección de menú

let menu = prompt("Puede elegir entre los siguientes menús: Menu 1 - Menu 2 - Menu 3").toLowerCase() 

if(menu == "menu 1"){ 
    alert("Carne mechada con patatas asadas, bebida y postre")
} else if(menu == "menu 2"){
    alert("Pizza Diavola. un pan de ajo, bebida y helado")
} else if(menu == "menu 3"){
    alert("Polo a la plancha con ensalda, bebida y ensalada de frutas")
} 
else {
    alert("Lo sentimos, la opcion solciitada no está disponible")
}




// Multiplicador del coste de entradas para grupos

do{
    numero1 = parseFloat(prompt("Ingresa el número de asistentes"))
    numero2 = parseFloat(prompt("Ingresa el precio de la entrada"))
    operacion = prompt("Introduce * para continuar")
}while(isNaN(numero1) || isNaN(numero2))

switch(operacion){
    case "*":
        alert(numero1 * numero2);
        break;

    default:
        alert("Operación no válida");
        break;
    }        