

function balikKata(kata) {
    kataLength = kata.length
        var kata1 = ``
        for (var word=kataLength-1; word>=0;word--) {
            kata1 = kata1 + kata[word]           
        }        
        return kata1
}

console.log(balikKata('Hello World and Coders')); 
console.log(balikKata('John Doe')); 
console.log(balikKata('I am a bookworm')); 
console.log(balikKata('Coding is my hobby')); 
console.log(balikKata('Super')); 