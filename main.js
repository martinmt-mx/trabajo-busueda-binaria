let vector = []
let par = 0
for(let i = 0; i<100; i++){
    par+=2
    vector[i] = par
}

function busquedaBinaria(vector, numero){
    let operaciones = 0
    if(numero%2 !== 0){  //ahorita si te funciona porque sabemos que son pares, pero la intención de llenarlo así era para que estuviera ordenado, entonces eventualmente se quitaria.
        operaciones += 1
        console.log("numero de operaciones:",operaciones)
        return -1
    }
    let encontrado = false
    let tamanoMax = Math.floor((vector.length-1)/2)  //solo la primer vez debe ser la mitad del tamaño, pero despues no sabes si es la mitad de arria o la mitad de abajo del vector
    while(encontrado==false){  //
        operaciones += 1
        if(numero==vector[tamanoMax]){
            console.log("numero de operaciones:", operaciones)
            encontrado = true
            return tamanoMax
        }else if(numero>=vector[tamanoMax]){  
            tamanoMax += Math.ceil(tamanoMax/2)  //Aqui deberias ajustar uno de los limites
        }else{
            tamanoMax -= Math.ceil(tamanoMax/2)  //ajustarías el otro limite.
        }
    }
}

console.log(busquedaBinaria(vector, 2))  //intenta econtrar el 900 o un numero que no exista y veras que pasa.
