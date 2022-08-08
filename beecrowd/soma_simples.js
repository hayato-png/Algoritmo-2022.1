import { bee_input } from "./bee_input.js"

const lines = bee_input('1003.txt')

function main(){
    const a = Number(lines[0])
    const b = Number(lines[1])

    console.log(sum(a, b))
}

const sum = (a, b) =>{
    return `SOMA = ${a + b}`
}

main()