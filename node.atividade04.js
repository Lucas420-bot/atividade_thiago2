let x = 100;

function testScope() {
    let x = 50;  
    console.log("Dentro da função, x = " + x);  

    if (true) {
        let x = 30; 
        console.log("Dentro do bloco if, x = " + x);  
    }

    console.log("Depois do bloco if, dentro da função, x = " + x);
}

testScope();

console.log("Fora da função, x = " + x);  
