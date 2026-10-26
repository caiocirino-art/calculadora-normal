/* 
operadores aritiméticos:
+ soma
- subtração
* multiplicação
/ divisão
++ incremento (soma mais 1)
-- decremento (subtrai menos 1)

operadores de atribuição:
= igual
+= mais ou igual
-= menos ou igual
/= dividido ou igual
*= multiplicando ou igual

operadores de sequência:
+ (serve para concatenar valores(string ou variaveis))
- (serve para subtrair valores(string ou variaveis))

operadores de comparação:
retorna true (verdadeiro) ou false (falso)
== (comparar 2 valores)
=== (comparar valores e tipo de dado)
!=  (diferente) de valores apenas
!== (comparar a diferença de valores e tipo de dado)
*/

function somar(){

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 + n2;
    document.getElementById("resultado").innerHTML = resultado;

    const corResultado = document.getElementById("resultado");
    if (operação < 0){
    corResultado.style.backgroundColor = "red";
    }
    else {
    corResultado.style.backgroundColor = "green";
    }

  }
function subtrair(){

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 - n2;
    document.getElementById("resultado").innerHTML = resultado;

    const corResultado = document.getElementById("resultado");
    if (operação < 0){
    corResultado.style.backgroundColor = "red";
    }
    else {
    corResultado.style.backgroundColor = "green";
    }

}


function dividir(){

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    if (n2 === 0){
        document.getElementById("resultado").innerHTML = "Erro: divisão por 0 não é possível."

        document.getElementById("resultado").style.backgroundColor = "yellow"

    }

    else{
  
    let resultado = n1 / n2;
    document.getElementById("resultado").innerHTML = resultado;

    const corResultado = document.getElementById("resultado");
    if (operação < 0){
    corResultado.style.backgroundColor = "red";
    }
    else {
    corResultado.style.backgroundColor = "green";
    }

    }


}


function multiplicar(){

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 * n2;
    document.getElementById("resultado").innerHTML = resultado;

    const corResultado = document.getElementById("resultado");
    if (operação < 0){
    corResultado.style.backgroundColor = "red";
    }
    else {
    corResultado.style.backgroundColor = "green";
    }

}


function limpar(){

    let n1 = Number(document.getElementById("num1").value = "");
    let n2 = Number(document.getElementById("num2").value = "");
    let resultado = n1 = n2;
    document.getElementById("resultado").innerHTML = "---";
    document.getElementById("resultado").style.backgroundColor = "lightgreen"

}





//alterar cor do resultado caso o resultado seja negativo//
