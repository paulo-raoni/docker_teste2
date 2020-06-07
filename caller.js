var log4js = require('log4js');
var logger = log4js.getLogger('[ProjetoDockerController]');
log4js.configure('./config/log4js.json');

const pegaMensagemDockerTeste = async () => {
    logger.debug("Iniciou pegaMensagemDockerTeste");
    const url = `localhost:8086/mensagem-docker-teste/`;
    const mensagem  = await new Promise((resolve, reject) => {
            request({
                url: url,
                method: 'GET'
            }, function (error, body) {               
                if (error) {
                    logger.error(error);
                    reject(error);
                } else {
                    resolve(JSON.parse(body));
                }
            });	
    });	
    return mensagem;
};

module.exports = function caller() {
    global.pegaMensagemDockerTeste;
}