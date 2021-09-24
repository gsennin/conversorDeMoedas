//Dolar
function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico / 5.23;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em dólar é $ " + valorEmReal.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}

//Euros
function ConverterEuro() {
  var valorElemento = document.getElementById("valorEuro");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmReal = valorEmRealNumerico / 6.19;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertidoEuro");
  var valorConvertido = "O resultado em Euro é €$ " + valorEmReal.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}
//
function ConverterLibras() {
  var valorElemento = document.getElementById("valorLibras");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmReal = valorEmRealNumerico / 7.26;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById(
    "valorConvertidoLibras"
  );
  var valorConvertido = "O resultado em Libras é £ " + valorEmReal.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}