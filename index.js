// cria classe de pauimetro

class Parquimetro {
    constructor(valorPago) {
        this.valorPago = valorPago
        this.valorMinimo = 1.00
        this.resultado = ""
    }
// função para calcular troco
    calcular() {
// condição de valor insuficiente se valor for menor que 1
        if (this.valorPago < this.valorMinimo) {
            this.resultado = "Valor insuficiente"
            return
        }
// logica do troco e mostrar na tela o tempo ganho 
        if (this.valorPago >= 3) {
            this.resultado = `Tempo: 120 minutos Troco: R$ ${(this.valorPago - 3).toFixed(2)}`
        }
        else if (this.valorPago >= 1.5) {
            this.resultado = `Tempo: 60 minutos Troco: R$ ${(this.valorPago - 1.5).toFixed(2)}`
        }
        else {
            this.resultado = `Tempo: 30 minutos Troco: R$ ${(this.valorPago - 1).toFixed(2)}`
        }
    }

   }
// chamar o codigo pelo botão 
   function depositar() {
    const valorpago = Number(document.getElementById("valorpago").value)

    const chamarclass = new Parquimetro(valorpago)

    chamarclass.calcular()
    
    document.getElementById("msg").textContent = chamarclass.resultado
    document.getElementById("valorpago").value = "" 
   }
