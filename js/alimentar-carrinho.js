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
    } else {
      badgeCarrinho.innerText = 0;
    }
  
  if (badgeCarrinho.innerText > 0){ 
        adicionarEsqueletoCarrinho();
        let listaItensElement = document.getElementById('lista-itens');
        adicionarItensCarrinho(listaItensElement);
        adicionarEventoExcluirProduto();
        adicionarEventoAlterarQuantidade();
        setarSubtotal();
        setarTotal()
        let totalItens = document.getElementById('total-itens')
        totalItens.innerText = '(' +getProdutos().length + ' itens' + ')'
    } else {
        let carrinhoEsqueleto = document.querySelector('.carrinho-esqueleto');
        if(carrinhoEsqueleto != null){
          carrinhoEsqueleto.remove();
          let section = document.getElementById('section-carrinho')
          section.innerHTML = imgVazioComponent();
        }
    }
}

function setarTotal(){
  let valorTotal = calcularTotal();

  // console.log(valorSubtotal);
  let total = document.getElementById("total")
  valorTotal = valorTotal.toFixed(2);
  total.innerText = "R$ " + valorTotal
}

function calcularTotal() {
  valorTotal = calcularSubtotal();
  let checkFreteExpresso = document.getElementById("expresso")
  
  if (checkFreteExpresso.checked == true){
    valorTotal += 14.99;
  } 

  return valorTotal;
}

function setarSubtotal(){
    let valorSubtotal = calcularSubtotal();

    console.log(valorSubtotal);
    let subtotal = document.getElementById("valor-subtotal")
    valorSubtotal = valorSubtotal.toFixed(2);
    subtotal.innerText = "R$ " + valorSubtotal
}

function calcularSubtotal(){
    let produtos = getProdutos();
    let valorSubtotal = 0;

    produtos.forEach(produto => {
      var valorFormatado = produto.preco.replace(/[^\d,]/g, '');
      var valorFormatado = valorFormatado.replace(",", ".")
      valorSubtotal += valorFormatado * produto.quantidade;
    })

    return valorSubtotal;
}

function setProdutos(produtos) {
  sessionStorage.setItem("produtos", JSON.stringify(produtos));
}

function ajustarQuantidadeSessionStorage(){
    let produtos = getProdutos();

    produtos.forEach(produto => {

      let produtoId = "produto-" + produto.produtoId.replace(/[^\d]/g, '');
      let QtdId = "produtoQtd-"+ produto.produtoId.replace(/[^\d]/g, '');

      let produtoElement = document.getElementById(produtoId)
      console.log(produtoElement);
      let qtd = produtoElement.querySelector("#"+QtdId);

      produto.quantidade = qtd.innerText;
    })

    setProdutos(produtos);
}

function aumentarQuantidade(element){
  let divPai = element.parentElement;
  let qtd = divPai.querySelector('.produto-qtd');
  let qtdAtual = 0
  qtdAtual = qtd.innerText * 1;
  qtd.innerText = (qtdAtual+1)
  ajustarQuantidadeSessionStorage();
  setarSubtotal()
  setarTotal()
  
}

function diminuirQuantidade(element){

  let divPai = element.parentElement;
  let qtd = divPai.querySelector('.produto-qtd');
  let qtdAtual = 0
  qtdAtual = qtd.innerText * 1;

  if (qtdAtual === 1){
    let produto = divPai.parentElement.id;
    console.log(produto.substring(produto.length, produto.length));
    excluirProduto((produto.substring(produto.length -1, produto.length)));
  } else{
    qtd.innerText = (qtdAtual-1)
  }

  ajustarQuantidadeSessionStorage();
  setarSubtotal()
  setarTotal()
}

function adicionarEventoAlterarQuantidade(){
  document.querySelector('.sum').addEventListener('click', (e) => {
  e.preventDefault();
  })

  document.querySelectorAll(".sum").forEach( function(button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      const el = event.target.parentElement
      console.log(el);
      aumentarQuantidade(el);
    });
  });

  document.querySelectorAll(".subtract").forEach( function(button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      const el = event.target.parentElement
      console.log(el);
      diminuirQuantidade(el);
    });
  });   
}

function adicionarEsqueletoCarrinho(){
    let imgVazio = document.getElementById('img-vazio');
    if (imgVazio != null){
      imgVazio.remove()
    }
    let section = document.getElementById('section-carrinho')
    section.innerHTML = carrinhoComponent();
}

