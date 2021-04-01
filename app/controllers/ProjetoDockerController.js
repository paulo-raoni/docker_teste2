var log4js = require('log4js');
var logger = log4js.getLogger('[ProjetoDockerController]');
log4js.configure('./config/log4js.json');
const request = require('request');

exports.retornaMensagemDockerTeste2 = async () => {
	const dadosObtidos = pegaDados();
	logger.debug("Iniciou retornaMensagemDockerTeste2");
	return mensagem = {mensagem: "projeto-docker_teste2"};
};


retornaTweet = async () => {
	const dadosObtidos = await pegaDados();
	logger.debug("Iniciou retornaMensagemDockerTeste2");
	return dadosObtidos;
};

const pegaDados = () => {
	return new Promise((resolve, reject) => {
        const url = "http://localhost:8086/dados/";
        request({
            url: url,
            method: 'GET'
        }, function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                if (response.statusCode == 200) {
                    resolve(JSON.parse(body));
                } else {
                    reject(body);
                }
            }
        });
    })
}