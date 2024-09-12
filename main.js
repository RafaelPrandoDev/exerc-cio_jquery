$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        let tarefa = $('#tarefa').val();
        if (tarefa) {
            $('ul').append('<li>' + tarefa + '</li>');
            $('#tarefa').val('');
        }
    });

    $('#botao-reset').click(function() {
        $('ul').empty();
    });

    $('ul').on('click', 'li', function(e) {
        $(e.target).toggleClass('riscado');
    });
});
