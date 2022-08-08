import { input } from "../input.js"
import { getNumber, getPositiveNumber,
get3digitsNumber,getNumberNotNull, 
getIntNumber,
getBinari4digitsNumber} from "./funcoes_uteis.js"

function q1(){
    const ms = getNumber('velocidade m/s: ')

    console.log(ms_to_km(ms))
    
}
// arrow function sem parenteses (apenas um parâmetro)

const ms_to_km = ms => {
    return `\n${ms} m/s equivalem a ${(ms * 3.6).toFixed(1)} km/h`
}
/* função anônima
const ms_to_km = function(ms){
    return `\n${ms} m/s equivalem a ${ms * 3.6.toFixed(1)} km/h`
}
*/

//q1()

function q2(){
    const hrs = getPositiveNumber('Horas: ')
    const mins = getPositiveNumber('Minutos: ')

    console.log(hrs_mins_to_mins(hrs, mins))

}

const hrs_mins_to_mins = (hrs, mins) => {
    return `\n${hrs} hora(s) e ${mins} minuto(s) equivalem a: ${hrs * 60 + mins} minuto(s)`
}

//q2()

function q3(){
    const mins = getPositiveNumber('Minutos: ')

    console.log(mins_to_hrs_mins(mins))
    
}
const mins_to_hrs_mins = mins =>{
    return `\n${mins} minuto(s) equivalem a: ${(mins / 60).toFixed(0)} hora(s) e ${mins % 60} minuto(s)`
}

//q3()

function q4(){
    const cotacao_dolar = getPositiveNumber('Cotação atual do dólar R$: ')

    const valor_em_dolar = getRandomNumber()
    
    console.log(usd_to_brl(cotacao_dolar, valor_em_dolar))
    
}

// número aletório (1 até 100)
const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1
}

const usd_to_brl = (cotacao, valor) => {
    return `\n$ ${valor.toFixed(2)} dólar(es) americanos equivalem a: R$ ${(cotacao * valor).toFixed(2)} Reais`
}

//q4()

function q5(){
    const n = get3digitsNumber('número de 3 dígitos: ')

    console.log(SumOfElements(n))
}

const SumOfElements = (n) =>{
    const c = Math.trunc(n / 100)
    const d = Math.trunc((n % 100) / 10)
    const u =  Math.trunc(n % 10)

    return `\nsoma dos elementos do número = [${c} + ${d} + ${u} = ${c + d + u}] `
}
//q5()

function q6(){
    const km = getPositiveNumber('velocidade em km/h: ')

    console.log(km_to_ms(km))

}

const km_to_ms = (km) =>{
    return `\n${km} km/h equivalem a: ${(km / 3.6).toFixed(1)} m/s`
}

//q6()

function q7(){
    const n1 = getNumber('1º número: ')
    const n2 = getNumber('2º número: ')
    const n3 = getNumber('3º número: ')

    console.log(sum_and_sub(n1, n2, n3))
}

const sum_and_sub = (n1, n2, n3) =>{
    return `\nsoma entre os 2 primeiros = [${n1} + ${n2} = ${n1 + n2}]\nsubtração entre os 2 últimos = [${n2} - ${n3} = ${n2 - n3}]`
}

//q7()

function q8(){
    const n1 = getNumber('1º número: ')
    const n2 = getNumber('2º número: ')

    console.log(div_sum_by_sub(n1, n2))
}

const div_sum_by_sub = (n1, n2) =>{
    const soma = n1 + n2
    const sub = n1 - n2
    const div = soma / sub
    
    if (soma === 0 || sub === 0){
        return '\ndivisão impossível'
    }
    return `\nsoma = [${n1} + ${n2} = ${soma}]\nsubtração = [${n1} - ${n2} = ${sub}]\ndivisão da soma pela subtração = [${soma} / ${sub} = ${div}]`
    
}

//q8()

function q9(){
    const n1 = getNumber('1º número: ')
    const n2 = getNumber('2º número: ')

    console.log(reverse_order(n1, n2))
}

const reverse_order = (n1, n2) =>{
    return `\nnúmeros [${n1}, ${n2}]\nordem inversa [${n2}, ${n1}]`
}

//q9()

function q10(){
    const n1 = getNumberNotNull('1º número: ')
    const n2 = getNumberNotNull('2º número: ')

    console.log(show_quo_and_rest(n1, n2))
}

