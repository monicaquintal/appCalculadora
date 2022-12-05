/* criando a função calcular() */

function calcular(tipo, valor) {

  if (tipo === 'acao') {
    
    if (valor === "c") { // botão clear (limpar o visor (#resultado), atribuindo um valor vazio)
      document.getElementById("resultado").value = ""
    }

    if (valor === "+" || valor === "-" || valor === "*" || valor === "/" || valor === ".") {
      // concatena a operação desejada com a o valor
      document.getElementById("resultado").value += valor
    }
    
    if (valor === "=") {
      // recupera e processa como valor a string inserida na id resultado
      var valor_campo = eval(document.getElementById("resultado").value)
      // sobrepõe o valor obtido dentro da id resultado
      document.getElementById("resultado").value = valor_campo
    }

  } else if (tipo === 'valor') {

    // concatenando números digitados
     document.getElementById("resultado").value += valor

  } else {

  }
}