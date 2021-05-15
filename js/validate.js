$(function(validar)
{
  $.getJSON('https://mindicador.cl/api', function(data) {
    $('.txtDolar').val(data.dolar.valor);
    
  }).fail(function() {
    console.log('Error al consumir la API!');
  });
  
  $('.btnConvertir').click(function()
  {
    let Dolar 			= $('.txtDolar').val();
    let valorPesoCasa = $('.txtValorPesoCasa').val();
    let total = valorPesoCasa / Dolar;
    $('.txtTotalPesos').val(total.toFixed(2));
    return false;				
  })
  var numeros= '1234567890';
  $('.txtValorPesoCasa').keypress(function(e)
  {
    let caracter = String.fromCharCode(e.which); 
    if(numeros.indexOf(caracter) <0)
      return false;
  })
}