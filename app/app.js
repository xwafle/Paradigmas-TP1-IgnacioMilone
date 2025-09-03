function main() {
    // Ejercicio 2 calculadora simple con dos operandos y un operador
    // no me acuerdo como era el tema del readline aca, asiq pregunto en clase y lo mejoro :D
    let operando1 = 5 , operando2 = 3;
    let op; 
    console.log("Bienvenido a la calculadora");

        function suma(operando1, operando2) {
            return operando1 + operando2;
        } 
        function resta(operando1, operando2) {
            return operando1 - operando2;
        } 

        function division(operando1, operando2) {
            return operando1 / operando2;
        } 

        function multi(operando1, operando2) {
            return operando1 * operando2;
        } 

            op = suma(operando1, operando2);
            console.log("El resultado de la suma es: " + op);
            op = resta(operando1, operando2);
            console.log("El resultado de la resta es: " + op);
            op = division(operando1, operando2);    
            console.log("El resultado de la division es: " + op);
            op = multi(operando1, operando2);
            console.log("El resultado de la multiplicacion es: " + op);

}

main();
