var btnRemoverProdutos = $('#removerTodosProdutos')
var naoTemProduto = $('.naoTemProduto')
var temProduto = $('.temProduto')


btnRemoverProdutos.on('click', function (){
    if(confirm('Você tem certeza que quer limpar o carrinho?')){
        temProduto.css('display', 'none')
        naoTemProduto.css('display', 'block')
    }else{
        
    }

})

