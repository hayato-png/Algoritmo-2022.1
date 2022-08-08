import { getNumber, getIntNumber, isInt, getPositiveNumber } from "../01-lista/funcoes_uteis.js"
import { input } from "../input.js"
import { get2digitsNumber, getSideNotNull, getData } from "./funcoes.js"


function q1(){
    const n1 = getNumber('1º número: ')
    const n2 = getNumber('2º número: ')
    const n3 = getNumber('3º número: ')

    console.log(verificar_numeros_repetidos(n1, n2, n3))
}

const verificar_numeros_repetidos = (n1, n2, n3) =>{
    let c = 0

    if (n1 === n2 && n2 === n3){
        c = 3
    }else if (n1 === n2 || n1 === n3 || n2 === n3){
        c = 2
    }

    return `\nhá ${c} numero(s) iguais`
}

//q1()

function q2(){
    const n1 = getNumber('1º número: ')
    const n2 = getNumber('2º número: ')

    console.log(maior_menor(n1, n2))
}

const maior_menor = (n1, n2) =>{
    const maior = Math.max(n1, n2)
    const menor = Math.min(n1, n2)

    return `\nmaior: [${maior}]\nmenor: [${menor}]`

}

//q2()

function q3(){
    const n1 = getNumber('1º número: ')
    const n2 = getNumber('2º número: ')
    const n3 = getNumber('3º número: ')

    console.log(verificar_maior(n1, n2, n3))
}

const verificar_maior = (n1, n2, n3) =>{
    let maior =  Math.max(n1, n2, n3)

    return `\nmaior: [${maior}]`
}

//q3()

function q4(){
    const n1 = get2digitsNumber('número: ')

    console.log(verificar_elementos_n_2digitos(n1))
}

const verificar_elementos_n_2digitos = n =>{
    const d = Math.trunc(n / 10)
    const u = n % 10

    let msg

    if (d === u){
        msg = `\nalgarismo da dezena [${d}] é igual ao algarismo da unidade [${u}]`
    }else{
        msg = `\nalgarismo da dezena [${d}] é diferente do algarismo da unidade [${u}]`
    }

    return msg
}

//q4()

function q5(){
    const n1 = getNumber('1º número: ')
    const n2 = getNumber('2º número: ')
    const n3 = getNumber('3º número: ')

    console.log(ordem_crescente(n1, n2, n3))
}

const ordem_crescente = (n1, n2, n3) =>{
    // metodo sort
    const numbers = [n1, n2, n3]

    numbers.sort((a, b) => a - b)

    return `\nnúmeros na ordem crescente: [${numbers}]`
}

//q5()

function q6(){
    const n1 = getSideNotNull('1º ângulo: ')
    const n2 = getSideNotNull('2º ângulo: ')
    const n3 = getSideNotNull('3º ângulo: ')

    console.log(verificar_tipo_triangulo(n1, n2, n3))
    
    
}

const verificar_tipo_triangulo = (n1, n2, n3) =>{
    let msg
    if (n1 + n2 + n3 === 180){
        if(n1 < 90 && n2 < 90 && n3 < 90){
            msg = '\ntriângulo acutângulo'
        }
        else if (n1 === 90 || n2 === 90 || n3 === 90){
            msg = '\ntriângulo retângulo'
        }
        else if (n1 > 90 || n2 > 90 || n3 > 90){
            msg = '\ntriângulo obtusângulo'
        }
        else{
            msg = '\noutro tipo de triângulo'
        }
    }
    else{
        msg = '\nnão forma triângulo'
    }

    return msg
}


//q6()

function q7(){
    const n1 = getSideNotNull('1º lado: ')
    const n2 = getSideNotNull('2º lado: ')
    const n3 = getSideNotNull('3º lado: ')

    console.log(verificar_tipo(n1, n2, n3))
}

const verificar_tipo = (n1, n2, n3) =>{
    let msg
    if (n1 + n2 > n3){
        if (n1 === n2 && n2 === n3){
            msg = '\ntriângulo equilátero'
        }
        else if (n1 === n2 || n2 === n3 || n1 === n3){
            msg = '\ntriângulo isósceles'
        }
        else if (n1 !== n2 && n2 !== n3){
            msg = '\ntriângulo escaleno'
        }

    }else {
        msg = '\nnão forma triângulo!'
    }

    return msg
}

