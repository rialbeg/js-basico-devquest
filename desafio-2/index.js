let boletoPago = false;

let mensagem = boletoPago ? "O boleto está pago" : "O boleto não está pago";

function statusPagamento()
{
    alert(mensagem);
}

function pagarBoleto()
{
    boletoPago = true;
    mensagem = boletoPago ? "O boleto está pago" : "O boleto não está pago";
    alert(mensagem);
}
