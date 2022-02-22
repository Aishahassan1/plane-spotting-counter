const counterElA = document.querySelector('#count1')
const counterElB = document.querySelector('#count2')
const counterElC = document.querySelector('#count3')
const counterElD = document.querySelector('#count4')

let counta = 0
let countb = 0
let countc = 0
let countd = 0


function btnone() {
counta += 1
counterElA.textContent = 'Count: ' + counta 
}

function btntwo() {
    countb += 1
    counterElB.textContent = 'Count: ' +countb
}

function btnthree() {
    countc += 1
    counterElC.textContent = 'Count: ' +countc
}

function btnfour() {
    countd += 1
    counterElD.textContent = 'Count: ' +countd
}

function reset() {
    let countStr = 'Count: '
    counterElA.textContent = countStr + 0
    counta = 0
    counterElB.textContent = countStr + 0
    countb = 0
    counterElC.textContent = countStr + 0
    countc = 0
    counterElD.textContent = countStr + 0
    countd = 0

}
