const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
        .then(reposta => {
            return reposta.json();
    })
}

export const clienteService = {
    listaClientes
}