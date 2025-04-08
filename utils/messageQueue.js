let queue = [];
let processing = false;

async function processQueue(sendFunction) {
    if (processing) return;
    processing = true;

    while (queue.length > 0) {
        const message = queue.shift();
        await sendFunction(message);
    }

    processing = false;
}

function addToQueue(message, sendFunction) {
    queue.push(message);
    processQueue(sendFunction);
}

module.exports = { addToQueue };
