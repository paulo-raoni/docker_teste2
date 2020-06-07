
global.log4js = require("log4js");
global.log4js.configure("./config/log4js.json");
var jsonLayout = require("log4js-json-layout");
global.log4js.layouts.addLayout("json", jsonLayout);

const BUCKET = process.env.environment || process.env.ENVIRONMENT;

const listaChave = [{ chave: 'PropertiesDB', valor: 'base_dados' }];

function PropertiesService() { }

PropertiesService.prototype.init = function (callback) {

    if (!BUCKET) {
        throw new Error('environment not found');
    }
    carregarProperties(listaChave, 0, function (erro, resultado) {

        if (erro) {
            callback(erro, null);
        } else {
            callback(null, resultado);
        }

    });

}

function dataBaseDefinition(listaChave) {
    global['PropertiesDB'] = {
        dbDialect:"mysql",
        dbHost:"docker-teste",
        dbLog:false,
        dbName:"docker-teste",
        dbPassword:"docker",
        dbPort:3306,
        dbUser:"docker",
        key:"docker"
    }
}

function kmsDecryptBD(valor) {
    return new Promise((resolve, reject) => brcap_aws.Kms_decrypt(valor.Body, region, (error, sucess) => error ? reject(error) : resolve(JSON.parse(sucess))));
}
module.exports = PropertiesService;

