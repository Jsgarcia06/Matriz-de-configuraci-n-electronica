
const configuracionElectronicaCompleta = [
    ['1s', '',   '',   ''  ],
    ['2s', '2p', '',   ''  ],
    ['3s', '3p', '3d', ''  ],
    ['4s', '4p', '4d', '4f'],
    ['5s', '5p', '5d', '5f'],
    ['6s', '6p', '6d', ''  ],
    ['7s', '7p', '',   ''  ],
    ['8s', '',   '',   ''  ]
];


let filas = parseInt(prompt("Ingrese el número de filas (1-8):", "8"));
let columnas = parseInt(prompt("Ingrese el número de columnas (1-4):", "4"));


filas = isNaN(filas) ? 8 : Math.min(Math.max(1, filas), 8);
columnas = isNaN(columnas) ? 4 : Math.min(Math.max(1, columnas), 4);


const matrizRecortada = [];
for (let i = 0; i < filas; i++) {
    const fila = [];
    for (let j = 0; j < columnas; j++) {
        if (i < configuracionElectronicaCompleta.length && j < configuracionElectronicaCompleta[i].length) {
            fila.push(configuracionElectronicaCompleta[i][j]);
        } else {
            fila.push('');
        }
    }
    matrizRecortada.push(fila);
}


console.log("CONFIGURACIÓN ELECTRÓNICA");
console.log(`(Mostrando ${filas} fila(s) y ${columnas} columna(s))`);
console.log(""); 

for (let fila = 0; fila < matrizRecortada.length; fila++) {
    let linea = '';
    let primerElemento = true;
    
    for (let columna = 0; columna < matrizRecortada[fila].length; columna++) {
        const orbital = matrizRecortada[fila][columna];
        
        if (orbital !== '') {
            if (!primerElemento) {
                linea += '  '; 
            }
            linea += orbital;
            primerElemento = false;
        }
    }
    
    console.log(linea);
}