$(function(){
    $('#btCadastrarPJ').click(function(e) {
        e.preventDefault();
        $('.erromsg').remove();
        validate();
    })

    $('#form-cadastrar-pj input').blur(function(){
        $('.erromsg').remove();
        validate();
    })
})

const validateCamposObrigatoriosMsg = 'Preenchimento obrigatório!';
const validateFormatoInvalidoTelefone = 'Formato de telefone inválido!';
const validatePasswordMenorQue6 = 'A senha deve conter mais do que 6 caracteres!';
const validatePasswordMaiorQue16 = 'A senha deve conter menos do que 16 caracteres!';
const validatePasswordDiferenteRepeat = 'Ambas as senhas devem ser iguais';
const validateFormatoInvalidoNascimento = 'Formato de data inválido!';
const validateFormatoInvalidoCnpj = 'Formato de CNPJ inválido!';
const validateFormatoInvalidoEmail = 'Formato de E-mail inválido!';

const errorMsg = '<div class="erromsg"><span>  </span></div>';

function validate() {
    $('#form-cadastrar-pj input').each(function (e) {
        // if ($(this).hasClass('required')){  -- Nõo coloquei pois obrigava o preenchimento de todos os campos obrigatórios antes de preencher os opcionais por conta do .blur
        if ($(this).val() === ""){
            $(this).addClass('invalid');
            $(this).parent().after(errorMsg);
            $('.erromsg span').html(validateCamposObrigatoriosMsg);
            $(this).focus();
            return false;
        } else {
            $(this).removeClass('invalid');
        }
        //}
        

        if ($(this).hasClass('tel')){
            const tel = new RegExp(/^(\(?[0-9]{2}\)?)\s?[0-9]{4,5}(-?)[0-9]{4}$/);
            // const tel = new RegExp(/^(\(?[0−9]{2}\)?)\s?[0-9]{4,5}(-?)[0-9]{4}$/);
            if (!tel.test($(this).val())){
                $(this).parent().addClass('invalid');
                $(this).focus();
                $(this).parent().after(errorMsg);
                $('.erromsg span').html(validateFormatoInvalidoTelefone);
                return false;
            } else {
                $(this).removeClass('invalid');
            }
        }

        if ($(this).hasClass('password')){
            if ($.trim($(this).val()).length < 4){
                $(this).addClass('invalid');
                $(this).focus();
                $(this).parent().after(errorMsg);
                $('.erromsg span').html(validatePasswordMenorQue6);
                return false;
            } else {
                $(this).removeClass('invalid');
            }
        }

        if ($(this).hasClass('password')){
            if ($.trim($(this).val()).length > 16){
                $(this).addClass('invalid');
                $(this).focus();
                $(this).parent().after(errorMsg);
                $('.erromsg span').html(validatePasswordMaiorQue16);
                return false;
            } else {
                $(this).removeClass('invalid');
            }
        }

        if ($(this).hasClass('password')){
            if ($.trim($(this).val).lenght < 6){
                $(this).addClass('invalid');
                $(this).focus();
                $(this).parent().after(errorMsg);
                $('.erromsg span').html(validatePasswordMenorQue6);
                return false;
            } else {
                $(this).removeClass('invalid');
            }
        }

        if ($(this).hasClass('pj-rpassword')){
            if ($(this).val() != ($('#pj-rpassword').val())){
                $(this).addClass('invalid');
                $(this).focus();
                $(this).parent().after(errorMsg);
                $('.erromsg span').html(validatePasswordDiferenteRepeat);
                return false;
            } else {
                $(this).removeClass('invalid');
            }
        }

        if($(this).hasClass('cnpj')){
            const cnpj = new RegExp(/^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}$/)

            if (!cnpj.test($(this).val())){
                $(this).parent().addClass('invalid');
                $(this).focus();
                $(this).parent().after(errorMsg);
                $('.erromsg span').html(validateFormatoInvalidoCnpj);
                return false;
            } else {
                $(this).removeClass('invalid');
            }
        }

        if($(this).hasClass('email')){
            const email = new RegExp(/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)
            if (!email.test($(this).val())) {
                $(this).parent().addClass('invalid');
                $(this).focus();
                $(this).parent().after(errorMsg);
                $('.erromsg span').html(validateFormatoInvalidoEmail);
                return false;
            } else {
                $(this).removeClass('invalid');
            }
        }
    })
}