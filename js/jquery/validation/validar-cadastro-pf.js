$(function(){
    $('#btCadastrarPF').click(function(e) {
        e.preventDefault();
        $('.erromsg').remove();
        validatePf();
    })

    $('#form-cadastrar-pf input').blur(function(){
        $('.erromsg').remove();
        validatePf();
    })
})

const validateCamposObrigatoriosMsgPf  = 'Preenchimento obrigatório!';
const validateFormatoInvalidoTelefonePf = 'Formato de telefone inválido!';
const validatePasswordMenorQue6Pf = 'A senha deve conter mais do que 6 caracteres!';
const validatePasswordMaiorQue16Pf = 'A senha deve conter menos do que 16 caracteres!';
const validatePasswordDiferenteRepeatPf = 'Ambas as senhas devem ser iguais';
const validateFormatoInvalidoNascimentoPf = 'Formato de data inválido!';
const validateFormatoInvalidoCpfPf = 'Formato de CPF inválido!';
const validateFormatoInvalidoEmailPf = 'Formato de E-mail inválido!';

const errorMsgPf = '<div class="erromsg"><span>  </span></div>';

function validatePf() {
    $('#form-cadastrar-pf input').each(function (e) {
        // if ($(this).hasClass('required')){  -- Nõo coloquei pois obrigava o preenchimento de todos os campos obrigatórios antes de preencher os opcionais por conta do .blur
        if ($(this).val() === ""){
            $(this).addClass('invalid');
            $(this).parent().after(errorMsgPf);
            $('.erromsg span').html(validateCamposObrigatoriosMsgPf);
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
                $(this).parent().after(errorMsgPf);
                $('.erromsg span').html(validateFormatoInvalidoTelefonePf);
                return false;
            } else {
                $(this).removeClass('invalid');
            }
        }

        if ($(this).hasClass('password')){
            if ($.trim($(this).val()).length < 4){
                $(this).addClass('invalid');
                $(this).focus();
                $(this).parent().after(errorMsgPf);
                $('.erromsg span').html(validatePasswordMenorQue6Pf);
                return false;
            } else {
                $(this).removeClass('invalid');
            }
        }

        if ($(this).hasClass('password')){
            if ($.trim($(this).val()).length > 16){
                $(this).addClass('invalid');
                $(this).focus();
                $(this).parent().after(errorMsgPf);
                $('.erromsg span').html(validatePasswordMaiorQue16Pf);
                return false;
            } else {
                $(this).removeClass('invalid');
            }
        }

        if ($(this).hasClass('password')){
            if ($.trim($(this).val).lenght < 6){
                $(this).addClass('invalid');
                $(this).focus();
                $(this).parent().after(errorMsgPf);
                $('.erromsg span').html(validatePasswordMenorQue6Pf);
                return false;
            } else {
                $(this).removeClass('invalid');
            }
        }

        if ($(this).hasClass('pj-rpassword')){
            if ($(this).val() != ($('.pf-password').val())){
                $(this).addClass('invalid');
                $(this).focus();
                $(this).parent().after(errorMsgPf);
                $('.erromsg span').html(validatePasswordDiferenteRepeatPf);
                return false;
            } else {
                $(this).removeClass('invalid');
            }
        }

        if($(this).hasClass('cpf')){
            const cnpj = new RegExp(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/)

            if (!cnpj.test($(this).val())){
                $(this).parent().addClass('invalid');
                $(this).focus();
                $(this).parent().after(errorMsgPf);
                $('.erromsg span').html(validateFormatoInvalidoCpfPf);
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
                $(this).parent().after(errorMsgPf);
                $('.erromsg span').html(validateFormatoInvalidoEmailPf);
                return false;
            } else {
                $(this).removeClass('invalid');
            }
        }
    })
}