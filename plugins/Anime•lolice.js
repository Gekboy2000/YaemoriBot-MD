let handler = async (m, { conn, text, usedPrefix, command}) => {

if (!text) return conn.reply(m.chat, `🌵 Te faltó el enlace del canal.`,  m, rcanal, )

try {
await m.react(rwait)
await m.reply('🚀 Sacando la id del canal.....')

let result = args[0].split('https://whatsapp.com/channel/')[1]
let data = await lilychan.newsletterMetadata("invite", result)
await m.reply(`Id: ${data.id}`)
await m.react(done)

} catch (e) {
await m.react(error)
console.log(e)
await conn.reply(m.chat, '🌵 Ocurrió un error al sacar la id del canal', m, rcanal)
}}

handler.help = ['idchannel']
handler.tags = ['tools']
handler.command = ['id', 'idchannel']
handler.register = true 
export default handler