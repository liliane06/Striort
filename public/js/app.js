"use strict";
(function($){

    /**
     * Função para fazer um objeto DOM ter o mesmo tamanho da janela
     * menos o tamanho passado como segundo argumento
     * @param {object} el - elemento que recebera o tamanho
     * @param {number} num - numero que irá subtrair o o tamanho total da tela
     */
    function maxHeightScreenMinus(el, num){
        console.log($(el))
        if(typeof el != 'object'){
            throw "Essa função precisa de um objeto"
        }

        var screenHeight = window.innerHeight;
        var minus = num || 0;

        $(el).height(screenHeight - minus);


    }
    $('#banner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear'
      });

      $('#galeriaEst').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: true,
        cssEase: 'linear',
        prevArrow: '<img src="/img/arrow.png" class="arrow" alt="Esquerda"/>',
        nextArrow: '<img src="/img/arrow.png" class="arrow arrow-right" alt="Esquerda"/>'
      });

    


    $('.goesTo, .link-footer').on('click', function (event) {
        console.log(this);
        var $anchor = $(this);

        $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top }, 1000, 'swing');

        // Outras AnimaÃ§Ãµes
        // linear, swing, jswing, easeInQuad, easeInCubic, easeInQuart, easeInQuint, easeInSine, easeInExpo, easeInCirc, easeInElastic, easeInBack, easeInBounce, easeOutQuad, easeOutCubic, easeOutQuart, easeOutQuint, easeOutSine, easeOutExpo, easeOutCirc, easeOutElastic, easeOutBack, easeOutBounce, easeInOutQuad, easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInOutExpo, easeInOutCirc, easeInOutElastic, easeInOutBack, easeInOutBounce

    });

    function mostrarIrTopo(e){

        let btn = $('#ir-topo');
        let posY = e.currentTarget.scrollY
        if(posY > 800){
            $(btn).fadeIn(200);
        }
        else{
            $(btn).fadeOut(200);
        }
    }





    $('.fechar-menu').on('click', function(){
        $('#menu-mob-flutuante').fadeOut(200);
    });

    $('.menu-mob').on('click', function(){
        $('#menu-mob-flutuante').fadeIn(200);
    })

    $('.link-topo').on('click', function(){
        $('.link-topo').removeClass('ativo');
        $(this).addClass('ativo');
        $('#menu-mob-flutuante').fadeOut(200);
    })

    //esse evento acontece quando toda a página é carregada
    window.addEventListener('load', function(){
        $('#loader').fadeOut(200);
        maxHeightScreenMinus($(".c-banner"));
    })
})($)