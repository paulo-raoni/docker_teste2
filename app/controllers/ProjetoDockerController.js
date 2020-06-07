var log4js = require('log4js');
var logger = log4js.getLogger('[ProjetoDockerController]');
log4js.configure('./config/log4js.json');

exports.retornaMensagemDockerTeste2 = async () => {
	logger.debug("Iniciou retornaMensagemDockerTeste2");
	return mensagem = {mensagem: "projeto-docker_teste2"};
};
