console.log('Exibindo uma mensagem no console!')

// erro
console.error(new Error('Exibindo mensagem de erro, temos problemas!'))

const carros = ['GM', 'FIAT', 'FORD', 'VW', 'Renault', 'Honda', 'Hyundai']
console.table(carros)

const dados = {name: 'Israel Oliveira', empresa: 'DevTech'}
console.table(dados)

console.count('processo')
console.count('processo')
console.count('processo')

console.log('Resetando o processo')
console.countReset('processo')

console.count('processo')

console.time('contador')
for (let index = 0; index < 100; index++) {
    // console.log('-')
}
console.timeEnd('contador')

console.assert(true, 'Faça alguma coisa')
console.assert(false, 'Ih Rapaz %s, que pena!', 'Não Funcionou')

// limpa todos os dados do terminal
// console.clear()
