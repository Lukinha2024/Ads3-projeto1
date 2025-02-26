function calcularIdade(){

    let anoDigitado = document.getElementById("anoNascimento").value;

    if(anoDigitado ===""){
        alert("Por favor digite um número antes de calcular!!!");
        return;
    }

    if(anoDigitado < 1900){
        alert("digite um ano maior ou igual que 1900");
        return;
    }


    let idade = 2025 - anoDigitado;

    console.log(idade);

    document.getElementById("resultado").innerHTML = `Idade é ${idade}`;

}

/*let é usado em js para criar váriaveis. ele cria váriaveis que podem mudar o valor
document.getEle...anoNascimento acessa o input onde é digitado o ano do nascimento
.value pega o valor que foi digitado no input e fica armazenado na variavel anoDigitado

document.getEle...resultado acessa o <p>resultado<p> do HTML
.innerHTML modifica o conteúdo do <p>resultado<p>
template string `Idade é ${idade}` exibe a mensagem
`${}` é usado para colocar variaveis dentro de string*/
