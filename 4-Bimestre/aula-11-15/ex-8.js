//Crie um objeto chamado aluno com as propriedades nome, idade, curso. 
//Use desestruturação para extrair o nome e curso do objeto e exiba-os no console.

const aluno = {
    nome: 'Samara',
    idade: 17,
    curso: 'TI'
  };
  
  const { nome, curso } = aluno;
  
  console.log(nome);  // Saída: Samara
  console.log(curso); // Saída: TI