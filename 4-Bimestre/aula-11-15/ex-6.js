//Crie um array chamado biblioteca que contenha três objetos, cada um representando um livro. 
//Cada livro deve ter as propriedades titulo, autor e anoPublicacao. 
//Exiba todos os títulos no console.

const biblioteca=[
    {titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899},
    {titulo: "1984",
    autor: "George Orwell",
    anoPublicacao: 1949},
    {titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954}
    ]
    
   const titulos = biblioteca.map(cadaTitulo => cadaTitulo.titulo);
  console.log(titulos); 
  // Saída: [ 'Dom Casmurro', '1984', 'O Senhor dos Anéis' ]