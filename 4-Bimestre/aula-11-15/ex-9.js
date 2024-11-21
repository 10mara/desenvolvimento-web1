//Crie um array de objetos chamado estoque, onde cada objeto representa um produto 
//com as propriedades id, nome, e quantidade. Escreva uma função que receba o id de 
//um produto e um valor para atualizar a quantidade desse produto no array.
//Em seguida, exiba o objeto atualizado.

const estoque = [
    { id: 1, nome: "vestido", quantidade: 20 },
    { id: 2, nome: "calça", quantidade: 25 }
  ]
  
console.log("Estoque antes:", estoque)
  
  function atualizarQuantidade(id, qtd) {
    // Encontra o produto com o id correspondente
    const produto = estoque.find(item => item.id === id)
  
    if (produto) {
      // Atualiza a quantidade do produto
      produto.quantidade = qtd;
      console.log("Estoque depois:", estoque)
    } else {
      console.log("Produto não encontrado.")
    }
  }


// Exemplo de entrada:
atualizarQuantidade(2, 30)
// Estoque antes: [{ id: 1, nome: "Caneta", quantidade: 10 }, { id: 2, nome: "Caderno", quantidade: 15 }]
// Estoque depois: [{ id: 1, nome: "Caneta", quantidade: 10 }, { id: 2, nome: "Caderno", quantidade: 30 }]