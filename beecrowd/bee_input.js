import fs from 'fs';

export const bee_input = msg =>{
    const input = fs.readFileSync( msg, 'utf8')
    const lines = input.split('\n');

    return lines
}