const show_quo_and_rest = (n1, n2) =>{
    return `\nnúmeros [${n1}, ${n2}]\nquociente da divisão entre os números [${n1 / n2}]\nresto da divisão [${n1 % n2}]`
}

//q10()

function q11(){
    const n = get3digitsNumber('número de 3 dígitos: ')

    console.log(reverse_number(n))
}

const reverse_number = n =>{
    const c = Math.trunc(n / 100)
    const d = Math.trunc((n % 100) / 10)
    const u =  Math.trunc(n % 10)

    return `\nnúmero [${n}]\ninverso [${u}${d}${c}]`
}

//q11()

function q12(){
    const n = getNumber('Digite seu salário: ')

    console.log(salary_increase(n))

}

const salary_increase = n =>{
    return `\nsalário pré-aumento: R$ ${n.toFixed(2)}\nsalário pós-aumento de 25%: R$ ${(n + (n * (25 / 100))).toFixed(2)}`
}

//q12()

function q13(){
    const n = getNumber('valor em R$: ')

    console.log(percent70(n))
}

const percent70 = n =>{
    return `\nvalor: R$ ${n.toFixed(2)}\n70% desse valor: R$ ${(n * (70 / 100)).toFixed(2)}`
}

//q13()

function q14(){
    const [n1, n2, n3] = input('digite as 3 notas ex(7.1,8.1,9): ').split(',').map(Number)
    const [p1, p2, p3] = input('digite o peso das respectivas notas: ').split(',').map(Number)

    console.log(media_ponderada(n1,n2,n3,p1,p2,p3))

}

const media_ponderada = (n1, n2, n3, p1, p2, p3) =>{
    const media = ((n1 * p1) + (n2 * p2) + (n3 * p3)) / (p1 + p2 + p3)

    return `\n[nota ${n1} peso ${p1}, nota ${n2} peso ${p2}, nota ${n3} peso ${p3}]\nmédia: ${media.toFixed(1)}`
}

//q14()

function q15(){
    const base = getNumber('valor da base: ')
    const altura = getNumber('valor da altura: ')

    console.log(area_triangulo(base, altura))

}

const area_triangulo = (base, altura) =>{
    return `\nárea do triângulo = ${((base * altura)/2)}`
}

//q15()

function q16(){
    const lado = getNumber('valor do lado: ')

    console.log(area_quadrado(lado))
}

const area_quadrado = lado =>{
    return `\nárea do quadrado = ${lado ** 2}`
}

//q16()

function q17(){
    const base = getNumber('valor da base: ')
    const altura = getNumber('valor da altura: ')

    console.log(area_retangulo(base, altura))
}

const area_retangulo = (base, altura) =>{
    return `\nárea do retângulo = ${base * altura}`
}

//q17()

function q18(){
    const raio = getNumber('valor do raio da circunferência: ')

    console.log(comprimento_circunferencia(raio))
}

const comprimento_circunferencia = raio =>{
    return `\ncomprimento da circunferência = ${(2 * Math.PI * raio).toFixed(3)}`
}

//q18()

function q19(){
    const raio = getNumber('valor do raio da esfera: ')

    console.log(volume_esfera(raio))
}

const volume_esfera = raio =>{
    return `\nvolume da esfera = ${((4 * Math.PI * raio ** 3) / 3).toFixed(2)}`
}

//q19()

function q20(){
    const celsisus = getNumber('temperatura em graus Celsius: ')

    console.log(celsius_to_fahrenheit(celsisus))

}

const celsius_to_fahrenheit = c =>{
    return `\ntemperatura em graus Celsius: ${c}°\ntemperatura em graus Fahrenheit: ${((9 * c + 160) / 5)}°`
}

//q20()

function q21(){
    const fahrenheit = getNumber('temperatura em graus fahrenheit: ')
    
    console.log(fahrenheit_to_celsius(fahrenheit))
}

const fahrenheit_to_celsius = f =>{
    return `\ntemperatura em graus Fahrenheit: ${f}°\ntemperatura em graus Celsius: ${((5 * f - 160) / 9)}°`
}

//q21()

function q22(){
    const km = getNumber('Quilômetro(s): ')

    console.log(km_to_metro(km))

}

const km_to_metro = km =>{
    return `\n${km} quilômetro(s) equivalem a: ${km * 1000} metro(s)`
}

