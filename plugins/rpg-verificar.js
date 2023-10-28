import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `*¡Hola!, ya te encuentras registrado. Si deseas cambiar tu información de registro, puedes usar el siguiente comando:*\n*.unreg <Número de serie>*`;
  if (!Reg.test(text)) throw `*🌹 ¡Hola!, te informo que la información proporcionada o el uso del comando ha sido erronea, aqui tienes un ejemplo: *\n*.reg Annie.19*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '🍃 ¡Hola!, te  informo que el apartado de nombre no puede estar vacío, ingresa un nombre o apodo válido';
  if (!age) throw '*☘️ ¡Hola!, te informo que el apartado de edad no puede estar vacío, ingresa una edad válida*';
  if (name.length >= 30) throw '*¡Hola!, tu nombre ha superado el máximo de carácteres permitido, por favor ingresa uno más corto🌹️*';
  age = parseInt(age);
  if (age > 100) throw '*Oye, ¿acaso los fósiles tienen la capacidad de escribir?, ingresa una edad acorde a tu época✨*';
  if (age < 5) throw '*¿Bromeas?, un niño no podría estar escribiendo esto, ingresa una edad más alta*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `তততʚ🩵ɞ  ¡Registro completado!✨ ⤾·˚ ༘ততত
⋆ ࣪.𓏲 ๋࣭ 🪪 Nombre: ${name}
⋆ ࣪.𓏲 ๋࣭ ☃️ Edad ${age}
⋆ ࣪.𓏲 ๋࣭ 📃Num. de serie:
 ${sn}

¡Ahora te encuentras registrado en la base de datos del bot!🌟
Si deseas cambiar la información del registro, utiliza el siguiente comando: 
.unreg ${sn}ocus. Alternativ

Luego repites los pasos de registro`;
  await conn.sendFile(m.chat, pp, 'hades.jpg', caption);
  
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(Reg|reg)$/i;
export default handler;
