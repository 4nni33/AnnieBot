import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen3
let vn = './Audios/menu.mp3'
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `তততʚ🩵ɞ  𝗔𝗻𝗻𝗶𝗲𝗕𝗼𝘁 ✨ ⤾·˚ ༘ততত
│▹✨ *𝗛ᴏʟᴀ: ${taguser}*
╰───────────────๑✨๑

╭┈┈  ৎ 🩵 ׂ ⬫ *Notas de voz*  ָ࣪  ۰ . ¡! 
│▹🎙️ *Noche de paz*
│▹🎙️ *Miau*
│▹🎙️ *Buenos dias*
│▹🎙️ *La cumbia del tilín*
│▹🎙️ *buenas noches*
│▹🎙️ *No pedí tu opinión*
│▹🎙️ *Senpai*
│▹🎙️ *esto va a ser épico*
│▹🎙️ *insulta*
│▹🎙️ *Audio hentai*
│▹🎙️ *Tiene la cara*
│▹🎙️ *Fiesta del admin*
│▹🎙️ *tengo*
│▹🎙️ *tranquilo*
│▹🎙️ *Viernes*
│▹🎙️ *Chica lgante*
│▹🎙️ *No soy pati*
│▹🎙️ *Baneado*
│▹🎙️ *Bien pensado woody*
│▹🎙️ *Homero chino*
│▹🎙️ *El pepe*
│▹🎙️ *A nadie le importa*
│▹🎙️ *Sexo*
│▹🎙️ *nadie te pregunto*
│▹🎙️ *Vete a la vrg*
│▹🎙️ *Hola*
│▹🎙️ *Oye Bot te amo*
│▹🎙️ *Te amo*
│▹🎙️ *Yamete*
│▹🎙️ *y que agarra y qué me dice*
│▹🎙️ *Te diagnostico con gay*
│▹🎙️ *Eres fuerteSu nivel de pendejo*
│▹🎙️ *Que pasa*
│▹🎙️ *cállese señora*
│▹🎙️ *Quien es tu sempai botsito 7w7*
│▹🎙️ *BiTCH*
│▹🎙️ *Bañate*
│▹🎙️ *cuándo se muera*
│▹🎙️ *Que rico*
│▹🎙️ *Feliz jueves*
│▹🎙️ *Lo puede todo*
│▹🎙️ *Gemime*
│▹🎙️ *Vivan los novios*
│▹🎙️ *sigues con vida*
│▹🎙️ *Marica quien*
│▹🎙️ *Es puto*
│▹🎙️ *Onichan*
│▹🎙️ *Feliz cumpleaños*
│▹🎙️ *O omosa*
│▹🎙️ *Atencion grupo*
│▹🎙️ *Oh me vengo*
│▹🎙️ *Que linda noche*
│▹🎙️ *Te siento mía*
│▹🎙️ *hentai2*
│▹🎙️ *detengase admin*
│▹🎙️ *Canta2*
│▹🎙️ *Murio el grupo*
│▹🎙️ *Siuuu*
│▹🎙️ *Se enojan*
│▹🎙️ *Al unico*
│▹🎙️ *Se van a dormir*
│▹🎙️ *Hare mi rutina*
│▹🎙️ *Te sabes*
│▹🎙️ *:c*
│▹🎙️ *Hay el amor*
│▹🎙️ *Orale*
│▹🎙️ *Se ríe*
│▹🎙️ *Que es eso*
│▹🎙️ *anana*
│▹🎙️ *No trabajo*
│▹🎙️ *asen*
│▹🎙️ *confeti*
│▹🎙️ *flash*
│▹🎙️ *Una pregunta*
│▹🎙️ *pinches bot*
│▹🎙️ *mmm*
│▹🎙️ *Oxxo*
│▹🎙️ *Soy nuevo*
│▹🎙️ *La voz de hombre*
│▹🎙️ *Picachu*
│▹🎙️ *Pokemon*
│▹🎙️ *ñaña*
│▹🎙️ *yutki*
│▹🎙️ *Ya basta jovenes*
│▹🎙️ *Verdad que te engañe*
│▹🎙️ *Calla maldita puta*
│▹🎙️ *YoShi*
│▹🎙️ *Me los voy a coger*
│▹🎙️ *manco*
│▹🎙️ *Me voy*
│▹🎙️ *Música desamor*
│▹🎙️ *mitamita*
│▹🎙️ *tuturu*
│▹🎙️ *woau*
│▹🎙️ *unga*
│▹🎙️ *umai*
│▹🎙️ *tututu*
│▹🎙️ *uma*
│▹🎙️ *uff*
│▹🎙️ *Tara*
│▹🎙️ *uchinchi*
│▹🎙️ *talcho*
│▹🎙️ *sss*
│▹🎙️ *a*
│▹🎙️ *Triste enojada toy*
│▹🎙️ *Bot maricon*
│▹🎙️ *Bot puto*
│▹🎙️ *estúpido*
│▹🎙️ *Un pato*
│▹🎙️ *Nyanpasu*
│▹🎙️ *El amor no existe*
│▹🎙️ *Es todo lo que tiene que decir*
│▹🎙️ *Muere por los humanos*
│▹🎙️ *La biblia*
│▹🎙️ *Otaku*
│▹🎙️ *Hace frío*
│▹🎙️ *Pikachu*
│▹🎙️ *Niconi*
│▹🎙️ *Mimir*
│▹🎙️ *Beastars*
│▹🎙️ *Manos*
│▹🎙️ *Facha*
│▹🎙️ *Sexual*
│▹🎙️ *Mujer*
│▹🎙️ *Cringe*
│▹🎙️ *Konede*
│▹🎙️ *Gambare*
│▹🎙️ *Pack*
│▹🎙️ *Temon*
│▹🎙️ *Primo*
│▹🎙️ *jaja quiero*
│▹🎙️ *Kya*
│▹🎙️ *rawr*
│▹🎙️ *El mundo*
│▹🎙️ *Nos vale*
│▹🎙️ *Bot gemine*
│▹🎙️ *Pespes*
│▹🎙️ *Ora*
│▹🎙️ *Tori*
│▹🎙️ *Oxxo*
│▹🎙️ *Mi bot es le mejor*
│▹🎙️ *Bunny*
│▹🎙️ *llamando a seguridad*
│▹🎙️ *Atena*
│▹🎙️ *Que tonta eres*
│▹🎙️ *Bts$
│▹🎙️ *ara ara*
│▹🎙️ *La bebecita*
│▹🎙️ *Lol*
│▹🎙️ *Feliz navidad*
│▹🎙️ *Risa diabolica*
│▹🎙️ *Te pasas*
│▹🎙️ *Darling*
│▹🎙️ *Elmo*
│▹🎙️ *La lechuza*
│▹🎙️ *ñi*
│▹🎙️ *Éxtasis*
│▹🎙️ *no te acerques*
│▹🎙️ *Por que*
│▹🎙️ *La mamare*
│▹🎙️ *Lala*
│▹🎙️ *Ya paso*
│▹🎙️ *UwU*
│▹🎙️ *bebito fiu fiu*
│▹🎙️ *Gracias bot*
│▹🎙️ *A bueno adios master*
│▹🎙️ *Abduzcan*
│▹🎙️ *Arigato*
│▹🎙️ *Blackpink* 
│▹🎙️ *Bueno si*
│▹🎙️ *Chau chicos
│▹🎙️ *Chuchupamela*
│▹🎙️ *Como le digo que*
│▹🎙️ *Cómo te amo*
│▹🎙️ *Contexto*
│▹🎙️ *Desde morro*
│▹🎙️ *El rap de fernan* 
│▹🎙️ *Elmo sabe dónde vive*
│▹🎙️ *En caso de una investigación*
│▹🎙️ *Goku*
│▹🎙️ *Joder*
│▹🎙️ *Jueputa*
│▹🎙️ *Linda*
│▹🎙️ *Masivo*
│▹🎙️ *Me anda buscando Anonymous*
│▹🎙️ *Me vale vrg paisa*
│▹🎙️ *Me vuelves loca*
│▹🎙️ *Nadie toca a mis chicos*
│▹🎙️ *No digas eso papu*
│▹🎙️ *No me hables*
│▹🎙️ *No hables de porno*
│▹🎙️ *Okey*
│▹🎙️ *Otaku2*
│▹🎙️ *Pero esto ya es otro nivel*
│▹🎙️ *Quien poronga*
│▹🎙️ *Se están riendo de mí*
│▹🎙️ *Sexo2*
│▹🎙️ *Si no le gusta*
│▹🎙️ *Traigan una falda*
│▹🎙️ *Tunometecabra*
│▹🎙️ *Una monedita*
│▹🎙️ *Usted está detenido* 
│▹🎙️ *Verdad que te engañe* 
│▹🎙️ *Vamos a dormir*
│▹🎙️ *viernecito*
│▹🎙️ *Wenas*
│▹🎙️ *Wtf*
│▹🎙️ *Wtf y este*
│▹🎙️ *Y este quien es*
│▹🎙️ *Y este quien*
│▹🎙️ *Yamete-kudasai2*
︎╰───────────────╯`.trim()
if (m.isGroup) {
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audios|keyaudio|keyaudios)$/i
handler.exp = 50
handler.fail = null
handler.register = true
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
