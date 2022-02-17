let lado_01 = prompt('Digite um lado 01: ');
let lado_02 = prompt('Digite um lado 02: ');
let lado_03 = prompt('Digite um lado 03: ');
let lado01 = parseInt(lado_01);
let lado02 = parseInt(lado_02);
let lado03 = parseInt(lado_03);
if(lado01 + lado02 > lado03 && lado01 + lado03 > lado02 && lado02 + lado03 > lado01) {

    if(lado01 == lado02 && lado01 == lado03)
        alert('Triangulo Equilatero');
    else
        if(lado01 == lado02 || lado01 == lado03 || lado02 == lado03)
            alert('Triangulo Isosceles');
        else
           alert('Triangulo Escaleno');
}
else
    alert('Os 3 lados NAO formam um triangulo!')