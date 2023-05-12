function verificaForcaSenha() 
{
	var numeros = /([0-9])/;
	var alfabetoa = /([a-z])/;
	var alfabetoA = /([A-Z])/;
	var chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;


	if($('#confirmPassword').val().length<6) 
	{
		$('#password-status').html("<span style='color:red'>Fraco, insira no mínimo 6 caracteres</span>");
	} else {  	
		if($('#confirmPassword').val().match(numeros) && $('#confirmPassword').val().match(alfabetoa) && $('#confirmPassword').val().match(alfabetoA) && $('#confirmPassword').val().match(chEspeciais))
		{            
			$('#password-status').html("<span style='color:green'><b>Forte</b></span>");
		} else {
			$('#password-status').html("<span style='color:orange'>Médio, insira caracteres maiúsculos e especiais</span>");
		}
	}
}

// function conPassword()
// {
//     var senha1 = document.getElementById('confirmPassword');
//     var senha2 = document.getElementById('pass');
		
//     if (senha1 == senha2)
//     {
//         $('#confirm-status').html("<span style='color:#ff0000'>Senhas Iguais</span>");
//     }
//     else
//     {
//         $('#confirm-status').html("<span style='color:#ff0000'>Senhas Diferentes</span>");
//     }
// }