//q7()

function q8(){
    const data_atual = getData('data atual (dd/mm/aaaa): ')
    const data_nascimento = getData('data de nascimento: ')

    console.log(idade_em_anos(data_atual, data_nascimento))
}

const idade_em_anos = (data_atual, data_nascimento) =>{
    const [dia_atual, mes_atual, ano_atual] = data_atual.split('/').map(Number)
    const [dia_nascimento, mes_nascimento, ano_nascimento] = data_nascimento.split('/').map(Number)

    let idade_anos = ano_atual - ano_nascimento

    if  (mes_atual > mes_nascimento){
        idade_anos -= 1
    }
    else if (mes_nascimento === mes_atual &&dia_nascimento < dia_atual){
        idade_anos -= 1
    }

    // parabéns Zé
    else if(dia_atual === dia_nascimento && mes_atual === mes_nascimento){
        return `\nParabéns Zé!\nidade: ${idade_anos} ano(s)`
    }

    return `\nidade: ${idade_anos} ano(s)`
}

//q8()

function q9(){
    const n1 = getNumberBeetwen('número entre 0 e 100: ')

    console.log(is_primeNumber(n1))
}

const getNumberBeetwen = msg =>{
    let n = getNumber(msg)

    if (n < 0 || n > 100){
        console.log('digite um número entre 0 e 100')
        n = getNumberBeetwen(msg)
    }

    return n 
}

const prime_number = n =>{
    let i = 2

    while (i < n){
        if (n % i === 0){
            return false
        }

        i++
    }

    return n > 1
}

const is_primeNumber = n =>{
    if (prime_number(n)){
        return `\no número [${n}] é primo`
    }

    return `\no número [${n}] não é primo`
}

//q9()

function q10(){
    const data = getData('data: ')
    
    console.log(verificar_data(data))

    

}
const verificar_data = data =>{
    const [dia, mes, ano] = data.split('/').map(Number)
    
    if (dia <= 31 && dia > 0 && mes <= 12 && mes > 0){
        // anos bissextos
        if (mes === 2 && dia > 29){
            return '\ndata inválida'
        }
        return '\ndata válida'
    }


    return '\ndata inválida'

    }


//q10()

function q11(){
    const opcao = getOption('opção: ')
    const n1 = getPositiveNumber('1º número: ')
    const n2 = getPositiveNumber('2º número: ')
    const n3 = getPositiveNumber('3º número: ')

    if (opcao === 1){
        console.log(`\nopção: [${opcao}]\nvalor do 1º número: ${n1}`)
    }
    else if (opcao === 2){
        console.log(`\nopção: [${opcao}]\nvalor do 2º número: ${n2}`)
    }
    else{
        console.log(`\nopção: [${opcao}]\nvalor do 3º número: ${n3}`)
    }

}

const getOption = msg =>{
    let n = getIntNumber(msg)

    if (n >= 4 || n <= 0){
        console.log('únicos valores possíveis para a variável opção: [1, 2, 3]')
        n = getOption(msg)
    }

    return n 
}

//q11()

function q12(){
    const n = getIntNumber('número: ')

    eh_par(n) ?
    console.log(`\no número [${n}] é par`) :
    console.log(`\no número [${n}] é ímpar`)

}

const eh_par = n =>{
    return n % 2 === 0
}

//q12()

function q13(){
    const n1 = getIntNumber('1º número: ')
    const n2 = getIntNumber('2º número: ')
    const n3 = getIntNumber('3º número: ')
    const n4 = getIntNumber('4º número: ')
    const n5 = getIntNumber('5º número: ')

    console.log(maior_menor_5_numeros(n1, n2, n3, n4, n5))
}

const maior_menor_5_numeros = (n1, n2, n3, n4, n5) => {
    const maior = Math.max(n1, n2, n3, n4, n5)
    const menor = Math.min(n1, n2, n3, n4, n5)

    return `\nmaior: [${maior}]\nmenor: [${menor}]`
}

//q13()

