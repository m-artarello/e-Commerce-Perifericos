export const headerComponent = () => `
<nav class="navbar fixed-top navbar-expand-lg navbar-light nav-settings">
    <div class="container-fluid">
        <div class="d-flex">
        <!-- Logo -->
            <a class="navbar-brand mt-2 mt-lg-0" href="index.html">
                <img class="logo-settings img-fluid" src="/img/logo.png" alt="logo">
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                <li class="nav-item ">
                    <a class="nav-link" href="index.html"><h3>MPeripherals</h3></a>
                </li>
            </ul>
        </div>
        <!-- Logo -->

        <!-- Input de busca de produtos -->
        <div class="navbar-nav flex-row d-none d-md-flex width-280px ">
            <form class="input-group my-auto d-none d-sm-flex align-items-center">
                <input autocomplete="off" type="search" class="form-control form-settings" id="input-busca" placeholder="Busque por um produto específico" style="min-width: 125px;"/>
                <button class="search-settings align-items-center text-center" id="buscar">
                    <span class="input-group-text border-0 d-none d-lg-flex align-items-center justify-content-center">
                        <i class="fas fa-search icon-color" id="search"></i>
                    </span>
                </button>
        </div>
    
    

    <!-- Login, cadastrar e carrinho -->
        <ul class="navbar-nav flex-row">

            <button type="button" class="btn btn-outline-primary btn-entrar" data-mdb-ripple-color="dark" data-mdb-toggle="modal" data-mdb-target="#loginModal">Entrar</button>

            <button type="button" class="btn btn-outline-primary btn-cadastrar" data-mdb-ripple-color="dark" data-mdb-toggle="modal" data-mdb-target="#cadastroModal">Cadastre-se já!</button>


            <li class="nav-item me-3 me-lg-1">
                <a class="nav-link text-center" href="#">
                <span class=""><i class="fas fa-shopping-bag fa-lg icon-color icon-settings align-items-center"></i></span>
                <span class="badge rounded-pill badge-notification bg-danger">2</span>
                </a>
            </li>


        </ul>
    <!-- Login, cadastrar e carrinho -->
    </div>
</nav>
`;