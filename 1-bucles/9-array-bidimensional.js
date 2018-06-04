
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
    [],
    [],
    []
]
for (let filas = 0; filas < matriz.length; filas++){
    for(let colum = 0; colum < 3; colum++)
        matriz[filas][colum] = '' + filas + colum;
    
    
}
console.log(matriz);
