import { clienteService } from '../services/cliente-service.js'

(async () => {
    const pegaURL = new URL(window.location);
    const id = pegaURL.searchParams.get('id');
    const inputNome = document.querySelector('[data-nome]');
    const inputemail = document.querySelector('[data-email]');

    const dados = await clienteService.detalheCliente(id)
        inputNome.value = dados.nome;
        inputemail.value = dados.email;
    
    const formulario = document.querySelector('[data-form]');
    
    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault()
        await clienteService.atualizarCliente(id, inputNome.value, inputemail.value)
        window.location.href = "../telas/edicao_concluida.html"})
})()