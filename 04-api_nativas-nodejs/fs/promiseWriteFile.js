const { rejects } = require('assert')
const { writeFile } = require('fs')

function criaArquivo(name, content) {
    return new Promise((resolve, reject) => {

        writeFile(name, content, err => {
            if (err) reject(err)
            resolve()
        })
    })
}

criaArquivo('promiseArquivo.txt', 'Criando um arquivo utilizando promises')
    .then(() => console.log('Arquivo promisearquivo.txt criado com sucesso!'))
    .catch(err => console.log(err))