var Numero;
 var Tentativas;
 var limite;
 var Tentativas = 0;
 var vidas 

 function Random()
 {
 today = new Date();
 num = today.getTime();
 num = Math.round(Math.abs(Math.sin(num) * 1000000)) % limite;
 num +=1;
 return num;
 }

 function Init()
 {
 pedirNumMax();
 Numero = Random();
 vidas = numvidas;
 document.FGame.Output.value='Estou a pensar num numero entre 0 e ' + (limite) +'. Tenta adivinhar qual é?';
 document.FGame.Tries.value=Tentativas;
 document.FGame.HighLow.value='';
 document.FGame.Input.value='';
 }

 function Game(Number)
 {
		 
     if(Number==Numero)
         {
          Tentativas++;
         document.FGame.Output.value='Acertaste em ' + Tentativas + ' tentativas! Era o numero ' + Numero + '! Clica em Recomeçar para jogar outra vez';
         document.FGame.HighLow.value='Certoooooooooo!';
         }
         else 
         {
     Tentativas++;
             document.FGame.Output.value='Não, ' + Number + ' não é o numero em que estou a pensar!';
     document.FGame.HighLow.value=(Numero > Number) ? 'mais alto!' : 'mais baixo!';
     document.FGame.Tries.value=Tentativas;
         }
		 else
			 
 }
 
 function pedirNumMax(){
	 var num = parseInt(prompt("Escreve o número máximo"));
	 console.log("numMax: " + num);
	 limite = num;
 }