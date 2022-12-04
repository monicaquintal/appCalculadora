/* criando a função calcular() */

function calcular(tipo, valor) {
  if (tipo === 'acao') {
    
  } else if (tipo === 'valor') {
    var valor_campo = document.getElementById("resultado").value
    document.getElementById("resultado").value = valor_campo + valor
  } else {

  }
}