//q22()

function q23(){
    const kg = getNumber('Kilograma(s): ')

    console.log(kg_to_grama(kg))
}

const kg_to_grama = kg =>{
    return `\n${kg} kilograma(s) equivalem a: ${kg * 1000} grama(s)`
}

//q23()

function q24(){
    const metro = getNumber('metro(s): ')

    console.log(m_to_cm(metro))
}

const m_to_cm = m =>{
    return `\n${m} metro(s) equivalem a: ${m * 100} centímetro(s)`
}

//q24()

function q25(){
    const metro = getIntNumber('metro(s): ')

    console.log(m_to_km_m(metro))
}

const m_to_km_m = m =>{
    return `\n${m} metro(s) equivalem a: ${Math.trunc(m / 1000)} quilômetro(s) e ${m % 1000} metro(s)`
}

//q25()

function q26(){
    const dias = getIntNumber('dia(s): ')

    console.log(dias_to_semana_dias(dias))
}

const dias_to_semana_dias = d =>{
    return `\n${d} dia(s) equivalem a: ${Math.trunc(d / 7)} semana(s) e ${d % 7} dia(s)`
}

//q26()

function q27(){
    const segundos = getIntNumber('segundo(s): ')

    console.log(seg_to_hour_mins_and_seg(segundos))
}

const seg_to_hour_mins_and_seg = s =>{
    return `\n${s} segundo(s) equivalem a: ${Math.trunc(s / 3600)} hora(s), ${Math.trunc((s % 3600) / 60)} minuto(s) e ${s % 60} segundo(s)`
}

//q27()

function q28(){
    const hrs = getIntNumber('hora(s): ')

    console.log(hrs_to_semans_dias_and_hrs(hrs))
}

const hrs_to_semans_dias_and_hrs = hr =>{
    const semana = Math.trunc(hr / (24 * 7))
    const dias = Math.trunc((hr % (24 * 7)) / 24)
    const hrs = hr % 24

    return `\n${hr} hora(s) equivalem a: ${semana} semana(s), ${dias} dia(s) e ${hrs} hora(s)`
}

//q28()

function q29(){
    const meses = getIntNumber('meses: ')

    console.log(mes_to_anos_and_mes(meses))
}

const mes_to_anos_and_mes = mes =>{
    return `\n${mes} mes(es) equivalem a: ${Math.trunc(mes / 12)} ano(s) e ${mes % 12} mes(es)`
}

//q29()

function q30(){
    const mins = getIntNumber('minuto(s): ')

    console.log(mins_to_dias_hrs_and_mins(mins))
}

const mins_to_dias_hrs_and_mins = mins =>{
    const dias = Math.trunc(mins / (24 * 60))
    const hrs = Math.trunc((mins % (24 * 60)) / 60)
    const min = mins % 60

    return `\n${mins} minuto(s) equivalem a: ${dias} dia(s), ${hrs} hora(s) e ${min} minuto(s)`
}

//q30()

function q31(){
    const n_binario = getBinari4digitsNumber('número de 4 dígitos na base binária: ')

    console.log(binari_to_decimal(n_binario))
}

const binari_to_decimal = b =>{
    const [d1, d2, d3, d4] = b.split('').map(Number)
    const decimal = (d1 * 2 ** 3) + (d2 * 2 ** 2) + (d3 * 2 ** 1) + (d4 * 2 ** 0)

    return `\nnúmero na base binária [${b}] equivale a: [${decimal}] na base decimal`

}

//q31()

function q32(){
    const n = get3digitsNumber('número de 3 dígitos: ')

    console.log(dif_n_reverse_n(n))
}

const getReverseNumber = n =>{
    const c = Math.trunc(n / 100)
    const d = Math.trunc((n % 100) / 10)
    const u = n % 10

    const inverso = String(u) + String(d) + String(c) 

    return inverso
}

const dif_n_reverse_n = n =>{
    const inverso = getReverseNumber(n)

    return `\nnúmero [${n}] | inverso [${inverso}]\ndiferença entre o número e o seu inverso: [${n} - ${inverso} = ${n - Number(inverso)}]`
}

//q32()

function q33(){
    const n = get3digitsNumber('número de 3 dígitos: ')

    console.log(sum_n_reverse_n(n))
}

