const itemComponent = (id) => `
<li class="list-group-item d-flex justify-content-between align-items-center modal-list" id="produto-`+id+`"> 
                  <div class="d-flex align-items-center">
                    <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" id="produtoImg-`+id+`" style="width: 105px; height: 105px" />
                    <div class="ms-3 h-100 ">
                      <p class="fw-bold mb-0 title-produtos-carrinho" id="produtoNome-`+id+`">Nome do produto</p>
                      <p class="my-1 text-muted detalhes-produtos-carrinho">Ref.: #123123545</p>
                      <p class="fw-bold mb-0 title-produtos-carrinho" id="produtoPreco-`+id+`">R$ xx,xx</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="me-1 mb-0 detalhes-produtos-carrinho">Qtd: </p>
                    <form action="#" class="form">
                      <div class="form-outline input-color div-input quantidade-produto">
                        <input type="number" class="form-control input-color required" id="produtoQtd-`+id+`"/>
                      </div>
                    </form>
                  </div>
                  <a href=""><i class="fas fa-trash-alt produtos-carrinho"></i></a>
                </li>
`
const carrinhoComponent = () => `
<div class="text-center p-4">
            <h4 class="">Carrinho</h4>
          </div>  
          <div class="d-flex justify-content-between px-5 pb-5">
            <div class="col-7">
              <h5 class="w-100 text-center my-3">Produtos</h5>
              <ul class="list-group" id="lista-itens">
                
              </ul>
            </div>


            
            <div class="col-4 justify-content-center text-center ms-3">
              <h5 class="my-3">Resumo</h5> 
              <div class="modal-list align-items-center h-75 w-100 p-4">
                <div class="d-flex justify-content-between">
                  <h6 class="fw-bold mb-0 title-produtos-carrinho carrinho-resumo-texto">Subtotal (X itens)</h6>
                  <h6 class="title-produtos-carrinho fw-bold carrinho-resumo-texto"><b>R$ xx,xx</b></h6>
                </div>

                <hr class="mx-3 my-3 hr hr-blurry w-auto divisor-color" />

                <div class="d-flex justify-content-between w-100">
                  <div class="text-start w-100">
                    <p class="carrinho-resumo-texto mb-0">Frete</p>
                    <div class="d-flex w-100 me-0">
                      <div class="col-6">
                        <input type="radio" id="masc" name="genero" value="PADRAO" class="ms-3">
                        <label for="masc" class="carrinho-resumo-texto">Padrão</label>
                      </div>
                      <p class="mb-0 col-6 text-end carrinho-resumo-texto">Grátis</p>
                    </div>

                    <div class="d-flex w-100 me-0">
                      <div class="col-6">
                        <input type="radio" id="fem" name="genero" value="EXPRESSO" class="ms-3">
                        <label for="fem" class="carrinho-resumo-texto">Expresso</label>
                      </div>
                      <p class="col-6 mb-0 text-end carrinho-resumo-texto">R$ 14,99</p>
                    </div>
                  </div>
                </div>

                <hr class="mx-3 my-3 hr hr-blurry w-auto divisor-color" />
                

                <div class="d-flex justify-content-between">
                  <h6 class="fw-bold mb-0 title-produtos-carrinho carrinho-resumo-texto total-carrinho">Total</h6>
                  <h6 class="title-produtos-carrinho fw-bold carrinho-resumo-texto total-carrinho"><b>R$ xx,xx</b></h6>
                </div>

                <button type="button" class="btn btn-outline-primary btn-cadastrar w-auto mt-4" data-mdb-ripple-color="dark"  data-mdb-toggle="modal" data-mdb-target="#parcelasModal">Continuar</button>
              </div>
            </div>
          </div>

`

var carrinho = 0;
var badgeCarrinho = 0;


window.onload = function () {
    validarCarrinhoVazio()
}

function validarCarrinhoVazio() { //Verifica se o carrinho possui ao menos um item. Se sim, adiciona o esqueleto do carrinho e os itens.
    carrinho = document.getElementById('carrinho')
    badgeCarrinho = document.getElementById('badgeCarrinho');
    
    if (getProdutos() != null || getProdutos() != undefined){
        badgeCarrinho.innerText = getProdutos().length;
    }
  
  if (badgeCarrinho.innerText > 0){ 
        adicionarEsqueletoCarrinho();
        let listaItensElement = document.getElementById('lista-itens');
        adicionarItensCarrinho(listaItensElement);
    } else {
        return;
    }
}

function adicionarEsqueletoCarrinho(){
    document.getElementById('img-vazio').remove();
    let section = document.getElementById('section-carrinho')
    section.innerHTML = carrinhoComponent();
}

function adicionarItensCarrinho(listaItensElement){
    let produtos = getProdutos();

    console.log(produtos);

    let itemId = 0

    if (produtos != null || produtos != undefined){
      produtos.forEach(produto => {
          itemId += 1;
          listaItensElement.innerHTML += itemComponent(itemId);

          let item = document.getElementById('produto-' + itemId);

          let nome = item.querySelector('#produtoNome-'+ itemId);
          let preco = item.querySelector('#produtoPreco-' + itemId);
          let img = item.querySelector('#produtoImg-' + itemId);
          let qtd = item.querySelector('#produtoQtd-' + itemId);
          console.log('Elemento: '+ qtd)
          console.log('Qtd: '+ produto.quantidade)

          nome.innerText = produto.nome;
          preco.innerText = produto.preco;
          img.src = produto.imgSrc;
          qtd.value = produto.quantidade;
      })
    }
}

function getProdutos (){
    let produtos = [];

    if (sessionStorage.hasOwnProperty("produtos")) {
        JSON.parse(sessionStorage.getItem("produtos")).forEach(produto => {
            produtos.push(produto);
        });
    }

    console.log(produtos);

    return produtos;
}

