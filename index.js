const client = require('pg').Client
const cliente = new client({
    user: "postgres",
    password: "admin123",
    host: "localhost",
    port: 5432,
    database: "NorthWind"
})

/*cliente.connect()
cliente.query("select * from visitante")
.then(results => {
    const resultado = results.rows
    console.log(resultado)
})
.finally(() => cliente.end())*/

getVisitante()

async function getVisitante(){
try{
    console.log("iniciando a conexão.")
    await cliente.connect()
    console.log("conexão bom sucedida!")
    const resultado = await cliente.query('Select * from "NorthWind".visitante')
    console.table(resultado.rows)
}
catch (ex){
    console.log("Ocorreu no getVisitante. Erro:"+ ex)
}
finally{
    await cliente.end()
    console.log("cliente foi desconectado.")
}
}