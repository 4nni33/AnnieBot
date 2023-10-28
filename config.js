import fs from 'fs'
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['59892959423', 'Annie', true],
  ['59892959423', 'Annie', true],
]
global.suittag =['59892959423']
global.mods = []
global.prems = ['59892959423'], 
global.prems = ['59892959423'],

global.packname = 'ʚ🩵ɞ  𝗔𝗻𝗻𝗶𝗲𝗕𝗼𝘁 ✨ ⤾·˚ ༘'
global.author = '▒̶᩠߲⃡ࠖ᩼᭭݊⃝⃡🩵ࣱꪾ῾֣ؐ  𝘈𝘯𝘯𝘪𝘦𝘉𝘰𝘵 °୭'
global.vs = '1.10.90'
global.version = vs
global.gt = '▒̶᩠߲⃡ࠖ᩼᭭݊⃝⃡🩵ࣱꪾ῾֣ؐ  𝘈𝘯𝘯𝘪𝘦𝘉𝘰𝘵 °୭'
global.hadesbot = gt
global.yt = 'https://youtu.be'
global.youtube = yt
global.ig = 'https://www.instagram/designs.annie'
global.hadesig = ig
global.md = 'https://github.com/OFC-YOVANI/HADES-BOT-OMEGA.git'
global.botxdf = md
global.nn = 'https://chat.whatsapp.com/EpeBJdsDxa6G90duEx0Uel'
global.nngrupo = nn
global.nnn = 'https://chat.whatsapp.com/EpeBJdsDxa6G90duEx0Uel'
global.nnngrupo = nnn
global.paypal = 'https://paypal.me/ann1edes1gns'
global.donar = paypal
global.rg = '*..  ✅  ٫    ̋  ⎯  *Resultado | Result*'
global.resultado = rg
global.ag = '*..  ⚠️  ٫    ̋  ⎯  *Advertencia | Warning*'
global.advertencia = ag
global.iig = '*..  ❕  ٫    ̋  ⎯  *Información | Information*'
global.informacion = iig
global.fg = '*..  ❌  ٫    ̋  ⎯  *Fallo | Error*'
global.fallo = fg
global.mg = '*..  ❗️  ٫    ̋  ⎯  *Lo usó mal | Used it wrong*'
global.mal = mg
global.eeg = '*.. 📩  ٫    ̋  ⎯  *Reporte | Report*'
global.envio = eeg
global.eg = '*..  ✅  ٫    ̋  ⎯  *Éxito | Success*'
global.exito = eg

global.wm = 'ʚ🩵ɞ  𝗔𝗻𝗻𝗶𝗲𝗕𝗼𝘁 ✨ ⤾·˚ ༘\n▒̶᩠߲⃡ࠖ᩼᭭݊⃝⃡🩵ࣱꪾ῾֣ؐ  𝘈𝘯𝘯𝘪𝘦𝘉𝘰𝘵 °୭'
global.igfg = '▒̶᩠߲⃡ࠖ᩼᭭݊⃝⃡🩵ࣱꪾ῾֣ؐ  𝘈𝘯𝘯𝘪𝘦𝘉𝘰𝘵 °୭'
global.wait = '⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱'

global.imagen1 = fs.readFileSync('./views/Menu.jpg')
global.imagen2 = fs.readFileSync('./views/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./views/Me.jpg')
global.imagen4 = fs.readFileSync('./views/+18.jpg')
global.imagen5 = fs.readFileSync('./views/anime.jpg')
global.imagen6 = fs.readFileSync('./views/bot.jpg')
global.imagen7 = fs.readFileSync('./views/minecraft.jpg')


global.mods = [] 

global.multiplier = 65

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🏆',
      limit: '💎',
      exp: '🕹️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
