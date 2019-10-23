// 1. Menyusun Barisan Bintang

for (var star=0; star<5; star++) {
    console.log(`*`)
}


// 2. Menyusun Barisan Bintang Dengan Nested Looping

for (var i=-0; i<5; i++) {
    var kata =``
    for (var j=1; j<=5; j++) {
        kata = kata + `*`
    }
    console.log(kata)
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

for (var i=1;i<=5; i++) {
    var kata =``
    for (var j=0; j<i; j++) {
        kata = kata + `*`        
    }
    console.log(kata)
}
