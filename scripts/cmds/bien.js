module.exports = { config: { name: "Bien", version: "1.0", author: "Jaychris Garcia", countDown: 5, role: 0, shortDescription: "sarcasm", longDescription: "sarcasm", category: "reply", }, onStart: async function(){}, onChat: async function({ event, message, getLang }) { if (event.body && event.body.toLowerCase() == "Bien") return message.reply(" cool suis ravie de l'apprendre 🐦"); } };