// Botão pra aparecer e retrair o menu

$('#botaoNovaImagem').click(function(){
    $('#seletorSection').slideToggle();
}
)

$('#botaoCancelar').click(function(){
    $('#seletorSection').slideUp();
})


// -----------------------------------------------------------------------------------------------------------------------------

$('form').on('submit', function(e){
    e.preventDefault();

    var novasImagens = $(`<li style="display: none" ></li>`);

    $(`
        <img src="${$('form input').val()}" alt="Pintura de um gato">
        <div class="overlay">
            <a href="${$('form input').val()}">
                Link da imagem em tamanho real
            </a>
        </div>
    `).appendTo(novasImagens);

    $(novasImagens).appendTo('ul');
    $(novasImagens).slideDown(1000);

    $('form input').val('')
});
























// $('form').on('submit', function(e){
//     e.preventDefault();
//     const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
//     const novoItem = $('<li></li>');
//     $(`<img src="${enderecoDaNovaImagem}" />`).appenTo(novoItem);
//     $(`
//         <div class="overlay-imagem-link">
//             <a href="${enderecoDaNovaImagem}" target="_blank" tittle="Ver imagem em tamanho real"
//                 Ver imagem em tamanho real
//             </a>
//         </div>
//     `).appendTo(novoItem);
//     $(novoItem).appendTo('ul');
//     $('#endereco-imagem-nova').val('')
// })
