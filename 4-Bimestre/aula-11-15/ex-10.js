//Crie um array chamado usuarios, onde cada item é um objeto com as propriedades nome, idade, e email.
//Use map para criar um novo array que contenha apenas o nome e email de cada usuário, ignorando a idade.

const usuarios=[
    {
        nome: "Samara",
        idade:17,
        email:"samara@gmail.com"
    },
    {
        nome: "Marjory",
        idade:16,
        email:"marjory@gmail.com"
    }
]

const novo = usuarios.map(usuario => {
    // let copia = {
    //     nome: usuario.nome,
    //     email: usuario.email
    // }
    let copia = { ...usuario }
    delete copia.idade
    return copia
})
console.log(usuarios)
console.log(novo)