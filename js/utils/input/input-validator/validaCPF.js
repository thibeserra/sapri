/*
	Nome da função: validaCPF
    Objetivo: Validar C.P.F
    Retorno: booleano
    Autor: Thiago de Paula Beserra
*/
function validaCPF(id_element, cpfValue) {
		var regex = new RegExp(/^([0-9]{11})$/);

	    var somaPeso = 0;
	    var peso = 10;
	    var primeiroDigitoValido = 0;
	    var segundoDigitoValido = 0;

	    if(typeof(cpfValue) == "string") {
	    	var aux = cpfValue.replace(/[^0-9]/g, '');
	    }
	    if(typeof(cpfValue) == "object") {
	    	var aux = cpfValue.value.replace(/[^0-9]/g, '');
	    }
	     
	    /*Validando o primeiro digito verificador do CPF*/
	    for(i = 0; i < 9; i++) {
	    	console.log("soma " + i + ":" + aux[i] * peso);
	    	somaPeso+= aux[i] * peso;

	    	peso--;
	    }
	    primeiroDigitoValido = 11 - (somaPeso % 11);
	    	
	    if(primeiroDigitoValido > 9) {
	    	primeiroDigitoValido = 0;
	    }
	    console.log("Digito Verificador1: " + primeiroDigitoValido);
	    /*Fim Validação do primeiro digito verificador do CPF*/

	    /*Validando o segundo digito verificador do CPF*/
	    peso = 11;
	    somaPeso = 0;
	    for(i = 0; i < 9; i++) {
			console.log("soma " + i + ":" + aux[i] * peso);
			somaPeso+= aux[i] * peso;

			peso--;      		
	    }
	    somaPeso+= primeiroDigitoValido * peso;
	    segundoDigitoValido = 11 - (somaPeso % 11);

	    if(segundoDigitoValido > 9) {
	    	segundoDigitoValido = 0;
	    }

	    console.log("Digito Verificador2: " + segundoDigitoValido);
	    /*Fim Validação do segundo digito verificador do CPF*/

	    /*Validando 2 ultimos digitos do CPF informado com os 2 ultimos digitos retornados da Validacao*/
	    if(regex.test(aux) == true && aux[9] == primeiroDigitoValido && aux[10] == segundoDigitoValido) {
	    	//alterInputBorderColorValidate(id_element, 'SUCCESS');
	    	console.log('SUCESSO');

	    	return true;
	    } else {
	    	//alterInputBorderColorValidate(id_element, 'ERROR');
	    	console.log('ERROR');
	    	
	    	return false;
	    }
	    /*Fim Validacao 2 ultimos digitos do CPF informado com os 2 ultimos digitos retornados da Validacao*/
	}