function q14(){
    const n1 = getIntNumber('1º número: ')
    const n2 = getIntNumber('2º número: ')
    const n3 = getIntNumber('3º número: ')
    const n4 = getIntNumber('4º número: ')
    const n5 = getIntNumber('5º número: ')

    console.log(numeros_maiores_que_a_media(n1, n2, n3, n4, n5))
}

const media_aritmetica_5numeros = (n1, n2, n3, n4, n5) =>{
    const media = (n1 + n2 + n3 + n4 + n5) / 5

    return media

}

const getValidateNota = msg =>{
    let n = getIntNumber(msg)

    if (n < 0 || n > 10){
        console.log('notá inválida')
        n = getValidateNota(msg)
    }

    return n
}

// gambiarra
const numeros_maiores_que_a_media = (n1, n2, n3, n4, n5) =>{
    const media = media_aritmetica_5numeros(n1, n2, n3, n4, n5)
    
    const notas = []

    if (n1 > media){
        notas.push(n1)
    }
    if (n2 > media){
        notas.push(n2)
    }
    if (n3 > media){
        notas.push(n3)
    }
    if (n4 > media){
        notas.push(n4)
    }
    if (n5 > media){
        notas.push(n5)
    }

    if (n1 === n2 && n2 === n3 && n3 === n4 && n4 === n5) {
        return `\nmedia = ${media}\nnúmeros iguais a média`
    }
    
    return `\nmedia = ${media}\nnúmeros maiores que a média: [${notas}]`
}

//q14()

function q15(){
    const nome1 = input('nome do professor(a): ')
    const hr_aula1 = getPositiveNumber('quantidade de horas de aula dadas: ')
    const valor1 = getPositiveNumber('valor por hora: ')
    console.log('')
    const nome2 = input('nome do professor(a): ')
    const hr_aula2 = getPositiveNumber('quantidade de horas de aula dadas: ')
    const valor2 = getPositiveNumber('valor por hora: ')

    console.log(ganha_mais(nome1, hr_aula1, valor1, nome2, hr_aula2, valor2))
}

const ganha_mais = (nome1, hr1, value1, nome2, hr2, value2) =>{
    const salary1 = hr1 * value1
    const salary2 = hr2 * value2

    if (salary1 > salary2){
        return `\nprofessor(a) ${nome1}, com salário de: R$ ${salary1.toFixed(2)}, ganha mais.`
    }

    return `\nprofessor(a) ${nome2}, com salário de: R$ ${salary2.toFixed(2)}, ganha mais.`

}

//q15()

function q16(){
    const n1 = getValidateNota('1º nota: ')
    const n2 = getValidateNota('2º nota: ')

    console.log(media_aritmetica_2numeros(n1, n2))
}

const media_aritmetica_2numeros = (n1, n2) =>{      
    let media = (n1 + n2) / 2

    if (media >= 7){
        return `\nmédia = ${media}\taprovado!`
    }
    else{
        if (media < 4){
            return `\nmédia = ${media}\treprovado!`
        }
        else{
            const nota_exame = getValidateNota('nota do exame final: ')
            media = (nota_exame + media) / 2
            if (media >= 5){
                return `\nmédia = ${media}\taprovado!`
            }
            else{
                return `\nmédia = ${media}\treprovado!`
            }
        }
    }
}

//q16()

function q17(){
    const n1 = getIntNumber('1º número: ')
    const n2 = getIntNumber('2º número: ')

    console.log(verificar_condicoes(n1, n2))
}

const verificar_condicoes = (n1, n2) =>{
    if (n1 % n2 === 1){
        return `\nsoma: ${n1 + n2 + (n1 % n2)}`
    }
    else if (n1 % n2 === 2){
        if (eh_par(n1) && eh_par(n2)){
            return `\n[${n1}, ${n2}] são pares`
        }
        else if (!(eh_par(n1) && eh_par(n2))){
            return `\n[${n1}, ${n2}] são ímpares`
        }
        else if (eh_par(n1) && !(eh_par(n2))){
            return `\n[${n1} é par\n[${n2}] é ímpar]`
        }
        else if (!(eh_par(n1)) && eh_par(n2)){
            return `\n[${n1} é ímpar\n[${n2}]é par`
        }
    }

    else if (n1 % n2 === 3){
        return `\n[${n1} + ${n2} * ${n1} = ${(n1 + n2) * n1}]`
    
    }
    else if (n1 % n2 === 4){
        if (n2 === 0){
            return `\ncondição não atendida`
        }

        return `\n[${n1 + n2} / ${n2} = ${(n1 + n2) / 2}]`

    }
    else {
        return `\n${n1}² = ${n1 ** 2}\n${n2}² = ${n2 ** 2}`
    }
}

