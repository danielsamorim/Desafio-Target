const fs = require('fs');

let obj = fs.readFileSync("dados.json", "utf-8")

const mes = JSON.parse(obj)

const valorPositivo = mes.filter(mes => (mes.valor > 0))

const media = valorPositivo.reduce((total, item) =>{
  return (total +item.valor)
}, 0)/valorPositivo.length;

function maiorValor(){
  let max
  let indice = []
    for(let mes in valorPositivo){
      indice.push(valorPositivo[mes].valor)
    }

    max = Math.max(... indice)

    return valorPositivo.find(elemento => elemento.valor == max)
}

function menorValor(){
  let min 
  let indice = []
    for(let mes in valorPositivo){
      indice.push(valorPositivo[mes].valor)
    }
    min = Math.min(... indice)

    return valorPositivo.find(elemento => elemento.valor == min)
}

const superiorMedia = valorPositivo.filter(elemento => elemento.valor > media)
const minimo = menorValor()
const maximo = maiorValor()


console.log(`O menor valor de faturamento é ${minimo.valor.toFixed(2)}, ocorrido no dia ${minimo.dia}`)
console.log(`O maior valor de faturamento é ${maximo.valor.toFixed(2)} ocorrido no dia ${maximo.dia}`)
console.log("Dias com faturamento diário foi superior à média mensal: " +  superiorMedia.length);