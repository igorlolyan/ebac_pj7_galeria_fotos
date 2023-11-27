$(document).ready(function(){
    $('header button').click(function(){
        $('form').fadeToggle();
    })

    $('#botao-cancelar').click(function(){
        $('form').fadeOut();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const enderecoDaImagemNova = $('#imagem-nova').val();
        const novoItem = $('<li></li>')
        $(`<img src="${enderecoDaImagemNova}" />`).appendTo(novoItem);
        $(`
            <div class="imglink">
                <a href='${enderecoDaImagemNova}' target='blank' title='Ver imagem em tamanho real'>
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);
        $('#endereco-imagem-nova'.val(''))
    })
})