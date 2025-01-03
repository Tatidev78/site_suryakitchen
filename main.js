$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000');

    // Configuração de validação do formulário
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            itemInteresse: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome completo"
            },
            email: {
                required: "Por favor, insira seu e-mail",
                email: "Por favor, insira um endereço de e-mail válido"
            },
            telefone: {
                required: "Por favor, insira seu telefone."
            },
            itemInteresse:{
                required: "Por favor, selecione um item"
            }
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    // Evento de clique para os botões da lista de produtos
    $('.interesse-btn').click(function() {
        const destino = $('#formulario');
        const nomeItem = $(this).parent().find('h3').text();

        // Corrigindo o seletor e atribuição do valor
        $('#item-interesse').val(nomeItem);

        // Removendo caracteres não numéricos de campos específicos
        $('#telefone').on('input', function() {
            this.value = this.value.replace(/\D/g, '');
        });

        // Scroll suave até o destino
        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });

});

