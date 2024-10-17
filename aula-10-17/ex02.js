let x= 1000
let y= 1026
let z= 200.7

function Menorzinho (s,a,m){
    if (s<a && s<m){
        console.log(`O número ${s} é o menor deles!`)
    }
    else if(a<s && a<m){
        console.log(`O número ${a} é o menor deles!`)
    }
    else if(m<s && a>m){
        console.log(`O número ${m} é o menor deles!`)
    }
    else if(a==s && a==m){
        console.log(`Todos são iguais!`)
    }
    else if(a==s && a<m){
        console.log(`O número ${a} e o número ${s} são os menores.`)
    }
    else if(m==s && a>m){
        console.log(`O número ${m} e o número ${s} são os menores.`)
    }
    else if(a==m && a<s){
        console.log(`O número ${a} e o número ${m} são os menores.`)
    }

}
Menorzinho(x,y,z)