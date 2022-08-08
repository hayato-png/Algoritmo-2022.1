import { input } from "../input.js"

export const getNumber = msg =>{
    let n = Number(input(msg))

    if (isNaN(n)){
        console.log('digite um número.')
        n = getNumber(msg)
    }

    return n
}

export const getPositiveNumber = msg =>{
    let n = getNumber(msg)

    if (n < 0){
        console.log('digite um número positivo.')
        n = getPositiveNumber(msg)
    }

    return n
}

export const get3digitsNumber = msg =>{
    let n = getPositiveNumber(msg)

    if (String(n).length !== 3){
        console.log('digite um número de 3 dígitos.')
        n = get3digitsNumber(msg)
    }
    return n
}

export const getNumberNotNull = msg =>{
    let n = getNumber(msg)

    if (n === 0){
        console.log('digite um número não nulo')
        n = getNumberNotNull(msg)
    }

    return n 
}

export const isInt = n =>{
    return n % 1 === 0
}

export const getIntNumber = msg =>{
    let n = getNumber(msg)

    if (!(isInt(n))){
        console.log('digite um número inteiro')
        n = getIntNumber(msg)
    }

    return n
}

export const getBinari4digitsNumber = msg =>{
    let n = input(msg)
    
    if (n.length !== 4){
        console.log('digite um número de 4 dígitos na base binária')
        n = getBinari4digitsNumber(msg)
    }

    return n 
}