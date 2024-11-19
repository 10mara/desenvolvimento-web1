//Adicione uma nova propriedade cor ao objeto carro e defina o valor dela como "preto". Depois, 
//remova a propriedade modelo do objeto e exiba o objeto atualizado no console.

const carro={
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
}


carro.cor= "preto"
console.log(carro)

delete carro.modelo
console.log(carro)

//vai exibir
//{ marca: 'Toyota', modelo: 'Corolla', ano: 2020, cor: 'preto' }
//{ marca: 'Toyota', ano: 2020, cor: 'preto' }