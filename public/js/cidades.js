    // Pegar a página dos cursos
    // solicitação 
    // recebe os dados
    
    function pegarDatas(idProduto){
        var url = 'https://ws-happybiz-node.herokuapp.com/listarCursos?empresa=001&filial=0002&idProduto=' + idProduto;

        axios.get(url)
             .then(function(res){
                 var listaCursos = res.data.slice(0, 13);                 

                 var agenda = $('#agendaTop');
                 var agendaBottom = $('#agenda-c');

                 listaCursos.forEach(function(el){
                    console.log(el);
                    $(agenda).append(
                        '<div class="agenda-item" style="margin-bottom:30px">' +
                        '<p class="data" style="max-width: 200px; display: block; margin: auto; text-overflow: ellipsis; white-space: nowrap; overflow-x: hidden;" >' + el.nomeTurma  + '</p>' +
                        '<p class="cidade">' + el.nomeLocalidade + '</p>' +
                        '<a style="color:white" href="' + el.linkInscricaoCurso  +  '"target="_blanck">Incrição</a>' +
                      '</div>'                  
                    )
                    $(agendaBottom).slick('slickAdd',                
                    '<div class="agenda-item abrirAgenda text-center">' +
                        '<p class="data"  style="max-width: 200px; display: block; margin: auto; text-overflow: ellipsis; white-space: nowrap; overflow-x: hidden;" >' + el.nomeTurma  + '</p>' +
                        '<p class="cidade">' + el.nomeLocalidade + '</p>' +
                        '<a style="color:white" href="' + el.linkInscricaoCurso  +  '"target="_blanck">Incrição</a>' +
                    '</div>'                  
                    );
                 })                 
             })
             .catch(function(err){
                console.log(err)
             })
    }    

    
    pegarDatas("0000000001");