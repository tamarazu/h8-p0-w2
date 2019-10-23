// 1. Melakukan Looping Menggunakan While


console.log('LOOPING PERTAMA')

var angka1=0

while (angka1 < 20) {
    angka1 += 2
    console.log(`${angka1} - I love coding`)
}

console.log('LOOPING KEDUA')

var angka2=22

while (angka2 > 0) {
    angka2 -= 2
    console.log(`${angka2} - I will be fullstack developer`)
}

//2. Melakukan Looping Menggunakan For

console.log(`LOOPING PERTAMA`)

for (var angka3 = 1; angka3 < 21; angka3++) {
    console.log(`${angka3} - I love coding `)
}

console.log(`LOOPING KEDUA`)

for (var angka4 = 20; angka4 > 0; angka4--) {
    console.log(`${angka4} - I will be fullstack developer `)
}


//3. Angka Ganjil dan Genap


var number = 0

while (number < 101) {
    if (number % 2 === 0){
        console.log(`${number} Genap`)
    } else {
        console.log(`${number} Ganjil`)
    }
    number++
}


var number = 0

while (number < 101) {
    if (number % 3 === 0){
        console.log(`${number} Kelipatan 3`)
    } else {
        console.log(`${number}`)
    }
    number +=2
}


var number = 0

while (number < 101) {
    if (number % 6 === 0){
        console.log(`${number} Kelipatan 6`)
    } else {
        console.log(`${number}`)
    }
    number +=5
}


var number = 0

while (number < 101) {
    if (number % 10 === 0){
        console.log(`${number} Kelipatan 10`)
    } else {
        console.log(`${number}`)
    }
    number +=9
}