function generarTabla() {
    let numero = parseInt(document.getElementById('numero').value);
    let operacion = document.getElementById('operacion').value;
    let resultado = document.getElementById('resultado');
    let tabla = '';
  
    if (operacion === 'multiplicacion') {
        for (let i = 1; i <= 10; i++) {
            tabla += `${numero} x ${i} = ${numero * i}<br>`;
        }
    } else if (operacion === 'suma') {
        let suma = 0;
        for (let i = 1; i <= 10; i++) {
            suma += i;
            tabla += `${numero} + ${i} = ${numero + i}<br>`;
            // if (i < 10) {
            //     tabla += ' + ';
            // } else {
            //     tabla += ' = ';
            // }
        }
    }
  
    resultado.innerHTML = tabla;
}