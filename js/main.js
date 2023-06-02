$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
});  

$(document).ready(function() {
    $('form').submit(function(event) {
    event.preventDefault();
    if ($(this).valid()) {
        $('form').hide();
        $('body').append('<button id="voltar">Voltar</button>');
    }
});

$('body').on('click', '#voltar', function() {
    $('form').show();
    $('p').remove();
    $(this).remove();
    $('form')[0].reset();
});
});