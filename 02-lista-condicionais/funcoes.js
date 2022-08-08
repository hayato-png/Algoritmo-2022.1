import { getNumber, getIntNumber } from "../01-lista/funcoes_uteis.js"

import { input } from "../input.js"

export const get2digitsNumber = msg =>{
    let n = getNumber(msg)

    if (String(n).length !== 2){
        console.log('digite um número de 2 dígitos')
        n = get2digitsNumber(msg)
    }

    return n 
}

export const getSideNotNull = msg =>{
    let n = getNumber(msg)

    if (n === 0){
        console.log('não existe ângulo/lado com tamanho zero')
        n = getSideNotNull(msg)
    }

    return n 
}

export const getData = msg =>{
    let data = input(msg)

    if (data.length !== 10){
        console.log('digite a data no padrão: dd/mm/aaaa')
        data = getData(msg)
    }

    return data
}

export const getValidateNota = msg =>{
    let n = getIntNumber(msg)

    if (n < 0 || n > 10){
        console.log('notá inválida')
        n = getValidateNota(msg)
    }

    return n
}