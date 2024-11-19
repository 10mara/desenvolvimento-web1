//Usando o objeto carro criado no exercício anterior, exiba o valor da propriedade marca no console. Em seguida, 
//atualize o valor da propriedade ano para 2021 e exiba o objeto atualizado.

const carro={
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
}

console.log(carro.marca)
carro.ano= 2021
console.log(carro)

//vai exibir
//Toyota
//{ marca: 'Toyota', modelo: 'Corolla', ano: 2021 }