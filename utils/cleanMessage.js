function cleanMessage(message) {
    return message
        .normalize("NFD")
        .replace(/ñ/gi, "ñ")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9ñÑ¿?.\s]/g, "")
        .replace(/(.)\1{2,}/g, "$1$1")
        .toLowerCase();
}

module.exports = cleanMessage;
