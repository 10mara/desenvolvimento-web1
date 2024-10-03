//Faça uma função que a partir da idade e peso do paciente calcule a dosagem de um medicamento e 
//retorne quantas gotas do medicamento o paciente deve tomar por dose. Considere que o medicamento em questão possui 
//500 mg por ml, e que cada ml corresponde a 20 gotas.
//- Adultos e adolescentes acima de 12 anos, inclusive, se tiverem peso igual ou acima de 60 quilos devem tomar 1000 mg;
//com peso abaixo de 60 quilos devem tomar 875 mg.
//- Para crianças e adolescentes abaixo de 12 anos a dosagem depende do peso: 5 a 9 kg = 125 mg, 9.1 a 16 kg = 250 mg, 16.1 a 
//24 kg = 500 mg, acima de 24 Kg = 750 mg.

let idade=16
let peso= 80
function calculo(x){
  y = x/500
  qt= y*20
}
function medicamento(i,p){
  if(i>=12 && p>=60){
    calculo(1000)
    console.log(`Você deve tomar 1000 mg q corresponde a ${qt} gotas do medicamento`)
  }
  else if (i>=12 && p<=60){
    calculo(875)
    console.log(`Você deve tomar 875 mg q corresponde a ${qt} gotas do medicamento`)}
  else if (i<12 && p>=5 && p<=9){
  calculo(125)
  console.log(`Você deve tomar 125 mg q corresponde a ${qt} gotas do medicamento`)}
  else if (i<12 && p>=9.1 && p<=16){
  calculo(250)
  console.log(`Você deve tomar 250 mg q corresponde a ${qt} gotas do medicamento`)}
  else if (i<12 && p>=16.1 && p<=24){
  calculo(500)
  console.log(`Você deve tomar 500 mg q corresponde a ${qt} gotas do medicamento`)}
  else{
  calculo(750)
  console.log(`Você deve tomar 750 mg q corresponde a ${qt} gotas do medicamento`)}
    
}
medicamento(idade,peso)