const btnPf = document.querySelector('#btCadastrarPF');
    btnPf.addEventListener('click', function (e) {
        e.preventDefault();
        getDadosUsuarioPf();
});


function setLocalStoragePf(user) {
    localStorage.setItem('user-data-pf', JSON.stringify(user));


}

function getDadosUsuarioPf() {

    var form = document.querySelector('#form-cadastrar-pf')
    
    var user ={
        name: form.querySelector('#pf-nome').value,
        cpf: form.querySelector('#pf-cpf').value,
        nascimento: form.querySelector('#pf-nascimento').value,
        email: form.querySelector('#pf-email').value,
        genero: form.querySelector('input[name="genero"]:checked').value,
        telefone: form.querySelector('#pf-tel').value,
        cep: form.querySelector('#pf-cep').value,
        municipio: form.querySelector('#pf-municipio').value,
        uf: form.querySelector('#pf-uf').value,
        bairro: form.querySelector('#pf-bairro').value,
        logradouro: form.querySelector('#pf-logradouro').value,
        numero: form.querySelector('#pf-numero').value,
        complemento: form.querySelector('#pf-complemento').value,
    }

    setLocalStoragePf(user);
    
}