const sum_n_reverse_n = n =>{
    const inverso = getReverseNumber(n)

    return `\nnúmero [${n}] | inverso [${inverso}]\nsoma entre o número e o seu inverso: [${n} + ${inverso} = ${n + Number(inverso)}]`
}

//q33()

function q34(){
    const [n1, n2, n3] = input('digite as notas separadas por vírgula, sem espaço: ').split(',').map(Number)

    console.log(media_aritmetica(n1, n2, n3))
}

const media_aritmetica = (n1, n2, n3) =>{
    const media = (n1 + n2 + n3)/3

    return `\nnotas: [${n1}, ${n2} e ${n3}]\nmedia = ${media.toFixed(1)}`
}

//q34()

function q35(){
    const n = getInt4digitNumber('número de 4 dígitos: ')

    console.log(SumOf4Elements(n))
}

const getInt4digitNumber = msg =>{
    let n = getPositiveNumber(msg)

    if (String(n).length !== 4){
        console.log('digite um número inteiro de 4 digitos')
        n = getInt4digitNumber(msg)
    }

    return n 
}

const SumOf4Elements = n =>{
    const m = Math.trunc(n / 1000)
    const c = Math.trunc((n % 1000) / 100)
    const d = Math.trunc((n % 100) / 10)
    const u = n % 10

    return `\nnúmero [${n}]\nsoma dos elementos do número: [${m} + ${c} + ${d} + ${u} = ${m + c + d + u}]`
}

//q35()

function q36(){
    const [anos, meses, dias] = input('idade em anos, meses e dias ex:(22/17/00): ').split('/').map(Number)

    console.log(age_in_days(anos, meses, dias))

}

const age_in_days = (anos, meses, dias) =>{
    let idade_dias = (anos * 365) + (meses * 30) + dias
    
    // resultado quase exato 

    return `\nidade: ${anos} ano(s), ${meses} mes(es) e ${dias} dia(s) equivalem a: ${idade_dias} dia(s)`
}

//q36()

function q37(){
    const dias = getPositiveNumber('idade em dias: ')

    console.log(age_in_mes_ano_dia(dias))
}

const age_in_mes_ano_dia = dias =>{
    const anos = Math.trunc(dias / 365)
    const meses = Math.trunc((dias % 365) / 30)
    const days = dias % 30 

    // resultado quase exato (oh shit, here we go again)

    return `\nidade: ${dias} dia(s) equivalem a: ${anos} ano(s), ${meses} mes(es) e ${days} dia(s)`
}

//q37()

function q38(){
    const fracao1 = input('1º fração (ex: 1/3): ')
    const fracao2 = input('2º fração: ')

    console.log(sum_fracoes(fracao1, fracao2))

}

const sum_fracoes = (fracao1, fracao2) =>{
    const [num1, den1] = fracao1.split('/').map(Number)
    const [num2, den2] = fracao2.split('/').map(Number)

    // denominadores iguais
    if (den1 === den2){
        return `\nfraçoes: [${num1}/${den1}] + [${num2}/${den2}]\nresultado:\n${num1 + num2}\n—\n${den1}`
    }
    // denominadores diferentes
    else{
        const mmc = calcular_mmc(den1, den2)

        const soma = Math.trunc(mmc / den1 * num1) + (mmc / den2 * num2)

        return `\nfraçoes: [${num1}/${den1}] + [${num2}/${den2}]\nresultado:\n${soma}\n—\n${mmc}`
    }
}

const calcular_mmc = (n1, n2) =>{
    let mmc = n1 > n2 ? n1 : n2

    while (!(mmc % n1 === 0 && mmc % n2 === 0)){
        mmc ++
    }

    return mmc
}

//q38()

function q39(){
    const a = getPositiveNumber('A: ')
    const b = getPositiveNumber('B: ')
    const c = getPositiveNumber('C: ')

    console.log(calcular_expressao(a, b, c))
}

const calcular_expressao = (a, b, c) =>{
    const r = (a + b) ** 2
    const s = (b + c) ** 2
    
    const d  = (r + s) / 2

    return `\nexpressão: D = R + S / 2\nonde, R = (A + B)², R = (${a} + ${b})², R = ${r}\nS = (B + C)², S = (${b} + ${c})², S = ${s}\nD = (${r} + ${s}) / 2, D = ${d} `
}

//q39()

