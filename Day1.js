const fs = require('fs')
let input
let counts = []

async function main() {
    input = fs.readFileSync('./day1input.txt', 'utf-8')
    input = input.split('\n')
    let count
    input.forEach(i => {
        if(i === '\r') { 
            console.log(i)
            counts.push(count)
            console.log(count)
            count = 0
        } else {
            count += parseInt(i)
        }
    })
    counts.sort((a, b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    })
    counts.reverse()
    console.log(counts[0] + counts[1] + counts[2])
}
main()