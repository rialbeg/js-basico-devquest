
let valorHospedagem;
let mensagemConfirmacao;
let mensagemRecusa;

mensagemConfirmacao = "Ótimo! Nós temos as melhores camas de toda a região!";
mensagemRecusa = "Que pena! Você parecia ser uma pessoa mais legal";

valorHospedagem = confirm(`Seja bem vindo(a), aventureiro(a)! 
Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?`);


mensagem = valorHospedagem ? mensagemConfirmacao : mensagemRecusa;

alert(mensagem);
