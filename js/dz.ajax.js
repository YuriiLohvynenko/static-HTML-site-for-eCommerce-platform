/**

	Abstract : Ajax Page Js File
	File : dz.ajax.js
	#CSS attributes: 
		.dzForm : Form class for ajax submission. 
		.dzFormMsg  : Div Class| Show Form validation error/success message on ajax form submission
		
	#Javascript Variable
	.dzRes : ajax request result variable
	.dzFormAction : Form action variable
	.dzFormData : Form serialize data variable

**/

/* Cookies Function */
function setCookie(cname, cvalue, exhours) {
	var d = new Date();
	d.setTime(d.getTime() + (30 * 60 * 1000)); /* 30 Minutes */
	var expires = "expires=" + d.toString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function deleteCookie(cname) {
	var d = new Date();
	d.setTime(d.getTime() + (1)); // 1/1000 second
	var expires = "expires=" + d.toString();
	document.cookie = cname + "=1;" + expires + ";path=/";
}
/* Cookies Function END */

function contactForm()
{
	window.verifyRecaptchaCallback = function (response) {
        $('input[data-recaptcha]').val(response).trigger('change');
    }

    window.expiredRecaptchaCallback = function () {
        $('input[data-recaptcha]').val("").trigger('change');
    }
	'use strict';
	var msgDiv;
	$(".dzForm").on('submit',function(e)
	{
		e.preventDefault();	//STOP default action
		$('.dzFormMsg').html('<div class="gen alert dz-alert alert-success">Submitting..</div>');
		var dzFormAction = $(this).attr('action');
		var dzFormData = $(this).serialize();
		
		$.ajax({
			method: "POST",
			url: dzFormAction,
			data: dzFormData,
			dataType: 'json',
			success: function(dzRes){
				if(dzRes.status == 1){
					msgDiv = '<div class="gen alert dz-alert alert-success">'+dzRes.msg+'</div>';
				}
				
				if(dzRes.status == 0){
					msgDiv = '<div class="err alert dz-alert alert-danger">'+dzRes.msg+'</div>';
				}
				$('.dzFormMsg').html(msgDiv);
				
				
				setTimeout(function(){
					$('.dzFormMsg .alert').hide(1000);
				}, 5000);
				
				$('.dzForm')[0].reset();
                grecaptcha.reset();
			}
		})
	});
	
	
	/* This function is for mail champ subscription START*/
	$(document).on('submit', ".dzSubscribe",function(e){
		e.preventDefault();	//STOP default action
		var thisForm = $(this);
		var dzFormAction = thisForm.attr('action');
		var dzFormData = thisForm.serialize();
		thisForm.addClass('dz-ajax-overlay');
		
		$.ajax({
			method: "POST",
			url: dzFormAction,
			data: dzFormData,
			dataType: 'json',
			success: function(dzRes) {
				thisForm.removeClass('dz-ajax-overlay');
				
				if(dzRes.status == 1){
					msgDiv = '<div class="gen alert dz-alert alert-success">'+dzRes.msg+'</div>';
					setCookie('prevent_subscription', 'true', 1);
				}
				if(dzRes.status == 0){
					msgDiv = '<div class="err alert dz-alert alert-danger">'+dzRes.msg+'</div>';
				}
				
				$('.dzSubscribeMsg').html(msgDiv);
				setTimeout(function(){
					$('.dzSubscribeMsg .alert').hide(0);
				}, 5000);
				
				$('.dzSubscribe')[0].reset();
			}
		}) 
	});
	
	/* This function is for mail champ subscription END*/
	
}

jQuery(document).ready(function() {
    'use strict';
	contactForm();
})