let phrase = "JavaScript is fun!";

for (let i = 0; i < phrase.length; i++) {
    console.log(phrase[i]);
}
let counter = 0;
for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].toLowerCase() === 'a') {  
        counter++;
    }
}
console.log("A letra 'a' aparece", counter, "vezes.");

let number = 1;
while (number <= 10) {
    console.log(number);
    number++;
}
