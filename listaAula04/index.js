// Solicita ao usuário que insira as três notas do aluno
var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));
// Calcula a média das notas
var media = (nota1 + nota2 + nota3) / 3;
// Verifica se o aluno está aprovado ou reprovado
if (media >= 7) {
    alert("O aluno est\u00E1 APROVADO com m\u00E9dia ".concat(media.toFixed(2)));
}
else {
    alert("O aluno est\u00E1 REPROVADO com m\u00E9dia ".concat(media.toFixed(2)));
}
