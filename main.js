let vector = []
let par = 0
for(let i = 0; i<100; i++){
    par+=2
    vector[i] = par
}

function busquedaBinaria(vector, numero){
    let operaciones = 0
    if(numero%2 !== 0){
        operaciones += 1
        console.log("numero de operaciones:",operaciones)
        return -1
    }
    let encontrado = false
    let tamanoMax = Math.floor((vector.length-1)/2)
    while(encontrado==false){
        operaciones += 1
        if(numero==vector[tamanoMax]){
            console.log("numero de operaciones:", operaciones)
            encontrado = true
            return tamanoMax
        }else if(numero>=vector[tamanoMax]){
            tamanoMax += Math.ceil(tamanoMax/2)
        }else{
            tamanoMax -= Math.ceil(tamanoMax/2)
        }
    }
}

console.log(busquedaBinaria(vector, 2))