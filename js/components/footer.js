export const footerComponent = () => `
<div class="container p-4">

    <section class="mb-4">
        <!-- Linkedin -->
        <a class="btn btn-primary btn-floating m-1" style="background-color: #0082ca" href="https://www.linkedin.com/in/matheus-martarello-gutstein-aa40a3206/" role="button"><i class="fab fa-linkedin-in"></i></a>
        <!-- Github -->
        <a class="btn btn-primary btn-floating m-1" style="background-color: #333333" href="https://github.com/m-artarello" role="button"><i class="fab fa-github"></i></a>
    </section>


    <section class="">
        <form action="">
        <div class="row d-flex justify-content-center">

            <div class="col-auto">
            <p class="pt-2">
                <strong>Receba novas ofertas diretamente no seu e-mail</strong>
            </p>
            </div>


            <div class="col-md-5 col-12">

                <div class="form-outline form-white">
                    <input type="text" id="formWhite" class="form-control" />
                    <label class="form-label" for="formWhite">Seu endereço de e-mail</label>
                    </div>
            </div>

                <div class="col-auto">
                    <button type="submit" class="btn btn-outline-light mb-4">
                        Assinar
                    </button>
                </div>
        </div>
        </form>
    </section>
    <section class="mb-4">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
        distinctio earum repellat quaerat voluptatibus placeat nam,
        commodi optio pariatur est quia magnam eum harum corrupti dicta,
        aliquam sequi voluptate quas.
        </p>
    </section>
</div>

<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
<a class="text-white" href="https://github.com/m-artarello">© 2022 Copyright: Matheus Martarello</a>
</div>
`;