(function($){
    // globais
    var telas = $('#encontre .tela');
    $(telas).hide();
    var telasEnum = {
        regiao:     0,
        estado:     1,
        cidades:    2
    }
    var regSelecionada = '';
    var estadoSelecionado = '';
    var cidadeSelecioanda = '';
    var esteticistas = '';

    var currentTela = telasEnum.regiao;    
    fn_iniciarTelas();

    function fn_iniciarTelas(){
        $(telas[currentTela]).fadeIn(200);
    }

    function fn_voltar(){
        var nextTela = currentTela - 1;
        fn_trocarTela(nextTela);
    }

    function fn_trocarTela(tela){
        $(telas[currentTela]).fadeOut(400, function(){
            $(telas[tela]).fadeIn(400);
        });
        currentTela = tela;
    }

    function fn_carregar_estados(reg){
        if(!reg)
            throw ("Região necessaria")

        regSelecionada = profissionais[reg];
        console.log(regSelecionada);
        var html = '';
        regSelecionada.forEach(function(item, i){
            html += '<li class="estado" data-index="' + i + '">' + item.nome + '</li>'
        })
        $('#estados').html(
            html
        )
    }

    function fn_carregar_cidades(cidade){
        var index = parseInt( $(this).data('index') );

        estadoSelecionado = regSelecionada[index];
        cidadeSelecioanda = estadoSelecionado.cidades;
        var html = '';
        cidadeSelecioanda.forEach(function(item, i){
            html += '<li class="cidade" data-index="' + i + '">' + item.cidade + '</li>'
        })

        $('#cidades').html(
            html
        )
        fn_trocarTela(2);
    }

    function fn_carregar_revendedores(){
        var index = parseInt( $(this).data('index') );
        var conteudoLi = '';

        let esteticistas = estadoSelecionado.cidades[index];

        $.each(esteticistas.revendedor,function(v_Index,v_Object){
            conteudoLi += '<li> <strong>' + v_Object.nome + ' </strong>:' + v_Object.tel + '</li>';
        });

        var html = '<li class="cidade" >' +
           '<h4>' + esteticistas.loja + '</h4>' +
           '<a href="'+ esteticistas.link +'" target="_blanck">Credenciar</a>' +
            '<ul style="padding:0">' + conteudoLi + '</ul>'
        '</li>';


        $('#revendores').html(
            html
        )
        fn_trocarTela(3);
    }

    function fn_carregarEstados(reg){
        switch (reg) {
            case 'norte':
                fn_trocarTela(telasEnum.estado);
                fn_carregar_estados(reg);               
                break;
            case 'nordeste':
                    fn_trocarTela(telasEnum.estado);
                    fn_carregar_estados(reg);
                break;
            case 'CentroOeste':
                    fn_trocarTela(telasEnum.estado);
                    fn_carregar_estados(reg)
                break;
            case 'sudeste':
                    fn_trocarTela(telasEnum.estado);
                    fn_carregar_estados(reg)
                break;
            case 'sul':
                    fn_trocarTela(telasEnum.estado);
                    fn_carregar_estados(reg)
                break;
            default:
                break;
        }
    }
        // carrega os estados
            // selecione o estado
            // mostrar as cidades
            // mostrar todos os revendores da cidade
            // abrir modal com as informações do revendedor
    // eventos
    $('#nordeste, #sul, #sudeste, #norte, #CentroOeste').on("click", function(e){
        var reg = $(this).attr('id');
        fn_carregarEstados(reg);
    });

    // Esperar o clique
    $('#estados .estado').on("click", function(e){
        console.log($(this).data('estado'));
        var reg = $(this).attr('id');
        fn_carregarEstados(reg);

    });


    $('#estados').on("click", ".estado", fn_carregar_cidades);
    $('#cidades').on("click", ".cidade", fn_carregar_revendedores);
    $('.voltarTela').on('click', fn_voltar)
})($)