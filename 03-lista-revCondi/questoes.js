import { getNumber, getPositiveNumber } from "../01-lista/funcoes_uteis.js"
import { getValidateNota } from "../02-lista-condicionais/funcoes.js"
import { input } from "../input.js"

function q1(){
    const n = getNumber('número: ')

    console.log(positive_number(n))
}

const positive_number = n =>{
    if (n < 0){
        return `\n[${n}] é um número negativo`
    }

    return `\n[${n}] é um número positivo`
}

//q1()

function q2(){
    console.log('sexos: [M] - Masculino\t[F] - Feminino')
    const genero = input('sexo: ')

    console.log(sexokkk(genero))
}

const sexokkk = genero =>{
    if (genero === 'M'){
        return `\nSexo Masculino!`
    }
    else if (genero === 'F'){
        return `\nSexo Feminino!`
    }
    
    return `\nSexo inválido!`
}

//q2()

function q3(){
    const letra = getLowerLetter('letra: ')

    console.log(consoante_or_vogal(letra))
}

const getLowerLetter = msg =>{
    let letra = input(msg)

    if (letra.length !== 1 || !isNaN(letra)){
        console.log('digite apenas uma letra')
        letra = getLowerLetter(msg)
    }

    return letra
}

const consoante_or_vogal = letra =>{
    const copy_letter = letra.toLowerCase()

    if (copy_letter === 'a' || copy_letter === 'e' || copy_letter === 'i' || copy_letter === 'o' || copy_letter === 'u'){
        return `\na letra '${letra}' é vogal`
    }

    return `\na letra '${letra}' é consoante`
}

//q3()

function q4(){
    const nota1 = getValidateNota('1º nota: ')
    const nota2 = getValidateNota('2º nota: ')

    console.log(media_parciais(nota1, nota2))
}

const media_parciais = (n1, n2) =>{
    const media = (n1 + n2) / 2

    if (media === 10){
        return `\nmedia = ${media}\taprovado com distinção!`
    }
    else if (media >= 7){
        return `\nmedia = ${media}\taprovado!`
    }

    return `\nmedia = ${media}\treprovado!`
}

//q4()

function q5(){
    const prod1 = getPositiveNumber('preço 1º produto R$: ')
    const prod2 = getPositiveNumber('preço 2º produto R$: ')
    const prod3 = getPositiveNumber('preço 3º produto R$: ')

    console.log(mais_barato(prod1, prod2, prod3))
}

const mais_barato = (p1, p2, p3) =>{
    const menor_preco = Math.min(p1, p2, p3)

    return `\nproduto com menor preço:\tR$ ${menor_preco.toFixed(2)}`
}

//q5()

function q6(){
    console.log('turnos: [M] - Matutino\n[V] - vespertino\n[N] - Noturno')
    const turno = input('turno: ')

    console.log(verificar_turnos(turno))
}

const verificar_turnos = turno =>{
    if (turno === 'M'){
        return `\nBom Dia!\n\n"Satisfaze-nos pela manhã com o teu amor leal, e\n todos os nossos dias cantaremos felizes." Salmos 90:14`
    }
    else if (turno === 'V'){
        return `\nBoa Tarde!\n\n"Desde o nascimento do sol até ao acaso,\nseja louvado o nome do Senhor" Salmos 113:3`
    }
    else if (turno === 'N'){
        return `\nBoa Noite\n\n"O temor do Senhor conduz à vida: quem\no teme pode descansar em paz, livre de problemas" Provérbios 19:23`
    }

    return `\nturno inválido`

} 

//q6()

function q7(){
    const salario = getPositiveNumber('salário R$: ')

    console.log(calcular_aumento(salario))

}

const calcular_aumento = salario =>{
    let aumento, percentual

    if (salario <= 280){
        aumento = salario * (20 / 100)
        percentual = '20%'
    }
    else if (salario > 280 && salario < 700){
        aumento = salario * (15 / 100)
        percentual = '15%'
    }
    else if (salario >= 700 && salario < 1500){
        aumento = salario * (10 / 100)
        percentual = '10%'
    }
    else {
        aumento = salario * (5 / 100)
        percentual = '5%'
    }

    return `\nsalário pré-aumento: R$ ${salario.toFixed(2)}\nsalário pós-aumento: R$ ${(salario + aumento).toFixed(2)}\npercentual de aumento aplicado: ${percentual}`
}

//q7()

function q8(){
    const valor_hr = getPositiveNumber('valor das horas trabalhadas: ')
    const qtd_hrs = getPositiveNumber('quantidade de horas trabalhadas: ')

    console.log(folha_pagamento(qtd_hrs, valor_hr))
}

const folha_pagamento = (qtd_hrs, valor_hr)=>{  
    const salario_bruto = qtd_hrs * valor_hr
    const inss = salario_bruto * (10 / 100)
    const fgts = salario_bruto * (11 / 100)
    let ir, percentual

    if (salario_bruto <= 900){
        ir = 0
        percentual = 'isento'
    }
    else if (salario_bruto > 900 && salario_bruto <= 1500){
        ir = salario_bruto * (5 / 100)
        percentual = '5%'
    }
    else if (salario_bruto > 1500 && salario_bruto <= 2500){
        ir = salario_bruto * (10 / 100)
        percentual = '10%'
    }
    else{
        ir = salario_bruto * (20 / 100)
        percentual = '20%'
    }

    console.log('\n\tFolha de Pagamento')

    return `\nSalário Bruto:(${valor_hr} * ${qtd_hrs}):R$ ${salario_bruto.toFixed(2)}\n(-)IR (${percentual}):\t\tR$ ${ir.toFixed(2)}\n(-)INSS (10%):\t\tR$ ${inss.toFixed(2)}\nFGTS(11%):\t\tR$ ${fgts.toFixed(2)}\nTotal de descontos:\tR$ ${(ir + inss).toFixed(2)}\nSalário Liquido:\tR$ ${(salario_bruto - (ir + inss)).toFixed(2)}`
}

//q8()
