var perguntas = 
          ['1. Quem escreveu a saga As Cronica de Nárnia?\n',
            '2. Qual desses livros foi adaptado para filme\n?',
            '3. Selecione as personagens que aparecem no livro\n',
            '4. Qual autor criou a personagem Dom Quixote?\n',
            '5. Quem escreveu a saga Herry Potter?\n',
            '6. A personagem Lisbeth Salander é a protagonista de qual saga?\n',
            '7. Qual o nome deste escritor\n?',
            '8. A Cidade das esmeraldas é de qual livro?\n',
            '9. Qual o nome deste escritor?\n',
            '10. Qual é o pseudonimo da escritora Agatha Christie?\n',
          ];

var respostasCertas = 
          ['1. C. S. Lewis\n',
          ['2. O Regresso',' O Pequeno Principe',' A menina que roubava livros \n'], 
          ['3. 3.1','3.4\n'],
          '4. Miguel de Cervantes\n', 
          '5. J. K. Rowling.\n', 
          '6. Trilogia Millenniun\n',
          '7. Oswaldo de Andrade\n',
          '8. O Mágico de OZ\n',
          '9. Monteiro Lobato\n',
          '10. Mary Westmacott\n'
          ];

var respostasUsuario = [];
var i;
var count = 0;
var resultados;

/* ↑↑↑↑↑↑↑↑↑↑↑↑ VARIABLES ↑↑↑↑↑↑↑↑↑↑↑ */



for (i = 0; i < perguntas.length; i++) {
  document.getElementById('p' + (i + 1)).textContent = perguntas[i];
  
}

/* ↓↓↓↓↓↓↓↓↓↓↓↓ FUNCTIONS ↓↓↓↓↓↓↓↓↓↓↓*/
  function enviaResposta() {
    
      var resposta1 = document.getElementById('r1').value;
          respostasUsuario.push('1. '+resposta1+'\n');
          
      var resposta2 = document.getElementsByName('r2');
      for (i= 0; i< resposta2.length; i++) {
        if (resposta2[i].checked == true) {
          respostasUsuario.push('2. '+resposta2[i].value+'\n');
        }
      }
      
      var resposta3 = document.getElementsByName('r3');
      for (i= 0; i< resposta3.length; i++) {
        if (resposta3[i].checked == true) {
          respostasUsuario.push('3. '+resposta3[i].value+'\n');
        }
      }
      
      var resposta4 = document.getElementById('r4').value;
          respostasUsuario.push('4. '+resposta4+'\n');
        
      var resposta5 = document.getElementById('r5').value;
          respostasUsuario.push('5. '+resposta5+'\n');
          
      var resposta6 = document.getElementsByName('r6');
      for (i= 0; i< resposta6.length; i++) {
        if (resposta6[i].checked == true) {
          respostasUsuario.push('6. '+resposta6[i].value+'\n');
        }
      }
    
      var resposta7 = document.getElementsByName('r7');
      for (i= 0; i< resposta7.length; i++) {
        if (resposta7[i].checked == true) {
          respostasUsuario.push('7. '+resposta7[i].value+'\n');
        }
      }
	  
	  var resposta8 = document.getElementsByName('r8');
	  for(i=0; i< resposta8.length; i++){
		  if(resposta7[i].checked == true){
			respostasUsuario.push('8. '+resposta8[i].value+'\n');
		  }
	  }
			  
      
      var resposta9 = document.getElementsByName('r9');
      for (i= 0; i< resposta9.length; i++) {
		if (resposta9[i].checked == true) {
         respostasUsuario.push('9. '+resposta9[i].value+'\n');
        
       }
      }
      
      var resposta10 = document.getElementById('r10').value;
          respostasUsuario.push('10. '+resposta10+'\n');
	

  }//fim função enviaResposta
    
 
  
  function resultado(){
	  
		for(i=0; i<perguntas.length; i++){
			if(respostasUsuario[i] == respostasCertas[i]){
			  count =count+1;
			  
			}
		}
    
        if(count<5){
          resultados = ('\n você precisa ler mais');
        
        }else if(count<7){
          resultados = ('\n parabens você é um bom leitor');
        
        }else if(count>=7){
          resultados= ('\n você deve ter uma biblioteca em casa para saber tanto sobre livros');
        }
        
    alert('respostas certas\n'+respostasCertas+'\n suas respostas \n'+respostasUsuario+'\n você acertou '+count+resultados);    
  
  }//fim função resultado

