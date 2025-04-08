const { WebcastPushConnection } = require("tiktok-live-connector");

function tiktokService(username, onMessage, onReconnect) {
    const connection = new WebcastPushConnection(username);

    async function connect() {
        while (true) {
            try {
                console.log(`⌛ Conectando a TikTok Live de ${username}...`);
                await connection.connect();
                console.log(`✅ Conectado a TikTok Live`);
                break;
            } catch {
                console.log("❌ Falló la conexión. Reintentando...");
                await new Promise(res => setTimeout(res, 10000));
            }
        }
    }

    connection.on("chat", data => {
        onMessage(data.comment);
    });

    connection.on("disconnect", async () => {
        console.log("⚠️ Desconectado de TikTok. Reintentando...");
        await onReconnect();
    });

    return { connect };
}

module.exports = tiktokService;
