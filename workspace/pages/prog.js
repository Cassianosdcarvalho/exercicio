var perguntas = ['1. Quando foi a copa do mundo no Brasil?',
				 '2. Quem goleou o Brasil?',
				 '3. Quem ganhou a copa do mundo em 2010?',
				 '4. Quem ganhou a copa do mundo em 2006?',
				];

var repostasCertas = ['2014', 'alemanha', 'espanha','Italia'];

var respostasUsuario = [];
var i;


//alert(pergunta1);
for (i=0;i<perguntas.length;i++){
	document.getElementById('p'+(i+1)).textContent=perguntas[i];
	//alert (document.getElementById('p'+(i+1)));
}
function enviaResposta(){
	var resposta1=document.getElementById('r1').value.toLowerCase();
	var resposta2=document.getElementById('r2').value.toLowerCase();
	var resposta3=document.getElementById('r3').value.toLowerCase();
	var resposta4=document.getElementsByName('r4');
	
	respostasUsuario.push(resposta1);
	respostasUsuario.push(resposta2);
	respostasUsuario.push(resposta3);
	for (i=0;i<resposta4.length;i++){
		if(resposta4[i].checked==true){
			respostasUsuario.push(resposta4[i].value);
		}
	}
	
	alert(respostasUsuario);
}
