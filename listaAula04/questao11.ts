// QUESTÃO 11: Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento.
// Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de
// 15%.

// Definindo a função para calcular o aumento salarial
// function calcularAumento(salario) {
//     let aumento;
    
//     // Verifica se o salário é superior a R$ 1.500,00
//     if (salario > 1500.00) {
//         aumento = salario * 0.1; // Aumento de 10%
//     } else {
//         aumento = salario * 0.15; // Aumento de 15%
//     }
    
//     return aumento;
// }

// // Função para ler o salário do funcionário
// function lerSalario() {
//     // Utilizei prompt para simular a leitura do salário, em um ambiente real, pode variar
//     let salario = parseFloat(prompt("Digite o salário do funcionário:"));

//     // Verifica se o valor digitado é um número válido
//     if (!isNaN(salario)) {
//         let aumento = calcularAumento(salario);
//         let novoSalario = salario + aumento;
        
//         console.log("O aumento salarial é de R$ ${aumento.toFixed(2)}");
//         console.log("O novo salário será R$ ${novoSalario.toFixed(2)}");
//     } else {
//         console.log("Valor inválido. Por favor, digite um número válido.");
//     }
// }

// // Chamando a função para ler o salário
// lerSalario();


