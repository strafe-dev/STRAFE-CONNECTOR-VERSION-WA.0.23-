function preprocessMessage(message) {
    message = message.trim();

    if (message.toLowerCase() === "!comandos") {
        console.log("⏹️ Comando '!comandos' detectado, no se enviará.");
        return null;
    }

    if (/^!img(\s+.+)/i.test(message)) {
        return message.replace(/^!img/i, "!imagine");
    }

    if (/^!img$/i.test(message)) {
        console.log("⚠️ Comando '!img' sin contenido. Ignorado.");
        return null;
    }

    return message;
}

module.exports = preprocessMessage;