function q40(){
    const anos = getPositiveNumber('quantidade de anos fumando: ')
    const gift = getPositiveNumber('quantidade de cigarros por dia: ')
    const value = getPositiveNumber('valor da carteira de cigarro: ')

    console.log(gasto_fumante(anos, gift, value))
}

const gasto_fumante = (anos, qtd, valor) =>{
    const anos_dias = anos * 365
    const qtd_total_cigarros = anos_dias * qtd
    const qtd_carteiras = Math.trunc(qtd_total_cigarros / 20)
    const total = qtd_carteiras * valor

    return `\nquantidade de dinheiro gasto: R$ ${total.toFixed(2)}`
}

//q40()

function q41(){
    const custo = getPositiveNumber('custo de fabricação: ')

    console.log(custo_consumidor(custo))
}

const custo_consumidor = custo =>{
    const distribuidor = custo * (28 / 100)
    const impostos = custo * (45 / 100)

    return `\ntaxa de 28% do distruibuidor : R$ ${distribuidor.toFixed(2)}\ntaxa de 45% de imposto para o Governo: R$ ${impostos.toFixed(2)}\ncusto do carro para o consumidor: R$ ${(distribuidor + impostos + custo).toFixed(2)}`
}

//q41()

function q42(){
    const p1 = input('x1,y1: ')
    const p2 = input('x2,y2: ')

    console.log(distancia_plano_cartesiano(p1, p2))

}

const distancia_plano_cartesiano = (p1, p2) =>{
    const [x1, y1] = p1.split(',').map(Number)
    const [x2, y2] = p2.split(',').map(Number)

    const d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

    return `\nponto1 (${x1}, ${y1}) e ponto2 (${x2}, ${y2})\ndistância = ${d}`
} 

//q42()

function q43(){
    const [a, b, c, d, e, f] = input('valores de [a, b, c, d, e, f] respectivamente: ').split(',').map(Number)

    console.log(sistema_equacoes_lineares(a, b, c, d, e, f))
}

const sistema_equacoes_lineares = (a, b, c, d, e, f) =>{
    const x = ((c * e) - (b * f)) / ((a * e) - (b * d))
    const y = ((a * f) - (c * d)) / ((a * e) - (b * d))

    return `x = ${x}, y = ${y}`
}

//q43()

function q44(){
    const latao = getPositiveNumber('quantidade de latão(kg): ')

    console.log(constituindo_latao(latao))
}

const constituindo_latao = qtd =>{
    const cobre = qtd * (70 / 100)
    const zinco = qtd * (30 / 100)

    return `para se obter ${qtd} kilograma(s) de latão é necessário:\n${cobre} kilograma(s) de cobre\ne ${zinco} kilograma(s) de zinco `
}

//q44()

function q45(){
    const qtd = getPositiveNumber('informe quantidade para o saque: ')
    
    console.log(caixa_eletronico(qtd))
}

const caixa_eletronico = qtd =>{
    let resto = qtd

    const nota_100 = Math.trunc(resto / 100)
    resto %= 100
    const nota_50 = Math.trunc(resto / 50)
    resto %= 50
    const nota_20 = Math.trunc(resto / 20)
    resto %= 20
    const nota_10 = Math.trunc(resto / 10)
    resto %= 10
    const nota_5 = Math.trunc(resto / 5)
    resto %= 5
    const nota_2 = Math.trunc(resto / 2)

    return `\nvalor: R$ ${qtd.toFixed(2)}\n\n${nota_100} nota(s) de 100\n${nota_50} nota(s) de 50\n${nota_20} nota(s) de 20\n${nota_10} nota(s) de 10\n${nota_5} nota(s) de 5\n${nota_2} nota(s) de 2`
}

//q45()

function q46(){
    const valor = getPositiveNumber('valor da mercadoria: ')

    console.log(entrada_parcelas(valor))
}

const entrada_parcelas = valor =>{
    const resto = valor % 3
    const entrada = Math.trunc(valor / 3) + resto
    const parcelas = Math.trunc(valor / 3)

    return `\nvalor da mercadoria: R$ ${valor.toFixed(2)}\nentrada: R$ ${entrada.toFixed(2)}\n1º parcela: R$ ${parcelas.toFixed(2)}\n2º parcela: R$ ${parcelas.toFixed(2)}`
}

q46()