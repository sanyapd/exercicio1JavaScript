let numero01 = prompt('Digite valor 01: ');
let numero02 = prompt('Digite valor 02: ');
let numero03 = prompt('Digite valor 03: ');

let numero_01 = parseInt(numero01);
let numero_02 = parseInt(numero02);
let numero_03 = parseInt(numero03);

/**Faça um script que leia três números inteiros e mostre o maior deles. else if evita que passe para condiç~eos desnecessario */

if (numero_01 > numero_02 && numero_01 > numero_03) {
    alert(`O número maior é ${numero_01}`)
}

else if (numero_02 > numero_01 && numero_02 > numero_03) {
    alert(`O número maior é ${numero_02}`)

}
else if (numero_03 > numero_01 && numero_03 > numero_02) {
    alert(`O número maior é ${numero_03}`)
}