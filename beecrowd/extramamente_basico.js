import { bee_input } from "./bee_input.js"

const lines = bee_input('1001.txt')

function main(){
    const a = Number(lines[0])
    const b = Number(lines[1])

    console.log(sum(a, b))
}

const sum = (a, b) =>{
    return `X = ${a + b}`
}

main()