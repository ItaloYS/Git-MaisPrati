//Lista de Exercícios Ítalo Yuri da Silva

const prompt = require('prompt-sync')();

let numeroExercicio = 1;

    while (numeroExercicio != 0)
    {
        numeroExercicio = parseInt(prompt('Insira o numero do exercicio desejado de 1 a 16: (insira 0 para sair) '));

        switch (numeroExercicio) {
            case 1:
                Exercicio1();
                break;
            case 2:
                Exercicio2();
                break;
            case 3:
                Exercicio3();
                break;
            case 4:
                Exercicio4e5();
                break;
            case 5:
                Exercicio4e5();
                break;
            case 6:
                Exercicio6();
                break;
            case 7:
                Exercicio7();
                break;
            case 8:
                Exercicio8();
                break;
            case 9:
                Exercicio9();
                break;
            case 10:
                Exercicio10();
                break;
            case 11:
                Exercicio11();
                break;
            case 12:
                Exercicio12();
                break;
            case 13:
                Exercicio13();
                break;
            case 14:
                Exercicio14();
                break;
            case 15:
                Exercicio15();
                break;
            case 16:
                Exercicio16();
                break;
            default:
                if( numeroExercicio !=0)
                {
                    console.log("Exercício não encontrado!");
                }
                else
                    console.log("Execução encerrada!");
                    break

        }
    }

function Exercicio1 ()
/* 1 - . Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit. */

{

    let celcius = prompt('Digite o valor de Grau em Celcius: ');

    let fahrenheit = (celcius * 1.8) + 32 ;

    console.log('O valor em Fahrenheit é de:', fahrenheit, 'F*');

}

function Exercicio2 ()
/*Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.*/

{
    let eleitores = parseInt(prompt('Digite o numero total de eleitores: '));
    
    let brancos = parseInt(prompt('Digite o numero total de votos brancos: '));

    let nulos = parseInt(prompt('Digite o numero total de votos nulos: '));

    let validos = parseInt(prompt('Digite o numero total de votos validos: '));

    while ((eleitores < brancos) || (eleitores < nulos) || (eleitores < validos))
    {
        if (eleitores < brancos)
            
        {

            console.log('Total de votos brancos inválidos! Tente novamente.');
            
            brancos = parseInt(prompt('Digite o numero total de votos brancos: '));
            
        }

        if (eleitores < nulos)
            
        {

            console.log('Total de votos nulos inválidos! Tente novamente.');
            
            nulos = parseInt(prompt('Digite o numero total de votos nulos: '));
            
        }

        if (eleitores < validos)
            
        {

            console.log('Total de votos validos inválidos! Tente novamente.');
            
            validos = parseInt(prompt('Digite o numero total de votos validos: '));
            
        }
    }


    let percentualBrancos = (brancos / eleitores) * 100;
    let percentualNulos = (nulos / eleitores) * 100;
    let percentualValidos = (validos / eleitores) * 100;


    console.log(`Percentual de votos brancos: ${percentualBrancos.toFixed(1)}%`);
    console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(1)}%`);
    console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(1)}%`);

}

function Exercicio3 ()
/*3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros*/

{
    let int1 = parseInt(prompt('insira o primeiro número inteiro: '));
    let int2 = parseInt(prompt('insira o segundo número inteiro: '));
    let int3 = parseInt(prompt('insira o terceiro número inteiro: '));
    let int4 = parseInt(prompt('insira o quarto número inteiro: '));

    int4 = int1 + int2 + int3;

    int1 = int1 + 25;

    int2 = int2 * 3;

    int3 = int3 * 0.13;

    console.log(`Primeiro + 25: ${int1}`);
    console.log(`Segundo triplicado: ${int2}`);
    console.log(`12% do Terrceiro: ${int3.toFixed(1)}`);
    console.log(`Quarto guardando a soma das 3 entradas: ${int4}`);


}

function Exercicio4e5 ()
/*4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação). 

5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0*/

