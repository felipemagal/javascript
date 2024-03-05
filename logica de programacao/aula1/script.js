 //   var num1 = Number(prompt("Digite um número"));
      //   var num2 = Number(prompt("Digite outro número"));
      //   var media = (num1+num2) / 2;
      //   alert(`a sua média é ${media}`);
      //   alert(`A subtração é ${num1 - num2}`);
      //   alert(`A multiplicação é ${num1+num2}`);

      // var n1 = Number(prompt("Digite um número"));
      // var n2 = Number(prompt("Digite outro número"));
      // var resto = n1 % n2;
      // alert(`O resto da divisão é ${resto}`);

      // var num1 = Number(prompt("Digite um número"));
      // var num2 = Number(prompt("Digite um número"));
      // var potencia = num1 ** num2;
      // alert(`a potência dos número é ${potencia}`);


      // var n1 = Number(prompt("Digite um número"));
      // var n2 = Number(prompt("Digite um número"));

      // var media = (n1 + n2) /2;
      // alert(`Sua média é ${media} ${media >=5}`);

      // if(media >= 5){
      //   alert(`Parabéns, você foi aprovado`)
      // } else {
      //   alert(`Você foi reprovado`)
      // };

      
      // Exercícios
      
      // var n1 = Number(prompt("Digite um número"))
      // var n2 = Number(prompt("Digite um número"))

      // if(n1 == n2) {
      //   alert("Deu empate")
      // } else {
      //   alert(parseInt(Math.random()*2))   
      // } if (n1 == 0) {
      //   alert("N1 é o vencedor")
      // } else {
      //   alert("N2 é o vencedor")
      // };


      //OPERADORES LÓGICOS

      // var n1 = Number(prompt("Digite um numero"));
      // var n2 = Number(prompt("Digite um número"));

      // var media = (n1 + n2) /2;

      // alert(media)

      // if(media > 5 && n1 > 0 && n2 > 0 ) {
      //   alert("Parabéns, você foi aprovado")
      // } else {
      //   alert("Não foi desta vez!")
      // };

      // var n1 = Number(prompt("Digite um número"));
      // var n2 = Number(prompt("Digite um número"));
      
      // var media = (n1 + n2) /2;

      // if(media >= 8 || n1 >= 10){
      //   alert("Parabéns, você passou")
      // } else{
      //   alert("Você foi reprovado")
      // };
      
      //SWITCH

      var n1 = Number(prompt("Digite um número de 1 a 6"));

      switch(n1) {
        case 1:
          alert("Tente novamente")
          break;
          
        case 2:
          alert("você quase acertou")
          break;

        case 3: 
          alert("Você acertou o número")
          break;
        
        default: 
        alert("Dica: escolha de 1 a 3")
      };