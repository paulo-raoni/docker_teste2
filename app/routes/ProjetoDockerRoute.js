module.exports = function(app) {
	const controller = require('../controllers/ProjetoDockerController');

	app.get('/mensagem-docker-teste/', controller.retornaMensagemDockerTeste2);
};
