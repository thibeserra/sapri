/*
	Nome da função: alterInputBorderColorValidate
    Objetivo: Alterar cor da borda de input HTML (Azul | Vermelho)
    Retorno: void
    Autor: Thiago de Paula Beserra
*/
function alterInputBorderColorValidate(id_element, validationResult, cssValidInputClass, cssInvalidInputClass) {
	if(validationResult == false) {
		document.getElementById(id_element).className=cssInvalidInputClass;	
	}
	if(validationResult == true){
		document.getElementById(id_element).className=cssValidInputClass;		
	}
}
