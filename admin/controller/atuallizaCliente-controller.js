import { clienteService } from '../services/cliente-service.js'
const pegaURL = new URL(window.location);
const id = pegaURL.searchParams.get('id');
const inputNome = document.querySelector('[data-nome]');
const inputemail = document.querySelector('[data-email]');

clienteService.detalheCliente(id).then(dados => {
    inputNome.value = dados.nome;
    inputemail.value = dados.email;
})