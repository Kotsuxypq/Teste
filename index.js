const { connect } = require("./connection");
const { load } = require("./loader");
const { infoLog, bannerLog } = require("./utils/logger");

async function start() {
  bannerLog();
  infoLog("Iniciando meus componentes internos...");

  const socket = await connect();

  load(socket);

  // Enviar mensagem após a inicialização do bot
  const chatId = "120363327508436689@g.us"; // Use um ID de chat padrão ou algum sistema para pegar o chat atual
  await sendStartupMessage(socket, chatId);
}

async function sendStartupMessage(socket, chatId) {
  const mensagem = "🔄 O bot foi reiniciado e está ativo novamente!";
  
  try {
    await socket.sendMessage(chatId, { text: mensagem });
    console.log("Mensagem enviada após reinicialização!");
  } catch (err) {
    console.error("Erro ao enviar mensagem após reinicialização:", err);
  }
}

start();
