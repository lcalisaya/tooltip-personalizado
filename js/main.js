$(document).ready(function(){
  //Cuando se pasa el mouse encima del link, se dispara la función
  $('a').hover(function(){
    //Se guarda el valor del atributo title y el valor del atributo data-fondo
    var titulo = $(this).attr('title'),
    fondo = $(this).data('fondo');
    //Se guarda en data-titulo el valor de titulo y se elimina el valor de title
    $(this).data('titulo', titulo).removeAttr('title');
    //Se va a agregar un nuevo elemento al elemento padre <body> con un nuevo color de fondo
    $('<p></p>').text(titulo).addClass('tooltip')
                                        .appendTo('body')
                                        .fadeIn('slow')
                                        .css('background-color', fondo);

  },function(){
    //Cuando se retira el mouse de encima del link, se vuelve a agregar el data-titulo al atributo title
    $(this).attr('title', $(this).data('titulo'));
    //Se elimina el tooltip con diseño personalizado
    $('.tooltip').remove();
    //Durante el tiempo que el mouse esté encima del link, hay que guardar las
    //coordenadas X eY del ratón
  }).mousemove(function(e){
    var ratonX = e.pageX + 20,
          ratonY = e.pageY + 10;
    //Y se le va a agregar al tooltip un left y un top para que el tooltip tenga movimiento
    $('.tooltip').css({
      'left': ratonX,
      'top': ratonY
    });
  });
});
