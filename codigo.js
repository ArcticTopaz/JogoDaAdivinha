var Numero;
var tentativas;
var limite;
var vidas;
var musicaFundo = new Audio('All Champion Battle Themes V4.mp3'); //Carrega a música


function Random() {
	var numAleatorio = Math.floor(Math.random() * limite) + 1; //Entre 1 e limite inclusive
	console.log("random number: " + numAleatorio); //Coloca o número na consola
    return numAleatorio;
 }

 
 function Init() {
	musicaFundo.loop = true; //Música em loop
	musicaFundo.volume = 0.15; //Volume de 0 a 1
	musicaFundo.load(); //Reset da música caso tivesse a dar
	musicaFundo.play(); //Play música
	pedirNumMax(); //Pede o número máximo ao utilizador
	numSecreto = Random();
	vidas = 10; //Número de vidas
	tentativas = 0; //Número de tentativas
	document.FGame.Output.value='Estou a pensar num numero entre 0 e ' + (limite) +'. Tenta adivinhar qual é?';
	document.FGame.Tries.value=tentativas;
	document.FGame.HighLow.value='';
	document.FGame.Input.value='';
 }

 
function Game(numero) {
	
	console.log(numero);
	console.log(numSecreto);
	
    if(numero === numSecreto) {
        tentativas++;
        document.FGame.Output.value='Acertaste em ' + tentativas + ' tentativas! Era o numero ' + numSecreto + '! Clica em Recomeçar para jogar outra vez';
        document.FGame.HighLow.value='Certoooooooooo!'; 
	}
	
	else {
		tentativas++;
		document.FGame.Output.value='Não, ' + numero + ' não é o numero em que estou a pensar!';
		document.FGame.HighLow.value=(numSecreto > numero) ? 'mais alto!' : 'mais baixo!';
		document.FGame.Tries.value=tentativas;			 
	}
}
 
 
function pedirNumMax() {
	 var num = parseInt(prompt("Escreve o número máximo"));
	 console.log("numMax: " + num);
	 limite = num;
}