{
let nota1 = parseFloat(prompt('Insira a primeira nota do semestre: '));
let nota2 = parseFloat(prompt('Insira a segunda nota do semestre: '));

while(( nota1 < 0 || nota1 > 10) || ( nota2 < 0 || nota2 > 10))
{
    if ( nota1 < 0 || nota1 > 10)
    {
    console.log ('A primeira nota é inválida, por vavor tente novamente!');
    
    nota1 = parseFloat(prompt('Insira a primeira nota do semestre: '));

    }

    if ( nota2 < 0 || nota2 > 10)
    {
    console.log ('A segunda nota um é inválida, por vavor tente novamente!');

    nota2 = parseFloat(prompt('Insira a segunda nota do semestre: '));
    }
}

    let media = (((nota1 + nota2) / 2).toFixed(2));

    if (media > 6)
    {
    
    console.log (`PARABÉNS! Você foi aprovado! Sua média foi de: ${media} Pontos`);
    }
    else
    console.log (`Você foi reprovado! Sua média foi de: ${media} Pontos`);
}

function Exercicio6 ()
/* Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */
{
    let val1 = parseFloat(prompt('Insira o primeiro valor: '));
    while (val1 <= 0)
    {
        console.log ('O primeiro valor é inválido, por vavor tente novamente!');
    
        val1 = parseFloat(prompt('Insira o primeiro valor: '));
    }
    
    let val2 = parseFloat(prompt('Insira o segundo valor: '));
    while (val2 <= 0)
    {
        console.log ('O segundo valor é inválido, por vavor tente novamente!');
    
        val2 = parseFloat(prompt('Insira o segundo valor: '));
    }

    let val3 = parseFloat(prompt('Insira o terceiro valor: '));
    while (val3 <= 0)
    {
        console.log ('O terceiro valor é inválido, por vavor tente novamente!');
    
        val3 = parseFloat(prompt('Insira o terceiro valor: '));
    }  

    if((val1 < val2 + val3) && (val2 < val1 + val3) && (val3 < val1 + val2))
    {
        if(((val1 = val2) && (val1 != val3)) || ((val1 = val3) && (val1 != val2)) || ((val2 = val3) && (val2 != val1)))
        {
            console.log ('Os valores formam um triângulo ISÓSELES, possui dois lados iguais!');
        }

        else if(((val1 < val2) && (val2 < val3)) || ((val1 > val2) && (val2 > val3)))
        {
            console.log ('Os valores formam um triângulo ESCALENO, possui os tres lados diferentes!');
        }

        else
        {
            console.log ('Os valores formam um triângulo EQUILÁTERO, possui todos os lados iguais!');
        }

    }

    else
    {
        console.log ('Os valores NÃO formam um trinângulo!');
    }
}

function Exercicio7 ()
/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */
{
    let quantidade = parseInt(prompt('Por Favor insira o numero de maçãs desejadas: '));
    while (quantidade <= 0)
    {
        console.log ('A quantidade é inválida, por vavor tente novamente!');
    
        quantidade = parseInt(prompt('Por Favor insira o numero de maçãs desejadas: '));
    }

    if (quantidade >= 12)
    {
        let valor = (quantidade * 0.25).toFixed(2);
        console.log (`O valor da sua compra é de: R$ ${valor}`);
    }

    else
    {
        let valor = (quantidade * 0.30).toFixed(2);
        console.log (`O valor da sua compra é de: R$ ${valor}`);
    }
}

function Exercicio8 ()
/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

{
    let val1 = parseFloat (prompt('Por favor, insira o primeiro valor: '));
    let val2 = parseFloat (prompt('Por favor, insira o segundo valor: '));

    while( val1 == val2)
    {

    console.log (`O exercício dizia para não considerar dois valores iguais! Não faça isso!`)

    val1 = parseFloat (prompt('Por favor, insira o primeiro valor: '));
    val2 = parseFloat (prompt('Por favor, insira o segundo valor: '));
    
    }

    if (val1 > val2)
    {
        console.log (`Os valores em ordem crescente são: ${val2}, ${val1}`);
    }

    else
    {
        console.log (`Os valores em ordem crescente são: ${val1}, ${val2}`);
    }
}

