$function(convert)
{
$.getJSON('https://mindicador.cl/api', function(data) {
    $('#txtDolar').val(data.dolar.valor);
}).fail(function() {
    console.log('Error al consumir la API!');
});

    $('.btnConvertir').click(function()
			{
				let Dolar 			= $('#txtDolar').val();
				let valorUFCasa = $('.txtValorUFCasa').val();
				let total = uf * valorUFCasa;
				$('.txtTotalPesos').val(total);
				return false;				
			})
		}