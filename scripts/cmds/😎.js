module.exports = {
    config: {
        name: "😎",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "😎") return message.reply("𝑱𝒆 𝒔𝒂𝒊𝒔 𝒒𝒖𝒆 𝒋'𝒂𝒊 𝒍𝒂 𝒄𝒍𝒂𝒔𝒔𝒆 𝑨𝒍𝒐𝒓𝒔 𝒖𝒏 𝒄𝒐𝒆𝒖𝒓 𝒔𝒖𝒓 𝒎𝒂 𝒕𝒐𝒇 ❗😎♨️");
}
};