//q17()

function q18(){
    menu_operacoes()
    const opcao = getOption2('opção: ')
    const n1 = getNumber('1º número: ')
    const n2 = getNumber('2º número: ')
    console.log(operacoes(n1, n2, opcao))
    
}
const getOption2 = msg =>{
    let n = getIntNumber(msg)

    if (n > 4 || n <= 0){
        console.log('únicos valores possíveis para a variável opção: [1, 2, 3, 4]')
        n = getOption2(msg)
    }

    return n 
}

const operacoes = (n1, n2, opcao) =>{
    
    if (opcao === 1){
        return `\n[${n1} + ${n2} = ${n1 + n2}]`
    }
    else if (opcao === 2){
        return `\n[${n1} - ${n2} = ${n1 - n2}]`
    }
    else if (opcao === 3){
        return `\n[${n1} x ${n2} = ${n1 * n2}]`
    }
    else {
        if (n1 === 0 || n2 === 0){
            return '\ndivisão impossível'
        }
        return `\n[${n1} / ${n2} = ${n1 / n2}]`
    }
}

const menu_operacoes = () =>{
    let menu = '\n\tMENU DE OPERAÇÕES'
    menu += '\n\t[1] - Adição'
    menu += '\n\t[2] - Subtração'
    menu += '\n\t[3] - Multiplicação'
    menu += '\n\t[4] - Divisão\n'

    console.log(menu)

}

//q18()

function q19(){
    const altura = getPositiveNumber('altura: ')
    const peso = getPositiveNumber('peso: ')

    console.log(imc(altura, peso))
}
const imc = (altura, peso) =>{
    const indice_massa = (peso / altura ** 2)

    if (indice_massa < 25){
        return `\nimc = ${indice_massa.toFixed(1)}\tpeso normal!`
    }
    else if (indice_massa >= 25 && indice_massa <= 30){
        return `\nimc = ${indice_massa.toFixed(1)}\tacima do peso!`
    }
    else if (indice_massa > 30){
        return `\nimc = ${indice_massa.toFixed(1)}\tmuito acima do peso!`
    }
}

//q19()

function q20(){
    const angulo = getPositiveNumber('ângulo: ')

    console.log(quadrantes(angulo))
}

const quadrantes = n =>{
    if (n <=90){
        return `\n${n}º está localizado no 1º quadrante`
    }
    else if (n > 90 && n <= 180){
        return `\n${n}º está localizado no 2º quadrante`
    }
    else if (n > 180 && n <= 270){
        return `\n${n}º está localizado no 3º quadrante`
    }
    else if (n > 270 && n <= 360){
        return `\n${n}º está localizado no 4º quadrante`
    }
    else {
        return `\nângulo inválido!`
    }
}

//q20()

function q21(){
    const n = getFloatNumber('número: ')

    console.log(arredondar_numeros(n))
}

const getFloatNumber = msg =>{
    let n = getNumber(msg)

    if (isInt(n)){
        console.log('digite um número fracionário')
        n = getFloatNumber(msg)
    }

    return n
}

const arredondar_numeros = n =>{
    const [part_inteira, parte_fracionaria] = String(n).split('.').map(Number)

    if (parte_fracionaria >= 5){
        return `\nnúmero arredondado: ${part_inteira + 1}`
    }
    else if (parte_fracionaria < 5){
        return `\nnúmero arredondado: ${part_inteira}`
    }
}

//q21()

