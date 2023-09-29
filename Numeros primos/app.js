var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question('Digite um número: ', function(numero){

    let n = numero
    let QtdDivisores = 0

    if (n == '') {
        console.log("ERRO: O número não pode estar vazio")
        entradaDeDados.close()

    } else if (isNaN(n)) {
        console.log('ERRO: O número não pode ser uma letra')
        entradaDeDados.close()
    } else {
        for (let i = 1; i <= n; i++) {
            if (n == 2) {
                break;
            } else if (n % 2 == 0) {
                console.log("Não é primo");
                entradaDeDados.close()
                break;
            } else if (n % 2 == 1) {
                if (n % i == 0) {
                    QtdDivisores+= 1;
                    if (QtdDivisores > 2) {
                        console.log("Não é primo");
                        entradaDeDados.close()
                        break;
                    }
                }
            }
        }

        if (QtdDivisores == 2) {
            console.log("É primo");
            entradaDeDados.close()
        } else if (numero == 2) {
            console.log("É primo");
            entradaDeDados.close()
        }
    }
})