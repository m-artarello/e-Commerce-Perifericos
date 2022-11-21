const btn = document.querySelector('#btCadastrarPJ');
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        getDadosUsuario();
});


function setLocalStorage(user) {
    localStorage.setItem('user-data-pj', JSON.stringify(user));


}

function getDadosUsuario() {

    var form = document.querySelector('#form-cadastrar-pj')
    
    var user ={
        name: form.querySelector('#pj-nome').value,
        cnpj: form.querySelector('#pj-cnpj').value,
        email: form.querySelector('#pj-email').value,
        telefone: form.querySelector('#pj-telefone').value,
        cep: form.querySelector('#pj-cep').value,
        municipio: form.querySelector('#pj-municipio').value,
        uf: form.querySelector('#pj-uf').value,
        bairro: form.querySelector('#pj-bairro').value,
        logradouro: form.querySelector('#pj-logradouro').value,
        numero: form.querySelector('#pj-numero').value,
        complemento: form.querySelector('#pj-complemento').value,
    }

    setLocalStorage(user);
    
}