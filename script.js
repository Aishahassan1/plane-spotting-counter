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
counterElA.textContent = counta 
}

function btntwo() {
    countb += 1
    counterElB.textContent = countb
}

function btnthree() {
    countc += 1
    counterElC.textContent = countc
}

function btnfour() {
    countd += 1
    counterElD.textContent = countd
}

function reset() {
    counterElA.textContent = 0
    counterElB.textContent = 0
    counterElC.textContent = 0
    counterElD.textContent = 0
    count = 0
}
