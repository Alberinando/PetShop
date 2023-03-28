const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
        .then(reposta => {
            return reposta.json();
    })
}

const criaCliente = (nome,email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    }).then(resposta => { return resposta.body });
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

const detalheCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(reposta => {
        return reposta.json();
    })
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalheCliente
}