function q22(){
    const [hr_inicio, min_inicio] = input('hora e minuto de início do jogo (ex: 12:30): ').split(':').map(Number)
    const [hr_fim, min_fim] = input('hora e minuto de fim do jogo: ').split(':').map(Number)

    console.log(duracao_jogo(hr_inicio, min_inicio, hr_fim, min_fim))
}

const duracao_jogo = (hr_inicio, min_inicio, hr_fim, min_fim) =>{
    let duracao_hr = hr_fim - hr_inicio
    let duracao_min = min_fim - min_inicio

    if (duracao_min < 0){
        duracao_min += 60
        duracao_hr --
    }

    if (duracao_hr < 0){
        duracao_hr += 24
    }

    // caso especial 
    else if (duracao_hr === 0 && duracao_min === 0){
        duracao_hr = 24
    }

    return `\no jogo durou: ${duracao_hr} hora(s) e ${duracao_min} minuto(s)`
}

//q22()

function q23(){
    const data1 = getData('1º data: ')
    const data2 = getData('2º data: ')

    console.log(data_mais_recente(data1, data2))
}

const data_mais_recente = (data1, data2) =>{
    const [dia1, mes1, ano1] = data1.split('/').map(Number)
    const [dia2, mes2, ano2] = data2.split('/').map(Number)

    if (ano1 > ano2){
        return `\ndata mais recente: ${data1}`
    }
    else if (ano1 === ano2){
        if (mes1 > mes2){
            return `\ndata mais recente: ${data1}`
        }else if (mes1 === mes2){
            if (dia1 > dia2){
                return `\ndata mais recente: ${data1}` 
            }
            else if (dia1 === dia2){
                return`\ndatas iguais!`
            }
            else{
                return `\ndata mais recente: ${data2}` 
            }
        }
        else{
            return `\ndata mais recente: ${data2}` 
        }
    }
    else{
        return `\ndata mais recente: ${data2}` 
    }

}

//q23()

function q24(){
    const a = coeficiente_a('coeficiente de A: ')
    const b = getNumber('coeficiente de B: ')
    const c = getNumber('coeficiente de C: ')

    console.log(raizes_2grau(a, b, c))

}

const raizes_2grau = (a, b, c) =>{
    let x1, x2

    if (b === 0 && c !== 0){
        console.log('\nequação incompleta')
        
        // isolar incógnita x
        
        x1 = ((- c) / a) ** 0.5
        x2 = - x1
        
        return `\nx' = ${x1}\nx" = ${x2}`
        
    }
    else if (b !== 0 && c === 0) {
        console.log('\nequação incompleta')

        x1 = 0
        x2 = (- b) / a
        
        return `\nx' = ${x1}\nx" = ${x2}`
    }
    else {
        console.log('\nequação completa')
        const delta = b ** 2 - (4 * a * c)
        x2 = ((- b) - delta ** 0.5) / (2 * a)
        x1 = (- b + delta ** 0.5) / (2 * a)

        if (isNaN(x1) || isNaN(x2)){
            return '\nímpossivel calcular'
        }
        else{
            return `\nx' = ${x1}\nx" = ${x2}`
        }
        
    }
}


const coeficiente_a = msg =>{
    let n = getNumber(msg)

    if (n === 0){
        console.log('o valor do coeficiente a nunca pode ser 0')
        n = coeficiente_a(msg)
    }

    return n 
}

//q24()

function q25(){
    let senha = getNumber('senha: ')

    console.log(senha_valida(senha))

}

const senha_valida = n =>{
    let n_tentativas = 1

    while (n !== 1234){
        console.log('digite a senha correta')
        n = getNumber('senha: ')

        n_tentativas ++
    }

    return `\nacesso permitido!\tnúmero de tentativas: ${n_tentativas}`
}

//q25()

function q26(){
    const l1 = getSideNotNull('1º lado: ')
    const l2 = getSideNotNull('2º lado: ')
    const l3 = getSideNotNull('3º lado: ')

    console.log(catetos_hipotenusa(l1, l2, l3))
}

const catetos_hipotenusa = (l1, l2, l3) =>{
    const maior = Math.max(l1, l2, l3)

    if (maior === l1){
        return`\ncatestos: [${l2}, ${l3}]\thipotenusa: ${l1}`
    }
    else if (maior === l2){
        return`\ncatestos: [${l1}, ${l3}]\thipotenusa: ${l2}`
    }
    else{
        return`\ncatestos: [${l1}, ${l2}]\thipotenusa: ${l3}`
    }

}

