
// EXERCICIO 1 - OPERADORES
console.log("EXERCICIO 1");

let numero1 = 10;
let numero2 = 5;

console.log(numero1 != numero2);
console.log(numero1 === numero2);
console.log(numero1 >= numero2);


// EXERCICIO 2 - CALCULO DO IMC
console.log("EXERCICIO 2");

let peso = Number(prompt("Digite seu peso em kg:"));
let altura = Number(prompt("Digite sua altura em metros:"));

let imc = peso / (altura * altura);

console.log("Seu IMC e: " + imc.toFixed(2));

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc <= 24.9) {
    console.log("Peso ideal");
} else {
    console.log("Acima do peso");
}


// EXERCICIO 3 - CONTAGEM ATE 10
console.log("EXERCICIO 3");

for (let contador = 1; contador <= 10; contador++) {
    console.log(contador);
}


// EXERCICIO 4 - ARRAY DE HEROIS
console.log("EXERCICIO 4");

let herois = [
    "Thor",
    "Hulk",
    "Capitao America",
    "Arqueiro",
    "Viuva Negra"
];

console.log(herois);


// EXERCICIO 5 - CONDICIONAL TERNARIA
console.log("EXERCICIO 5");

let idade = Number(prompt("Digite sua idade:"));

let permissao = idade >= 18
    ? "Acesso permitido"
    : "Acesso negado";

console.log(permissao);


// EXERCICIO 6 - LOGIN
console.log("EXERCICIO 6");

let usuarioCadastrado = "admin";
let senhaCadastrada = "1234";

let usuario = prompt("Digite o usuario:");
let senha = prompt("Digite a senha:");

if (usuario === usuarioCadastrado &&
    senha === senhaCadastrada) {

    console.log("Login realizado com sucesso!");

} else {
    console.log("Falha na autenticacao!");
}


// EXERCICIO 7 - MEDIA DE 7 NOTAS
console.log("EXERCICIO 7");

let soma = 0;

for (let i = 1; i <= 7; i++) {
    let nota = Number(prompt("Digite a nota " + i + ":"));
    soma = soma + nota;
}

let media = soma / 7;

console.log("Media final: " + media.toFixed(2));

if (media >= 6) {
    console.log("Aluno aprovado!");
} else {
    console.log("Aluno reprovado!");
}


// EXERCICIO 8 - TEMPLATE STRING
console.log("EXERCICIO 8");

let nome = prompt("Digite seu nome:");

console.log(`Ola, ${nome}!`);


// EXERCICIO 9 - ALTERAR SENHA
console.log("EXERCICIO 9");

let senhaAtual = "1234";
let senhaDigitada = prompt("Digite sua senha atual:");

if (senhaDigitada === senhaAtual) {

    let novaSenha = prompt("Digite sua nova senha:");

    if (novaSenha !== senhaAtual &&
        novaSenha !== null &&
        novaSenha.trim() !== "") {

        console.log("Senha alterada com sucesso!");

    } else {
        console.log("A nova senha deve ser diferente da atual!");
    }

} else {
    console.log("Senha atual incorreta!");
}


// EXERCICIO 10 - VALOR COM DESCONTO
console.log("EXERCICIO 10");

let valorProduto = Number(prompt("Digite o valor do produto:"));
let valorDesconto = Number(prompt("Digite o valor do desconto:"));

let valorFinal = valorProduto - valorDesconto;

console.log("Valor final: R$ " + valorFinal.toFixed(2));