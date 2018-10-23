	/*  Wizard */
	jQuery(function ($) {
		"use strict";
		$('form#wrapped').attr('action', 'questionare_send.php');
		$("#wizard_container").wizard({
			stepsWrapper: "#wrapped",
			submit: ".submit",
			beforeSelect: function (event, state) {
				if ($('input#website').val().length != 0) {
					return false;
				}
				if (!state.isMovingForward)
					return true;
				var inputs = $(this).wizard('state').step.find(':input');

				return !inputs.length || !!inputs.valid();
			}
		}).validate({
			errorPlacement: function (error, element) {
				if (element.is(':radio') || element.is(':checkbox')) {
					error.insertBefore(element.next());
				} else {
					error.insertAfter(element);
				}
			}
		});
		//  progress bar
		$("#progressbar").progressbar();
		$("#wizard_container").wizard({
			afterSelect: function (event, state) {
				$("#progressbar").progressbar("value", state.percentComplete);
				$(".location:visible").text((state.stepsComplete + 1) + "/" + (1 + state.stepsPossible));
			}
		});
		$(".location:visible").text(1 + "/" + $("#wizard_container .step").length);

		$.validator.addMethod( "isCorrect", function( value, element ) {
			var answer = $("h3", $(element).closest(".step")).data("answer");
			var response = $("input[name='" + element.name + "']:checked").val();
			return answer == response;
		} );

		var form = $("form#wrapped");
		form.validate({rules: {
				one: {
					isCorrect: true
				}
				, two: {
					isCorrect: true
				}
				, three: {
					isCorrect: true
				}
				, four: {
					isCorrect: true
				}
				, five: {
					isCorrect: true
				}
				, six: {
					isCorrect: true
				}
				, seven: {
					isCorrect: true
				}
				, eight: {
					isCorrect: true
				}
				, nine: {
					isCorrect: true
				}
				, ten: {
					isCorrect: true
				}
				, eleven: {
					isCorrect: true
				}
				, twelve: {
					isCorrect: true
				}
				, thirteen: {
					isCorrect: true
				}
				, fourteen: {
					isCorrect: true
				}
				, fifteen: {
					isCorrect: true
				}
				, sixteen: {
					isCorrect: true
				}
				, seventeen: {
					isCorrect: true
				}
				, eighteen: {
					isCorrect: true
				}
				, nineteen: {
					isCorrect: true
				}
				, twenty: {
					isCorrect: true
				}
				, twentyone: {
					isCorrect: true
				}
				, twentytwo: {
					isCorrect: true
				}
				, twentythree: {
					isCorrect: true
				}
				, twentyfour: {
					isCorrect: true
				}
				, twentyfive: {
					isCorrect: true
				}
				, twentysix: {
					isCorrect: true
				}
				, twentyseven: {
					isCorrect: true
				}
				, twentyeight: {
					isCorrect: true
				}
				, twentynine: {
					isCorrect: true
				}
				, thirty: {
					isCorrect: true
				}
				, thirtyone: {
					isCorrect: true
				}
				, thirtytwo: {
					isCorrect: true
				}
				, thirtythree: {
					isCorrect: true
				}
				, thirtyfour: {
					isCorrect: true
				}
				, thirtyfive: {
					isCorrect: true
				}
				, thirtysix: {
					isCorrect: true
				}
				, thirtyseven: {
					isCorrect: true
				}
				, thirtyeight: {
					isCorrect: true
				}
				, thirtynine: {
					isCorrect: true
				}
				, forty: {
					isCorrect: true
				}
				, fortyone: {
					isCorrect: true
				}
				, fortytwo: {
					isCorrect: true
				}
				, fortythree: {
					isCorrect: true
				}
			}
			, messages: {
				one: {
					isCorrect: "Incorrect"
				}
				, two: {
					isCorrect: "Incorrect"
				}
				, three: {
					isCorrect: "Incorrect"
				}
				, four: {
					isCorrect: "Incorrect"
				}
				, five: {
					isCorrect: "Incorrect"
				}
				, six: {
					isCorrect: "Incorrect"
				}
				, seven: {
					isCorrect: "Incorrect"
				}
				, eight: {
					isCorrect: "Incorrect"
				}
				, nine: {
					isCorrect: "Incorrect"
				}
				, ten: {
					isCorrect: "Incorrect"
				}
				, eleven: {
					isCorrect: "Incorrect"
				}
				, twelve: {
					isCorrect: "Incorrect"
				}
				, thirteen: {
					isCorrect: "Incorrect"
				}
				, fourteen: {
					isCorrect: "Incorrect"
				}
				, fifteen: {
					isCorrect: "Incorrect"
				}
				, sixteen: {
					isCorrect: "Incorrect"
				}
				, seventeen: {
					isCorrect: "Incorrect"
				}
				, eighteen: {
					isCorrect: "Incorrect"
				}
				, nineteen: {
					isCorrect: "Incorrect"
				}
				, twenty: {
					isCorrect: "Incorrect"
				}
				, twentyone: {
					isCorrect: "Incorrect"
				}
				, twentytwo: {
					isCorrect: "Incorrect"
				}
				, twentythree: {
					isCorrect: "Incorrect"
				}
				, twentyfour: {
					isCorrect: "Incorrect"
				}
				, twentyfive: {
					isCorrect: "Incorrect"
				}
				, twentysix: {
					isCorrect: "Incorrect"
				}
				, twentyseven: {
					isCorrect: "Incorrect"
				}
				, twentyeight: {
					isCorrect: "Incorrect"
				}
				, twentynine: {
					isCorrect: "Incorrect"
				}
				, thirty: {
					isCorrect: "Incorrect"
				}
				, thirtyone: {
					isCorrect: "Incorrect"
				}
				, thirtytwo: {
					isCorrect: "Incorrect"
				}
				, thirtythree: {
					isCorrect: "Incorrect"
				}
				, thirtyfour: {
					isCorrect: "Incorrect"
				}
				, thirtyfive: {
					isCorrect: "Incorrect"
				}
				, thirtysix: {
					isCorrect: "Incorrect"
				}
				, thirtyseven: {
					isCorrect: "Incorrect"
				}
				, thirtyeight: {
					isCorrect: "Incorrect"
				}
				, thirtynine: {
					isCorrect: "Incorrect"
				}
				, forty: {
					isCorrect: "Incorrect"
				}
				, fortyone: {
					isCorrect: "Incorrect"
				}
				, fortytwo: {
					isCorrect: "Incorrect"
				}
				, fortythree: {
					isCorrect: "Incorrect"
				}
			}
		});

		/* Submit loader mask */
		$('form').on('submit',function() {
			if (form.valid()) {
				$("#loader_form").fadeIn();
			}
		});
	});