//q26()

function q27(){
    const data_nascimento = getData('data de nascimento: ')
    const data_atual = getData('data atual: ')

    console.log(idade_anos_meses_dias(data_atual, data_nascimento))
}

const idade_anos_meses_dias = (data_atual, data_nascimento) =>{
    const [dia_atual, mes_atual, ano_atual] = data_atual.split('/').map(Number)
    const [dia_nascimento, mes_nascimento, ano_nascimento] = data_nascimento.split('/').map(Number)

    let idade_anos = ano_atual - ano_nascimento
    let idade_meses = mes_atual - mes_nascimento
    let idade_dias = dia_atual - dia_nascimento

    if (idade_dias < 0){
        idade_dias += 31
        idade_meses --
    }

    if (idade_meses < 0){
        idade_meses += 12
        idade_anos --
    }
    
    return `\nidade: ${idade_anos} ano(s), ${idade_meses} mes(es), ${idade_dias} dia(s)`
}

//q27()

function q28(){
    const ponto1 = input('coordenada [x,y]: ')
    const ponto2 = input('coordenada [x,y]: ')

    console.log(area_retangulo(ponto1, ponto2))
}
const area_retangulo = (p1, p2) =>{
    const [x1, y1] = p1.split(',').map(Number)
    const [x2, y2] = p2.split(',').map(Number)

    let base, altura

    if (x1 > x2){
        altura = x1 - x2
    }
    else{
        altura = x2 - x1
    }

    if (y1 > y2){
        base = y1 - y2
    }
    else{
        base = y2 - y1
    }

    const area = base * altura

    if (area < 0){
        return `\nárea = valor negativo!`
    }

    return `\nárea do retângulo: ${base} * ${altura} = ${area}`
}

//q28()

function q29(){
    const n = get4digitsNumber('número: ')

    console.log(quadrado_perfeito(n))
}
const quadrado_perfeito = n =>{
    const m = Math.trunc(n / 1000)
    const c = Math.trunc((n % 1000) / 100)
    const d = Math.trunc((n % 100) / 10)
    const u = n % 10

    const dezena1 = Number(String(m) + String(c))
    const dezena2 = Number(String(d) + String(u))

    const raiz_quadrada = n ** 0.5

    if (raiz_quadrada === dezena1 + dezena2){
        return `\n√${n} = ${raiz_quadrada} = [${dezena1} + ${dezena2} = ${dezena1 + dezena2}]\tquadrado perfeito!`
    }
    
    return `\n√${n} = ${raiz_quadrada} ≠ [${dezena1} + ${dezena2} = ${dezena1 + dezena2}]\t não é quadrado perfeito!`
    
}

const get4digitsNumber = msg =>{
    let n = getNumber(msg)

    if (n < 1000 || n > 9999){
        console.log('digite um número inteiro de 4 dígitos')
        n = get4digitsNumber(msg)
    }

    return n 
}

//q29()

function q30(){
    const n = get4digitsNumber('número: ')

    console.log(regra(n))
}

const regra = n =>{
    const m = Math.trunc(n / 1000)
    const c = Math.trunc((n % 1000) / 100)
    const d = Math.trunc((n % 100) / 10)
    const u = n % 10

    const dezena1 = Number(String(m) + String(c))
    const dezena2 = Number(String(d) + String(u))

    if ((dezena1 + dezena2) ** 2 === n){
        return `\nnuḿero: ${n}, segue a regra, pois => dividindo: ${dezena1} e ${dezena2} => somando \ntemos ${dezena1 + dezena2} => ${dezena1 + dezena2}² = ${(dezena1 + dezena2) ** 2}`
    }
    return `\no nuḿero: ${n}, não segue a regra, pois => dividindo: ${dezena1} e ${dezena2} => somando\ntemos ${dezena1 + dezena2} => ${dezena1 + dezena2}² =  ${(dezena1 + dezena2) ** 2} ≠ ${n}`

}

//q30()
