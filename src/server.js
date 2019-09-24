var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao tentar se conectar ao mongoDB'));
db.once('open', function(){
    console.log("conexao bem feita");
});

// objeto produto, sera transformado em modulo pela funcao mongoose.model()
var produtoSchema = new mongoose.Schema( {nome: String});

    // modulo para produtoSchema, recebe dois parmetros: 1 nome da  "Collection", 2 modelo Schema
    var produtoQualquer = mongoose.model('produtoDB', produtoSchema);

// produto especifico, instancia do objeto produtoQualquer
var refri = new produtoQualquer({nome: 'Fanta'});

refri.save().then(()=>{
    console.log('dados gravado com sucesso ');
}).catch((erro)=>{
    console.log("Erro na gravacao "+ erro);
});