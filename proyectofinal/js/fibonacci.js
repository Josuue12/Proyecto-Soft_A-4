function generarSecuencia() {
    let cantidad = parseInt(document.getElementById('numero').value);
    
    let a = 0, b = 1;
    let resultado = [];
    for (let i = 0; i < cantidad; i++) {
      resultado.push(a);
      let temp = a;
      a = b;
      b = temp + b;
    }
    document.getElementById('resultado').textContent = resultado.join(', ');
  }