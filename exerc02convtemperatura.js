const prompt = require("prompt-sync")()
// programa {   (*) No visualbasic esse inicio com o programa não existe. Eliminar o fecha chaves lá no fim.
    // funcao inicio() { (*) No visualbasic esse inicio com o programa não existe. Eliminar o fecha chaves lá no fim.

      // caracter opcao //variavel que guarda a opção de operador escolhida
      let opcao 
      // real fator1 // variavel que guarda o fator de operação 1
      let fator1
      // real fator2 // variavel que guarda o fator de operação 2
      let fator2
      //real result // variavel que guarda o resultado
      let result
      //logico reiniciar = verdadeiro //variavel lógica que guarada a opção de reiniciar ou não o cálculo
      let reiniciar = true
     
      //enquanto (reiniciar) {
        while(reiniciar) {
        //limpa() // limpa tudo do console escrito antes dele
        console.clear()
        //escreva("Coversor de Temperatura - Célsius ou Farenheit\n")
        console.log("Coversor de Temperatura - Célsius ou Farenheit\n")
        //escreva("\nEscolha a operação:\n")
        console.log("\nEscolha a operação:\n")
        //escreva("1 - Celsius para Farenheit\n")
        console.log("1 - Celsius para Farenheit\n")
        //escreva("2 - Farenheit para Celsius\n")
        console.log("2 - Farenheit para Celsius\n")
        //escreva("\nresposta:\t")
        console.log("\nresposta:\t")
        //leia(opcao)
        opcao = prompt()
  
        //se (opcao == 1) {
        if(opcao == 1) {    
         //limpa() // limpa tudo do console escrito antes dele
         console.clear()
         //escreva("Opção Escolhida conversor Celsius para Farenheit:\n")
         console.log("Opção Escolhida conversor Celsius para Farenheit:\n")
         //escreva("\nDigite a temperatura em °C:\t\n")
         console.log("\nDigite a temperatura em °C:\t\n")
         //escreva("resposta:\t")
         console.log("resposta:\t")
         //leia(fator1)
         fator1 = parseFloat(prompt())
         //result = fator1*9/5 + 32 
         result = fator1*9/5 + 32
         //escreva("\n,O resultado é:\t", result, "\n") 
         console.log("\n O resultado é:\t", result, "\n")
        }
  
        //se (opcao == 2) {true
        if(opcao == 2) { 
         //limpa() // limpa tudo do console escrito antes dele
         console.clear()
         //escreva("Opção Escolhida conversor Farenheit para Celsius:\n")
         console.log("Opção Escolhida conversor Farenheit para Celsius:\n")
         //escreva("\nDigite a temperatura em °F:\t\n")
         console.log("\nDigite a temperatura em °F:\t\n")
         //escreva("resposta:\t")
         console.log("resposta:\t")
         //leia(fator2)
         fator2 = parseFloat(prompt())
         result = (5/9)*(fator2-32)
         //escreva("\n,O resultado é:\t", result, "\n")
         console.log("\nO resultado é:\t", result, "\n")
         }
  
         //escreva("\nDeseja fazer nova conversão de temperatura? digite 'verdadeiro' para sim e 'falso' para não:\n")
         console.log("\nDeseja fazer nova conversão de temperatura? digite 'true' para sim e 'false' para não:\n")
         //escreva("Resposta:\t")
         console.log("Resposta:\t")
         //leia(reiniciar)
         reiniciar = prompt()
        }
  