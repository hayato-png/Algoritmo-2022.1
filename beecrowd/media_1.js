import { bee_input } from "./bee_input.js"

const lines = bee_input('1005.txt')

function main(){
    const a = Number(lines[0])
    const b = Number(lines[1])

    console.log(media_ponderada(a, b))
}

const media_ponderada = (a, b) =>{
    const media = ((a * 3.5) + (b * 7.5)) / 11

    return `MEDIA = ${media.toFixed(5)}`
}

main()