function excluirProduto(id){
    document.getElementById('produto-'+id).remove();
    let produtos = getProdutos();
    produtos.splice((id - 1), 1);
    sessionStorage.setItem("produtos", JSON.stringify(produtos));
    badgeCarrinho.innerText -= 1;
    validarCarrinhoVazio();
}

function adicionarEventoExcluirProduto(){
    document.querySelectorAll(".btn-excluir-produto").forEach( function(button) {
      button.addEventListener("click", function(event) {
        event.preventDefault();
        const el = event.target
        const id = el.id;
        excluirProduto(id);
      });
    });  
}

function adicionarItensCarrinho(listaItensElement){
    let produtos = getProdutos();

    // console.log(produtos);

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
          // console.log('Elemento: '+ qtd)
          // console.log('Qtd: '+ produto.quantidade)

          nome.innerText = produto.nome;
          preco.innerText = produto.preco;
          img.src = produto.imgSrc;
          qtd.innerText = produto.quantidade;
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

    // console.log(produtos);

    return produtos;
}


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
                    <a href="" class="sum" id="btn-add-`+id+`"><i class="fa fa-plus" style="font-size: .8rem;"></i></a>  
                    <p class="mx-2 mb-0 detalhes-produtos-carrinho produto-qtd" id="produtoQtd-`+id+`"></p>
                    <a href="" class="subtract" id="btn-sub-`+id+`"><i class="fa fa-minus" style="font-size: .8rem;"></i></a>
                  </div>
                  <a href="" class="btn-excluir-produto"><i id="`+id+`" class="fas fa-trash-alt produtos-carrinho"></i></a>
                </li>
`
const imgVazioComponent = () => `
<div class="w-100 h-100 d-flex align-items-center justify-content-center text-center section-carrinho" id="img-vazio">
  <div>
    <div class="">
      <h4 class="" id="teste">Seu carrinho ainda está vazio :(</h4>
      <img src="/img/carrinho-vazio.png" alt="" class="w-50 h-50 mt-5">
    </div>
    
    <a href="index.html"><button type="button" class="btn btn-outline-primary btn-cadastrar w-auto mt-5" data-mdb-ripple-color="dark" >Voltar para loja</button></a>
  </div>
</div>
`
const carrinhoComponent = () => `
<div class="text-center p-4 carrinho-esqueleto">
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
              <div class="d-flex">
                  <h6 class="fw-bold mb-0 title-produtos-carrinho carrinho-resumo-texto">Subtotal</h6>
                  <h6 class="fw-bold mb-0 ms-1 title-produtos-carrinho carrinho-resumo-texto" id="total-itens">(X itens)</h6>
              </div>      
              
                <h6 class="title-produtos-carrinho fw-bold carrinho-resumo-texto"><b id="valor-subtotal">R$ xx,xx</b></h6>
              </div>

                <hr class="mx-3 my-3 hr hr-blurry w-auto divisor-color" />

                <div class="d-flex justify-content-between w-100">
                  <div class="text-start w-100">
                    <p class="carrinho-resumo-texto mb-0">Frete</p>
                    <div class="d-flex w-100 me-0">
                      <div class="col-6">
                        <input type="radio" id="gratis" name="genero" value="PADRAO" class="ms-3" checked onchange="setarTotal()">
                        <label for="gratis" class="carrinho-resumo-texto">Padrão</label>
                      </div>
                      <p class="mb-0 col-6 text-end carrinho-resumo-texto">Grátis</p>
                    </div>

                    <div class="d-flex w-100 me-0">
                      <div class="col-6">
                        <input type="radio" id="expresso" name="genero" value="EXPRESSO" class="ms-3" onchange="setarTotal()">
                        <label for="expresso" class="carrinho-resumo-texto">Expresso</label>
                      </div>
                      <p class="col-6 mb-0 text-end carrinho-resumo-texto">R$ 14,99</p>
                    </div>
                  </div>
                </div>

                <hr class="mx-3 my-3 hr hr-blurry w-auto divisor-color" />
                

                <div class="d-flex justify-content-between">
                  <h6 class="fw-bold mb-0 title-produtos-carrinho carrinho-resumo-texto total-carrinho">Total</h6>
                  <h6 class="title-produtos-carrinho fw-bold carrinho-resumo-texto total-carrinho"><b id="total">R$ xx,xx</b></h6>
                </div>

                <button type="button" class="btn btn-outline-primary btn-cadastrar w-auto mt-4" data-mdb-ripple-color="dark"  data-mdb-toggle="modal" data-mdb-target="#parcelasModal">Continuar</button>
              </div>
            </div>
          </div>

`