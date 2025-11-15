// resgate das informações do arquivo HTML
botoes = document.querySelectorAll(".btn");
campoResultado = document.getElementById("resultado");

// definicao de variaveis genéricas
var operacoes = ["mult", "div", "menos", "mais"];
var numeros = ["0","1","2","3","4","5","6","7","8","9"];
var primeiroNum = "";
var segundoNum = "";
var operacao = "";
var sinal = '';

// atualizar todos os dados para seu estado inicial
const limparValores = () => {
  primeiroNum = "";
  segundoNum = "";
  operacao = "";
  sinal = '';
}

// atualizar o texto da ooperação no campo de texto da calculadora
const atualizaCampoResultado = (text) => {
  campoResultado.innerText = `${text}`;
}

// responsavel por converter os valores para float e em seguida calcular o resultado
const realizarOperacao = () => {
  try{
    const a = parseFloat(primeiroNum);
    const b = parseFloat(segundoNum);
    let resultado;

    if (operacao === "mais") {
      resultado = a + b;
    } else if(operacao === "menos") {
      resultado = a - b;
    } else if(operacao === "div") {
      resultado = a / b;
    } else {
      resultado = a * b;
    }
    return resultado;
  } catch (e){
    alert("Houve um problema inesperado. Contacte o desenvolvedor.")
  }
}

// iterar sob todos os botões
botoes.forEach(botao => {
  //Dando significao aos textos de acordo com a lógica simples de uma calculadora.
  botao.addEventListener('click', (e) => {
    content = botao.dataset.id;
    if (numeros.includes(content) && operacao.length === 0) primeiroNum += content
    else if (numeros.includes(content) && operacao.length > 0) segundoNum += content
    
    else if (content === "menos" && primeiroNum === "") primeiroNum += "-";
    else if (content === "menos" && primeiroNum === "-") return;
    else if (operacoes.includes(content) && primeiroNum.length > 0 && segundoNum.length === 0){
      operacao = content
      if (operacao === "mais") sinal = '+' 
      else if(operacao === "menos") sinal = '-'
      else if(operacao === "div") sinal = '/'
      else sinal = '*'
    }
    else if (content === "CE") {
      limparValores();
      campoResultado.innerText = '0'
      return;
    }

    //Atualizando o texto do HTML para mostrar para o usuário
    if (content === "igual"){
      const resultado = realizarOperacao()
      atualizaCampoResultado(primeiroNum + " " + sinal + " " + segundoNum + " = " + resultado)
    } else {
      atualizaCampoResultado(primeiroNum + " " + sinal + " " + segundoNum)
    }
  })
});