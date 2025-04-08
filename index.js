const fs = require("fs");
const startBrowser = require("./browser/startBrowser");
const preprocessMessage = require("./utils/preprocessMessage");
const sendMessage = require("./services/kickService");
const tiktokService = require("./services/tiktokService");
const { addToQueue } = require("./utils/messageQueue");

const config = JSON.parse(fs.readFileSync("./config/config.json"));
const { tiktokUsername, kickStreamUrl } = config;

let driver;

(async () => {
    driver = await startBrowser(kickStreamUrl);

    const sendToKick = async (rawMessage) => {
        const processed = preprocessMessage(rawMessage);
        if (processed) await sendMessage(driver, processed);
    };

    const tiktok = tiktokService(tiktokUsername, (msg) => {
        addToQueue(msg, sendToKick);
    }, async () => {
        await tiktok.connect();
    });

    // Mensaje inicial de prueba
    addToQueue("!bienvenidos al stream", sendToKick);

    await tiktok.connect();
})();
