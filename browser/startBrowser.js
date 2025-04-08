const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function startBrowser(kickStreamUrl) {
    const options = new chrome.Options();

    // 👉 Usa Brave como navegador base
    options.setChromeBinaryPath("C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe");

    // 👉 Carga tu perfil normal de Brave
    options.addArguments("--user-data-dir=C:\\Users\\STRAFE\\AppData\\Local\\BraveSoftware\\Brave-Browser\\User Data");
    options.addArguments("--profile-directory=Default");

    // 👉 Opciones para ocultar automatización
    options.addArguments("--disable-blink-features=AutomationControlled");
    options.addArguments("--disable-infobars");
    options.excludeSwitches(["enable-automation"]);
    options.addArguments("--start-maximized");

    const driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(options)
        .build();

    // ✅ Inyectar JavaScript para parecer un humano real
    await driver.executeScript(`
        Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
        window.navigator.chrome = { runtime: {} };
        Object.defineProperty(navigator, 'languages', { get: () => ['es-ES', 'es'] });
        Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3, 4, 5] });
    `);

    await driver.get(kickStreamUrl);
    await driver.sleep(5000);

    return driver;
}

module.exports = startBrowser;