function Exercicio9 ()
/*9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo*/
{

    let codigo = parseInt(prompt('Insira o código do produto: '));

    if ((codigo >= 5) && (codigo <= 6))
    {
        console.log ('A região do produto é: NORDESTE');
    }
    
    else if ((codigo >= 7) && (codigo <= 9))
    {
        console.log ('A região do produto é: SUDESTE');
    }
    
    else if ((codigo >= 10) && (codigo <= 20))
    {
        console.log ('A região do produto é: CENTRO-OESTE');
    }

    else if ((codigo >= 25) && (codigo <= 50))
    {
        console.log ('A região do produto é: NORDESTE');
    }

    else
    {
        console.log ('o produrto é IMPORTADO');
    }
}

function Exercicio10 ()
/*10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. */

{
let valor = parseFloat(prompt('insira o valor a ser imprimido 10 vezes: '))

for (let i = 0; i < 10; i++) 

{
    console.log(valor);
}

}

function Exercicio11 ()
/*11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO */

{

let valor = 0;

while ((valor >= 0) && (valor != null))
    {
        valor = parseInt(prompt('Insira o valor desejado: '));

        if (valor >= 0)
            
            if(valor % 2 == 0)
                {
                    console.log('Este valor é PAR!');
                }
        
            else if(valor % 2 != 0)
                {
                console.log('Este valor é IMPAR!');
                }
            else 
                {
                    break
                }
        
        else 
            {
                break
            }
        
    }

}

function Exercicio12 ()
/* Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5. */

{
const inicio = 1000
const fim = 1999

for (let i = inicio; i <= fim; i++)
    {
        if(i % 11 == 5)
            {
                console.log(i);
            }
    }
}

function Exercicio13 ()
/*Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma: */
{
let resultado;

for (let i = 1; i <= 5; i++)
    {
        let N = parseFloat(prompt('Insira o valor de N: '));

        for (let j = 1; j <= N; j++)
        {
            resultado = j * N
            console.log( j, 'x', N, '=', resultado);
        }


    }
}

function Exercicio14 () 
/* 14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números */

{
let soma = 0;
let contador = 0;
let numero;

do
    {
        numero = parseFloat(prompt('Por favor insira o numero decimal desejado! (Digite 0 para Parar)'))

        if (numero != 0)
        {
            soma = soma + numero;
            contador ++
        }

    
    }

while (numero != 0)
    {
        if (contador === 0)
        {
            console.log('Nenhum numero foi inserido!')
        }
        else
        {
            let media = soma / contador;
            console.log('A media dos numeros inseridos é igual a: ', media);
        }
    }

}

function Exercicio15 ()
/*15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos. */

{
    let numero = 0;
    let media = 0;
    let somanum = 0;
    let peso = 0;
    let somapeso = 0;

    do
    
    {
        numero = parseFloat(prompt('Por favor insira o numero decimal desejado! (Digite 0 para Parar) '));
        peso = parseFloat(prompt('Por favor insira o peso desejado! (Digite 0 para Parar) '));

        if ((numero != 0) && (peso != 0));
        {

            somanum = somanum + (numero * peso);

            somapeso = somapeso + peso;

        }
    } while (numero != 0)


    media = somanum / somapeso;
        
    console.log('A media ponderada dos valores de numero e peso são de: ', media);
        
    
}

function Exercicio16 ()

{
/*16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.*/

let num = 100
let cont = 0

while ( cont < 50 )

    {

    let primo = true;

    if (num <= 1) {
        primo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                primo = false;
                break;
            }
        }
    }

    if (primo) {
        console.log(num + " é primo.");
        cont ++;

    } 
    
    num++;
    }
}
