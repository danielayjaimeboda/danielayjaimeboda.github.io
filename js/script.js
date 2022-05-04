var diaActual = new Date();
diaActual.setFullYear(2022, 5, 11);
diaActual.setHours(23);
diaActual.setMinutes(59);
diaActual.setSeconds(59);
diaActual.setMilliseconds(999);
var fechaLimite = diaActual.getTime();

function ObtenerFecha() {
	var fechaActual = new Date();
	var nMS = fechaLimite - fechaActual.getTime();
	var nD = Math.floor(nMS / (1000 * 60 * 60 * 24));
	var nH = Math.floor(nMS / (1000 * 60 * 60)) % 24;
	var nM = Math.floor(nMS / (1000 * 60)) % 60;
	var nS = Math.floor(nMS / 1000) % 60;
	if (nMS < 0) {
		$("#diaend").hide();
		$("#diaendfinal").show();
	} else {
		$("#diaend").show();
		$("#diaendfinal").hide();
		$(".dias").text(nD);
		$(".horas").text(nH);
		$(".minutos").text(nM);
		$(".segundos").text(nS);
	}
}

function Inicio(id) {
	id.fadeOut('fast');
	$('#tabla').delay(500).fadeIn('fast');
	$("#logo").delay(500).fadeIn('slow');
	$('.econio').delay(600).fadeIn('slow');
	$('.decorativa').delay(700).fadeIn('slow');
}

function OcultarInicio() {
	$("#logo").fadeOut('fast');
	$("#date").fadeOut('fast');
	$("#hostage").fadeOut('fast');
	$("#code").fadeOut('fast');
	$("#galery").fadeOut('fast');
	$("#gifts").fadeOut('fast');
	$("#location").fadeOut('fast');
	$('#tabla').fadeOut('fast');
	$('.decorativa').fadeOut('fast');
}

function Copiar(id) {
	var copyText = document.getElementById(id);
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText.value);

	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copied: " + copyText.value;
}

function Siguiente(actualPestana) {

	switch (actualPestana) {
		case 'ubicacion':
			$('#locate').slideUp(600, function () {
				$('#day').slideDown(600);
			});
			break;
		case 'fecha':
			$('#day').slideUp(600, function () {
				$('#dress').slideDown(600);
			});
			break;
		case 'codigo':
			$('#dress').slideUp(600, function () {
				$('#giftsTable').slideDown(600);
			});
			break;
		case 'regalos':
			$('#giftsTable').slideUp(600, function () {
				$('#foticos').slideDown(600);
			});
			break;
		case 'galeria':
			$('#foticos').slideUp(600, function () {
				$('#locate').slideDown(600);
			});
			break;
	}

}

$(document).ready(function () {
	var timer_rt = window.setInterval("ObtenerFecha()", 1000);
	$("#logo").first().fadeIn(1200);
	$('.econio').delay(1000).fadeIn(1000);
	$("#tab").fadeIn(1200);
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})

	$("#location").click(function () {
		OcultarInicio();
		$('#locate').delay(500).fadeIn('slow');
	});

	$("#date").click(function () {
		OcultarInicio();
		$('#day').delay(500).fadeIn('slow');
	});

	$("#code").click(function () {
		OcultarInicio();
		$('#dress').delay(500).fadeIn('slow');
	});

	$("#galery").click(function () {
		OcultarInicio();
		$('#foticos').delay(500).fadeIn('slow');
	});

	$("#gifts").click(function () {
		OcultarInicio();
		$('#giftsTable').delay(500).fadeIn('slow');
	});

	$("#atras").click(function () {
		Inicio($("#locate"))
	});

	console.log("ready!");
});
