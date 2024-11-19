//Crie um objeto chamado carrinho que possui uma propriedade itens, que é um array de objetos. 
//Cada item deve ter as propriedades nome e preco. Adicione um método dentro do 
//objeto chamado calcularTotal que retorne a soma dos preços dos itens.

const carrinho = {
    itens: [
      { nome: "vestido", preco: 100 },
      { nome: "sapato", preco: 80 }
    ]
  }
  carrinho.calcularTotal= function() {
      return this.itens.reduce((total, item) => total + item.preco, 0)
    }
  
  console.log(carrinho.calcularTotal())
  console.log(carrinho) 
  // Saída: 180