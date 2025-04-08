🚀 STRAFE CONNECTOR - VERSION WA.0.23 

Un bot automático que toma los mensajes del chat en vivo de TikTok y los envía al chat de tu stream en Kick.  
Ideal para **streamers que transmiten en ambas plataformas**.  
👉 ¡Fácil de usar, personalizable y rápido de configurar!

---

🧠 ¿Cómo funciona?  BASICO
- Cuando inicias el bot primero abre tu navegador Brave en el cual ya debes tener abierta tu cuenta de Kick más adelante te enseño a como configurarlo
- Luego accedete a tu canal principal ya configurado y envía un mensaje automático de prueba, lo veras en la seccion de mensajes de Kick
- Luego en consola intenta conectarse a tu stream de TikTok el cual tambien debe estar configurado, y una vez que se conecta empieza a recibir los mensajes de tu chat
- Una vez que los recibe los procesa, puedes añadir tus comandos de preferencia que tengas en Kick o Tiktok en la carpeta "Services" lo podras encontrar
- Una vez que los procesa y añade comandos los envía a tu canal de Kick de forma inmediata.
  
🧠 ¿Cómo funciona?  TÉCNICO
- Se conecta al chat en vivo de tu stream de TikTok usando `tiktok-live-connector`.
- Usa `Selenium WebDriver` para abrir tu transmisión de Kick en Brave.
- Procesa los mensajes recibidos de TikTok y los envía al chat de Kick como si los escribieras tú.
- Puedes modificar comandos en la carpeta `utils/` o manejar eventos desde `services/`.

---
🛠️ Requisitos

Antes de comenzar, necesitás tener:

1. [Node.js](https://nodejs.org/es/download) instalado.
2. El navegador Brave instalado en tu PC.  
   👉 Descarga oficial: [https://brave.com/es](https://brave.com/es)
3. Una cuenta de TikTok y una de Kick la cual debe estar logueada en Brave.
4. Tener la sesión iniciada en Kick desde Brave (recomendado con una cuenta secundaria que no tenga permisos de moderador en tu canal principal).

---


⚙️ Configuración del navegador Brave

El navegador Brave debe estar instalado en esta ruta por defecto:
C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe
Si esta instalado en otra ruta puedes cambiarla en el código sin problemas. 
👉 Una vez que inicices sesión en tu canal de Kick en Brave se carga tu perfil y deberás poner tu nombre:
                                               aqui donde dice strafe 
                                                 va tu nombre owo
    options.addArguments("--user-data-dir=C:\\Users\\STRAFE\\AppData\\Local\\BraveSoftware\\Brave-Browser\\User Data");
    options.addArguments("--profile-directory=Default");

🔽 ¿Cómo instalarlo y usarlo?
1️⃣ Descargar el proyecto
Entrá a este repositorio.

Click en "Code" → "Download ZIP".

Extrae el contenido en una carpeta (Ej: Escritorio).


2️⃣ Instalar dependencias
Abre la carpeta del proyecto con Visual Studio Code o similar.

Abre una terminal dentro de la carpeta.

Escribe los siguientes comandos:

npm install tiktok-live-connector
npm install selenium-webdriver



3️⃣ Configurar tu usuario
Abrí el archivo: config/config.json

Cambiá el contenido con tu usuario y link de stream. Ejemplo:

{
  "tiktokUsername": "strafe.ez",
  "kickStreamUrl": "https://kick.com/strafe-wa"
}


4️⃣ Ejecutar el bot
Asegurate de cerrar completamente Brave antes de ejecutar el bot (si no, puede fallar).

Luego ejecuta en la terminal de VS Code:

node index.js

✅ Si todo está bien, se enviará automáticamente un mensaje en tu chat de Kick.
🕐 El bot esperará a que inicies stream en TikTok para comenzar a leer los mensajes y enviarlos a Kick.

ESTRUCTURA DEL PROYECTO 

STRAFECONNECTOR/
│
config/
config.json  Archivo con las configuraciones (usuario de TikTok, link de Kick)
│
services/
tiktokService.js  Conexión y gestión de eventos desde TikTok
kickService.js    Envío de mensajes a Kick utilizando Selenium
│
utils/
cleanMessage.js     Limpieza de mensajes
preprocessMessage.js Preprocesamiento de comandos y filtros
messageQueue.js      Cola de mensajes y lógica de envío secuencial
│
browser/
startBrowser.js   Lógica para abrir el navegador con perfil de Brave
│
index.js              Archivo principal que orquesta todo
│
package.json          Dependencias y scripts del proyecto


---


🔐 Licencia
Este proyecto está bajo licencia MIT.
Podés usarlo, modificarlo y compartirlo libremente.
👉 El archivo LICENSE ya está incluido en el repositorio.

✨ Creado por STRAFE






