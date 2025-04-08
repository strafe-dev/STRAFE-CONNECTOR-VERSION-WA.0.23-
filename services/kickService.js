const { By, Key } = require("selenium-webdriver");
const cleanMessage = require("../utils/cleanMessage");

const validCommands = [
    "!ph", "!ch", "!dr", "!mc", "!te",
    "!gekko", "!cy", "!jett", "!kj", "!omen", "!brim"
];

async function sendMessage(driver, message) {
    try {
        let chatInput = await driver.findElement(By.css("div[contenteditable='true']"));
        const words = message.trim().split(/\s+/);
        const prefix = words[0].toLowerCase();

        if (prefix === "!imagine") {
            const body = words.slice(1).join(" ");
            if (!body.trim()) return;
            const formatted = `!imagine ${cleanMessage(body)}`;
            return await chatInput.sendKeys(formatted, Key.ENTER);
        }

        const command = validCommands.includes(prefix)
            ? prefix
            : validCommands[Math.floor(Math.random() * validCommands.length)];

        const body = validCommands.includes(prefix)
            ? words.slice(1).join(" ")
            : words.join(" ");

        const formatted = `${command} ${cleanMessage(body)}`;
        await chatInput.sendKeys(formatted, Key.ENTER);
    } catch (err) {
        console.error("❌ Error enviando a Kick:", err);
    }
}

module.exports = sendMessage;
