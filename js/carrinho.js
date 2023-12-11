var btnRemoverProdutos = $('#removerTodosProdutos')
var naoTemProduto = $('#naoTemProduto')
var temProduto = $('.temProduto')


naoTemProduto.hide()


btnRemoverProdutos.on('click', function (){
    if(confirm('Você tem certeza que quer limpar o carrinho?')){
        temProduto.hide()
        naoTemProduto.show()
    }else{
        naoTemProduto.hide()
        temProduto.show()
    }

})

