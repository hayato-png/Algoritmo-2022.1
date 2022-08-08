import { bee_input } from "./bee_input.js"

const lines = bee_input('1002.txt')

function main(){
    const r = Number(lines[0])

    console.log(area_circulo(r))
}

const area_circulo = r =>{
    return `A=${(3.14159 * r ** 2).toFixed(4)}`
}

main()