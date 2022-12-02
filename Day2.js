//A = Rock
//B = Paper
//C = Sciccors
//X = Rock = 1
//Y = Paper = 2
//Z = Sciccors = 3

//Loss = 0
//Draw = 3
//Win = 6
console.time('label')
let input = require('fs').readFileSync('./day2input.txt', 'utf-8')
let inputArray = input.split('\n')
let totalScore = 0
inputArray.forEach(i => {
    i = i.replace('\r', '')
    let iArray = i.split(' ')
    let play1 = iArray[0]
    let play2 = iArray[1]

    if(play1 === 'A' && play2 === 'X') {
        totalScore += 3
    } else if(play1 === 'A' && play2 === 'Y') {
        totalScore += 4
    } else if(play1 === 'A' && play2 === 'Z') {
        totalScore += 8 
    } else if(play1 === 'B' && play2 === 'X') {
        totalScore += 1
    } else if(play1 === 'B' && play2 === 'Y') {
        totalScore += 5
    } else if(play1 === 'B' && play2 === 'Z') {
        totalScore += 9
    } else if(play1 === 'C' && play2 === 'X') {
        totalScore += 2
    } else if(play1 === 'C' && play2 === 'Y') {
        totalScore += 6
    } else if(play1 === 'C' && play2 === 'Z') {
        totalScore += 7
    }
})
console.log(totalScore)
console.timeEnd('label')