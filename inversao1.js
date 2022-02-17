let x =parseInt(prompt('Insira o valor de X'))
let y =parseInt(prompt('Insira o valor de Y'))

alert(`Valor de X =${x} e o valor de Y =${y}`)

let z = x

x = y
y = z

alert(`O valor de X= ${x} e o valor de Y = ${y}`)