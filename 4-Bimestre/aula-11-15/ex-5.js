//Crie um objeto chamado `produto` com as propriedades `nome`, `preco` e `categoria`.
//Use um loop `for...in` para exibir todas as propriedades e seus valores no console

const produto = {
    nome: "vestido",
    preco: 100,
    categoria: "adulto"
};

for (let chave in produto) {
    console.log(`${chave}: ${produto[chave]}`);
}

// ele vai exibir
//nome: vestido
//preco: 100
//categoria: adulto