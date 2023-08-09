require('./subdirect/sub')

console.log('----------------------------------------------------------')
console.log(`Nomde do Arquivo: `, __filename)
console.log(`Diretório do Arquivo: `, __dirname)
console.log(`Diretório em que foi invodado: `, process.cwd())
console.log(`Sistema Operacional: `, process.env.OS)
console.log(`Usuário no SO: `, process.env.USERNAME)
console.log(`Idioma: `, process.env.LANG)
console.log(`Nome do Server: `, process.env.COMPUTERNAME)

switch (process.argv[2]) {
    case '-a':
        console.log('execute rotina principal')
        break
    case '-i':
        console.log('execute instalação')
        break
    case '-q':
        console.log('encerrando aplicação')
        process.exit() // interrompe imediatamente o código
        break
    default:
        console.log('Parâmetro inválido')
}

console.log(`Ambiente do Servidor: `, process.platform)