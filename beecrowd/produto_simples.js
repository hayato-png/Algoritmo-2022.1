import { bee_input } from "./bee_input.js"

const lines = bee_input('1004.txt')

function main(){
    const a = Number(lines[0])
    const b = Number(lines[1])

    console.log(produto_simples(a, b))
}

const produto_simples = (a, b) =>{
    return `PROD = ${a * b}`
}

main()