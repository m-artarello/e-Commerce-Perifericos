let cart = [];
let carrinho = document.getElementById('carrinho')

// export function getCarrinho(){
//     return cart;
// }

function gravarCarrinhoSessionStorage(){
    sessionStorage.setItem("produtos", JSON.stringify(cart));
}

function adicionarItemCarrinho(produtoId){
    if (sessionStorage.hasOwnProperty("produtos")) {
        cart = JSON.parse(sessionStorage.getItem("produtos"))
    }

    let produto = getDadosDoProduto(produtoId);
    if (produto != null || produto != undefined){
        cart.push(produto);   
    }
    let badgeCarrinho = document.getElementById('badgeCarrinho');

    badgeCarrinho.innerText = cart.length;

    gravarCarrinhoSessionStorage();
    console.log(cart);
}

function getDadosDoProduto (produtoId){
    let produtoElement = document.getElementById(produtoId);
    
    let nome = produtoElement.querySelector('.produto-title').innerText;
    let marca = produtoElement.querySelector('.produto-brand').innerText;
    let preco = produtoElement.querySelector('.produto-price').innerText;
    let imgSrc = produtoElement.querySelector('.produto-img').src;

    let produto = {};

    if (cart.some(produto => produto.produtoId === produtoId)){
        let pdt = cart.find(produto => produto.produtoId === produtoId);
        pdt.quantidade += 1;
    } else {
        produto.quantidade = 1;
        produto.produtoId = produtoId;
        produto.nome = nome;
        produto.marca = marca;
        produto.preco = preco;
        produto.imgSrc = imgSrc;
        return produto;
    }
    
    

    
}
