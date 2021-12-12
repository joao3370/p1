const fs = require('fs');
emoji_bot = "😊"

const infos = JSON.parse(fs.readFileSync('./configure aqui.js'))
var {p, SeuNome, OwnerNumber, NomeDoBot} = infos

exports.wait = () => {
return`⏳Aguarde alguns instantes...⏳\n\nCaso não funcione, use o comando novamente.`
}

exports.registroB = () => {
return`
╭━━━━━━─ • ─━━━━━─
│*「️𝙲𝚘𝚖𝚊𝚗𝚍𝚘 𝙽𝚎𝚐𝚊𝚍𝚘」*
└─────────────
╭┤𝖯𝖺𝗋𝖺 𝖿𝖺𝗓𝖾𝗋 𝖫𝗈𝗀𝗂𝗇:
││𝖴𝗌𝖾: 𝖫𝗈𝗀𝗂𝗇
└─────────────`
}

exports.menu2 = (pushname, hr, total_gp1, bateria) => {
return `
Ola ${pushname} Td Bem?
┌─────❏❏──────
╰    ᜴⃕🌹 ɪɴғᴏ ᴅᴏ ʙᴏᴛ 🔥᭄
❏│ Pʀᴇғɪx:『${p}』
❏│ Hᴏʀᴀ: ${hr}
❏│ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${total_gp1}
❏│ Bᴀᴛᴇʀɪᴀ: ${bateria}
❏│ ${p}Report『Erros?』
└────❏❏─────
└│───❏❏─────
┌┤ ᴀᴅᴍɪɴ  ᜴⃕🌹
┃╞═════════════
┃│⚠︎ Tudo com : *@tag/alvo!*
┃╰━━━━━━❏━━━━━━
┃│ ⋟ ${p}Banir『@Tag』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Add『Numero』 
┃╰━━━━━━❏━━━━━━
❏│ ${p}Promover『@Tag』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Rebaixar『@Tag』
┃╰━━━━━━❏━━━━━━
└╦══════❏══════
┌┤   ᴀᴅᴍɪɴ 🔥᭄
┃╞══════❏══════
┃│⚠︎ Marque a *<mensagem/>*
┃╰━━━━━━❏━━━━━━
❏│ ${p}Kick『Mensagem』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Demote『Numero』 
┃╰━━━━━━❏━━━━━━
❏│ ${p}Reviver『Mensagem』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Promote『Mensagem』
┃╰━━━━━━❏━━━━━━
└╦═════════════
┌┤🌈ɴᴏᴍᴇ/ᴅᴇsᴄ ᜴⃕🌹
┃╞═══════════
┃│⚠︎ Tudo com : *<texto/foto>*
┃╰━━━━━━❏━━━━━━
❏│ ${p}Setppgc『Foto』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Hidetag『Texto』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Setdesk『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Setnome『Nome』
┃╰━━━━
❏│ ${p}Del『Msg do bot』
┃╰━━━━━━❏━━━━━━
└╦═════════════
┌┤ ❄ᴀᴛɪᴠᴀᴄ̧ᴀ̃ᴏ ᴀɴᴛɪs🔥᭄
┃╞═════════════
┃│⚠︎ Tudo com : *<on/off>*
┃╰━━━━━━❏━━━━━━
┃╭ ⋟${p}Antilink『On/Off』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Antifake『On/Off』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Antipalavras『On/Off』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Antispam『On/Off』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Leveling 『On/Off』
┃╰━━━━━━❏━━━━━━
┃ ╭ ⋟ ${p}Welcome 『On/Off』
┃╰━━━━━━❏━━━━━━
└╦═════════════
┌┤ᴀᴅᴍɪɴ ɢᴇʀᴀʟ ᜴⃕🌹
┃╞━━━━━━❏━━━━━━
┃│ ⋟ ${p}Listadmin
┃│⚠︎ Lista de administradores.
┃╰━━━━━━❏━━━━━━
❏│ ${p}Totag『Img/Gif』  
┃│⚠︎ Mencione todos.
┃╰━━━━━━❏━━━━━━
❏│ ${p}Link『Pv/Grupo』 
┃│⚠︎ Link do grupo onde está.
┃╰━━━━━━❏━━━━━━
❏│ ${p}Info『Grupo/Perfil』
┃│⚠︎ Informações Grupo/Perfil.
┃╰━━━━━━❏━━━━━━
❏│ ${p}Grup『Abrir/Fechar』
┃│⚠︎ Abrir/Fechar Grupo.
┃╰━━━━━━❏━━━━━━
└══════════════`
}

exports.figurinhas = (pushname, hr, total_gp2, bateria) => {
return `
ola ${pushname} Td Bem?
┌═══════════════
╰╮🖼ɪɴғᴏ ᴅᴏ ʙᴏᴛ🔥᭄
┌┤⋟ Pʀᴇғɪx:『${p}』
┃│⋟ Hᴏʀᴀ: ${hr}
┃│⋟ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${total_gp2}
┃│⋟ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃│⋟ ${p}Report『Erros?』
┃╰═════════════
└╦═════════════
┌┤🎲sᴛɪᴄᴋᴇʀ ᜴⃕🌹
┃╞═════════════
┃│⚠︎ Tudo com : *<gif/foto>*
┃╰━━━━━━❏━━━━━━
❏│ ${p}F 『Foto/Gif』

   ${p}ffig 『Foto/Gif』
┃╰━━━━━━❏━━━━━━
❏│ ${p}St 『Foto/Gif』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Stk『Foto/Gif』
┃╰━━━━━━❏━━━━━━
└╦══════════════
┌┤ 🎲sᴛɪᴄᴋᴇʀ/ᴀɴɪᴍᴀᴅᴏ🔥᭄
┃╞═════════════
┃│⚠︎ Faça figurinhas animadas
┃│⚠︎ Tudo com : *<texto/>*
┃╰━━━━━━❏━━━━━━
❏│ ${p}Attp『Texto』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Attp1『Texto』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Attp2『Texto』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Attp3『Texto』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Attp4『Texto』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Attp5『Texto』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Attp6『Texto』
┃╰━━━━━━❏━━━━━━
└╦══════════════
┌┤🧷ᴄᴏɴᴠᴇʀᴛᴇʀ ᜴⃕🌹
┃╞═════════════⊷
┃│⚠︎ Converta sticker Img/Vid.
┃╰━━━━━━❏━━━━━━
❏│ ${p}Togif『Sticker』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Toimg『Sticker』
┃╰━━━━━━❏━━━━━━
└╦══════════════⊷
┌┤ 📃sᴛɪᴄᴋᴇʀ/ғᴏᴛᴏs🔥᭄
┃╞═════════════⊷
┃│⚠︎ Edite fotos em sticker...
┃│⚠︎ Tudo com : *</foto>*
┃╰━━━━━━❏━━━━━━
❏│ ${p}Figupet『Foto』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Figuger『Foto』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Figulgbt『Foto』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Figuarma『Foto』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Figuinvert『Foto』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Figupreso『Foto』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Figuwasted『Sticker』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Figuborrada『Sticker』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Figuprocurado『Sticker』
┃╰━━━━━━❏━━━━━━
└══════════════⊷`
}

exports.playrs = (pushname, hr, total_gp4, bateria) => {
return `
ol ${puashname} Td Bem?
┌═══════════════⊷
╰╮🗂ɪɴғᴏ ᴅᴏ ʙᴏᴛ ᜴⃕🌹
┌┤⋟ Pʀᴇғɪx:『${p}』
┃│⋟ Hᴏʀᴀ: ${hr}
┃│⋟ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${total_gp4}
┃│⋟ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃│⋟ ${p}Report『Erros?』
┃╰═════════════⊷
└╦══════════════⊷
┌┤🎵 ᴀᴜᴅɪᴏs🔥᭄
┃╞═════════════⊷
┃│⚠︎ Baixe músicas com play
┃╰━━━━━━❏━━━━━━
❏│ ${p}Play『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Play1『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Play2『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Play3『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Play4『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Play5『Nome』
┃╰━━━━━━❏━━━━━━
└╦═════════════⊷
┌┤🎬ᴇᴅɪᴄ̧ᴀ̃ᴏ ᴠɪᴅᴇᴏ ᜴⃕🌹
┃╞═════════════⊷
┃│⚠︎ Baixe videos com playvid...
┃╰━━━━━━❏━━━━━━
❏│ ${p}Playvid『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Playvid1『Nome』
┃╰━━━━━━❏━━━━━━
└╦═════════════⊷
┌┤💿ᴇᴅɪᴄ̧ᴀ̃ᴏ ᴀᴜᴅɪᴏ🔥᭄
┃╞═════════════⊷
┃│⚠︎ Marque o : *<audio/>*
┃╰━━━━━━❏━━━━━━
❏│ ${p}Baixo『Audio』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Rapid『Audio』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Tomp3『Video』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Rapido『Audio』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Esquilo『Audio』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Gigante『Audio』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Devagar『Audio』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Sombrio『Video』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Estourar『Audio』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Ytsearch『Nome』
┃╰━━━━━━❏━━━━━━
└═══════════════⊷`
}

exports.jogos = (pushname, hr, total_gp5, bateria) => {
return `
ola ${pushname} Td Bem?
┌═══════════════⊷
    📁ɪɴғᴏ ᴅᴏ ʙᴏᴛ ᜴⃕🌹
┌┤⋟ Pʀᴇғɪx:『${p}』
┃│⋟ Hᴏʀᴀ: ${hr}
┃│⋟ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${total_gp5}
┃│⋟ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃│⋟ ${p}Report『Erros?』
┃╰═════════════
└╦═════════════
┌┤ 🎮ᴊᴏɢᴏs/ʀᴀɴᴋs🔥᭄
┃╞═════════════
┃╰━━━━━━❏━━━━━━
❏│ ${p}Sn『Pergunta』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Ttt『Dificuldade』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Getn『Mensagem』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Getname『@Tag』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Amongus『@Tag』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Ppt『Pedra/Papel』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Gay
┃╰━━━━━━❏━━━━━━
❏│ ${p}Pau
┃╰━━━━━━❏━━━━━━
❏│ ${p}Slot
┃╰━━━━━━❏━━━━━━
❏│ ${p}Feio
┃╰━━━━━━❏━━━━━━
❏│ ${p}Lixo
┃╰━━━━━━❏━━━━━━
❏│ ${p}Gado
┃╰━━━━━━❏━━━━━━
❏│ ${p}Dado
┃╰━━━━━━❏━━━━━━
❏│ ${p}Level 
┃╰━━━━━━❏━━━━━━
❏│ ${p}Burro
┃╰━━━━━━❏━━━━━━
❏│ ${p}Gordo
┃╰━━━━━━❏━━━━━━
❏│ ${p}Pobre
┃╰━━━━━━❏━━━━━━
❏│ ${p}Roleta
┃╰━━━━━━❏━━━━━━
❏│ ${p}Corno
┃╰━━━━━━❏━━━━━━
❏│ ${p}Bonito
┃╰━━━━━━❏━━━━━━
❏│ ${p}Tagme
┃╰━━━━━━❏━━━━━━
❏│ ${p}Cassino
┃╰━━━━━━❏━━━━━━
❏│ ${p}Macaco
┃╰━━━━━━❏━━━━━━
❏│ ${p}Gostoso
┃╰━━━━━━❏━━━━━━
❏│ ${p}Ranklevel
┃╰━━━━━━❏━━━━━━
❏│ ${p}Caracoroa
┃╰━━━━━━❏━━━━━━
└══════════════⊷`
}

exports.animes = (pushname, hr, total_gp6, bateria) => {
return `
 ola ${pushname} Td Bem?
┌═══════════════⊷
╰╮ 📁ɪɴғᴏ ᴅᴏ ʙᴏᴛ ᜴⃕🌹
┌┤⋟ Pʀᴇғɪx:『${p}』
┃│⋟ Hᴏʀᴀ: ${hr}
┃│⋟ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${total_gp6}
┃│⋟ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃│⋟ ${p}Report『Erros?』
┃╰═════════════⊷
└╦═════════════⊷
┌┤ 😈ᴀɴɪᴍᴇ/ʜᴇɴᴛᴀɪ🔥᭄
┃╞═════════════⊷
┃│⚠︎ Animes e Hentais.
┃╰━━━━━━❏━━━━━━
❏│ ${p}Ero
┃╰━━━━━━❏━━━━━━
❏│ ${p}Les
┃╰━━━━━━❏━━━━━━
❏│ ${p}Ass
┃╰━━━━━━❏━━━━━━
❏│ ${p}Solo
┃╰━━━━━━❏━━━━━━
❏│ ${p}Holo
┃╰━━━━━━❏━━━━━━
❏│ ${p}Feet
┃╰━━━━━━❏━━━━━━
❏│ ${p}Anal
┃╰━━━━━━❏━━━━━━
❏│ ${p}Eron
┃╰━━━━━━❏━━━━━━
❏│ ${p}Trap
┃╰━━━━━━❏━━━━━━
❏│ ${p}Erok
┃╰━━━━━━❏━━━━━━
❏│ ${p}Cum
┃╰━━━━━━❏━━━━━━
❏│ ${p}Feed
┃╰━━━━━━❏━━━━━━
❏│ ${p}Neko
┃╰━━━━━━❏━━━━━━
❏│ ${p}Lewd
┃╰━━━━━━❏━━━━━━
❏│ ${p}Solog
┃╰━━━━━━❏━━━━━━
❏│ ${p}Bdsm
┃╰━━━━━━❏━━━━━━
❏│ ${p}Feetg
┃╰━━━━━━❏━━━━━━
❏│ ${p}Spank
┃╰━━━━━━❏━━━━━━
❏│ ${p}Lewdk
┃╰━━━━━━❏━━━━━━
❏│ ${p}Boobs
┃╰━━━━━━❏━━━━━━
❏│ ${p}Hentai
┃╰━━━━━━❏━━━━━━
❏│ ${p}Eroyuri
┃╰━━━━━━❏━━━━━━
❏│ ${p}Classic
┃╰━━━━━━❏━━━━━━
❏│ ${p}Erofeet
┃╰━━━━━━❏━━━━━━
❏│ ${p}Hentain
┃╰━━━━━━❏━━━━━━
❏│ ${p}Kitsune
┃╰━━━━━━❏━━━━━━
❏│ ${p}Holoero
┃╰━━━━━━❏━━━━━━
❏│ ${p}Blowjob
┃╰━━━━━━❏━━━━━━
❏│ ${p}Pwankg
┃╰━━━━━━❏━━━━━━
❏│ ${p}Futanari
┃╰━━━━━━❏━━━━━━
❏│ ${p}Nsfwloli
┃╰━━━━━━❏━━━━━━
❏│ ${p}Femdom
┃╰━━━━━━❏━━━━━━
❏│ ${p}Nsfwneko
┃╰━━━━━━❏━━━━━━
❏│ ${p}Erokemo
┃╰━━━━━━❏━━━━━━
❏│ ${p}Trapnime
┃╰━━━━━━❏━━━━━━
❏│ ${p}Hololewd
┃╰━━━━━━❏━━━━━━
❏│ ${p}Lewdkemo
┃╰━━━━━━❏━━━━━━
└╦═════════════⊷
┌┤🍙 ᴀɴɪᴍᴇ/ʜᴇɴᴛᴀɪ ᜴⃕🌹
┃╞═════════════⊷
┃│⚠︎ Animes e Hentais.
┃╰━━━━━━❏━━━━━━
❏│ ${p}Ace
┃╰━━━━━━❏━━━━━━
❏│ ${p}Loli
┃╰━━━━━━❏━━━━━━
❏│ ${p}Luffy
┃╰━━━━━━❏━━━━━━
❏│ ${p}Zoro
┃╰━━━━━━❏━━━━━━
❏│ ${p}Nami
┃╰━━━━━━❏━━━━━━
❏│ ${p}Bully
┃╰━━━━━━❏━━━━━━
❏│ ${p}Obito
┃╰━━━━━━❏━━━━━━
❏│ ${p}Shota
┃╰━━━━━━❏━━━━━━
❏│ ${p}Waifu
┃╰━━━━━━❏━━━━━━
❏│ ${p}Buggy
┃╰━━━━━━❏━━━━━━
❏│ ${p}Carrot
┃╰━━━━━━❏━━━━━━
❏│ ${p}Nekoa
┃╰━━━━━━❏━━━━━━
❏│ ${p}Asuma
┃╰━━━━━━❏━━━━━━
❏│ ${p}Naruto
┃╰━━━━━━❏━━━━━━
❏│ ${p}Shanks
┃╰━━━━━━❏━━━━━━
❏│ ${p}Sakura
┃╰━━━━━━❏━━━━━━
❏│ ${p}Hinata
┃╰━━━━━━❏━━━━━━
❏│ ${p}Shikaku
┃╰━━━━━━❏━━━━━━
❏│ ${p}Madara
┃╰━━━━━━❏━━━━━━
❏│ ${p}Sasuke
┃╰━━━━━━❏━━━━━━
❏│ ${p}Abraço
┃╰━━━━━━❏━━━━━━
❏│ ${p}Shinobu
┃╰━━━━━━❏━━━━━━
❏│ ${p}Ahegao
┃╰━━━━━━❏━━━━━━
❏│ ${p}Lolizinha
┃╰━━━━━━❏━━━━━━
❏│ ${p}Shikadai
┃╰━━━━━━❏━━━━━━
❏│ ${p}Megumin
┃╰━━━━━━❏━━━━━━
❏│ ${p}Shikamaru
┃╰━━━━━━❏━━━━━━
❏│ ${p}Pinterest『Texto』
┃╰━━━━━━❏━━━━━━
└══════════════⊷`
}

exports.dono = (pushname, hr, total_gp7, bateria) => {
return `
 ola ${pushname} Td Bem?
┌═══════════════⊷
╰╮🌻ɪɴғᴏ ᴅᴏ ʙᴏᴛ🔥᭄
┌┤⋟ Pʀᴇғɪx:『${p}』
┃│⋟ Hᴏʀᴀ: ${hr}
┃│⋟ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${total_gp7}
┃│⋟ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃│⋟ ${p}Report『Erros?』
┃╰═════════════⊷
└╦═════════════⊷
┌┤ ᴅᴏɴᴏ ᜴⃕🌹
┃╞═════════════⊷
┃│ ⋟ ${p}Bc『Texto』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Ban『@Tag』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Clone『@Tag』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Unban『@Tag』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Q 『Mensagem』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Bcstik『Sticker』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Tagimg『Sticker』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Setprefix『Prefix』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Addprem『@Tag』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Dellprem『@Tag』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Tagstick『Sticker』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Delpalavra『Palavra』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Addpalavra『Palavra』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Antipalavras『On/Off』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Setname『Nome do bot』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Ping
┃╰━━━━━━❏━━━━━━
❏│ ${p}Mystat
┃╰━━━━━━❏━━━━━━
❏│ ${p}Delchat
┃╰━━━━━━❏━━━━━━
❏│ ${p}Bateria
┃╰━━━━━━❏━━━━━━
❏│ ${p}Clearall
┃╰━━━━━━❏━━━━━━
❏│ ${p}Desligar
┃╰━━━━━━❏━━━━━━
❏│ ${p}Reiniciar
┃╰━━━━━━❏━━━━━━
❏│ ${p}Visuchat
┃╰━━━━━━❏━━━━━━
❏│ ${p}Listname
┃╰━━━━━━❏━━━━━━
❏│ ${p}Bloqueados
┃╰━━━━━━❏━━━━━━
└══════════════`
}

exports.nuvem = (pushname, hr, total_gp4, bateria) => {
return `
 ola ${pushname} Td Bem?
┌═══════════════
╰╮🌎ɪɴғᴏ ᴅᴏ ʙᴏ🔥᭄
┌┤⋟ Pʀᴇғɪx:『${p}』
┃│⋟ Hᴏʀᴀ: ${hr}
┃│⋟ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${total_gp4}
┃│⋟ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃│⋟ ${p}Report『Erros?』
┃╰═════════════
└╦═════════════
┌┤📌ʟɪsᴛᴀs ᴅᴇ sᴛɪᴄᴋᴇʀ ᜴⃕🌹
┃╞═════════════
┃│⚠︎ Comandos de Sticker
┃╰━━━━━━❏━━━━━━
┃│ ⋟ ${p}Liststik
┃╰━━━━━━❏━━━━━━
❏│ ${p}Getstik『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Addstik『Nome』
┃╰━━━━━━❏━━━━━━
└╦═════════════
┌┤📀ʟɪsᴛᴀs ᴅᴇ ᴀᴜᴅɪᴏs🔥᭄
┃╞═════════════
┃│⚠︎ Comandos de Audios
┃╰━━━━━━❏━━━━━━
❏│ ${p}Listvn
┃╰━━━━━━❏━━━━━━
❏│ ${p}Getvn『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Addvn『Nome』
┃╰━━━━━━❏━━━━━━
└╦═════════════
┌┤🖼ʟɪsᴛᴀs ᴅᴇ ɪᴍᴀɢᴇᴍ ᜴⃕🌹
┃╞═════════════
┃│⚠︎ Comandos de Imagem
┃╰━━━━━━❏━━━━━━
❏│ ${p}Listimg
┃╰━━━━━━❏━━━━━━
❏│ ${p}Addimg『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Getimg『Nome』
┃╰━━━━━━❏━━━━━━
└╦═════════════
┌┤📽ʟɪsᴛᴀs ᴅᴇ ᴠɪᴅᴇᴏs🔥᭄
┃╞═════════════
┃│⚠︎ Comandos de Audios
┃╰━━━━━━❏━━━━━━
❏│ ${p}Listvid
┃╰━━━━━━❏━━━━━━
❏│ ${p}Addvid『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Getvid『Nome』
┃╰━━━─── • ──━━━━
└══════════════`
}

exports.premium = (pushname, hr, totalchat, bateria) => {
return `
 ola ${pushname} Td Bem?
┌═══════════════
╰╮💻ɪɴғᴏ ᴅᴏ ʙᴏᴛ ᜴⃕🌹
┌┤⋟ Pʀᴇғɪx:『${p}』
┃│⋟ Hᴏʀᴀ: ${hr}
┃│⋟ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${totalchat}
┃│⋟ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃│⋟ ${p}Report『Erros?』
┃╰═════════════
└╦═════════════
┌┤  📚ᴘʀᴇᴍɪᴜᴍ🔥᭄
┃╞═════════════
┃│ ⋟ ${p}Sticknime
┃╰━━━━━━❏━━━━━━
❏│ ${p}Covidmundo
┃╰━━━━━━❏━━━━━━
❏│ ${p}Ddd『DDD』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Letra『Musica』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Anime『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Pinapi『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Github『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Celular『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Covidst『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Xsearch『Texto』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Amazon『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Mediafire『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Rename『Sticker』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Playstore『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Wikipedia『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Buscaimg『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Glosearch『Nome』
┃╰━━━━━━❏━━━━━━
❏│ ${p}Playstore1『Nome』
┃╰━━━━━━❏━━━━━━
└══════════════`
}

exports.bankloja = (pushname, hr, totalchat, bateria) => {
return `
 ola ${pushname} Td Bem?
┌═══════════════
╰  🗞ɪɴғᴏ ᴅᴏ ʙᴏᴛ ᜴⃕🌹
┌┤⋟ Pʀᴇғɪx:『${p}』
┃│⋟ Hᴏʀᴀ: ${hr}
┃│⋟ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${totalchat}
┃│⋟ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃│⋟ ${p}Report『Erros?』
┃╰═════════════
└╦═════════════
╭┤  💵ᴄᴀsʜ🔥᭄
┃╞═════════════
┃│⚠︎ Veja seu <cash/dinheiro>
┃╰━━━━━━❏━━━━━━
❏│ ${p}Cash
┃╰━━━─── • ──━━━━
❏│ ${p}Dinheiro
┃╰━━━─── • ──━━━━
❏│ ${p}Rankcash
┃╰━━━─── • ──━━━━
❏│ ${p}Rankmoney
┃╰━━━─── • ──━━━━
❏│ ${p}Vermoney『@Tag』
┃╰━━━─── • ──━━━━
└╦═════════════
╭┤  💸ᴄᴀsʜ ᜴⃕🌹
┃╞═════════════
┃│${p}Buycash
┃│⚠︎ Use-o para comprar cash.
┃╰━━━─── • ──━━━━
❏│ ${p}Buyprem
┃│⚠︎ Use-o para ser premium.
┃╰━━━─── • ──━━━━
❏│ ${p}Buypack
┃│⚠︎ Compre packs de porno.
┃╰━━━─── • ──━━━━
❏│ ${p}Apostar 2500
┃│⚠︎ Use-o para apostar money.
┃╰━━━─── • ──━━━━
❏│ ${p}Transferir @/2500
┃│⚠︎ Use-o para doar money.
┃╰━━━─── • ──━━━━
╰╦═════「★」═════
╭┤ᴅᴏɴᴏ/ᴄᴀsʜ🔥᭄
┃╞═════════════
┃│⚠︎ Só meu dono pode doar...
┃╰━━━━━━❏━━━━━━
❏│ ${p}Darcash @/2500
┃╰━━━─── • ──━━━━
❏│ ${p}Darmoney @ 2500
┃╰━━━─── • ──━━━━
╰══════「★」═════`
}

exports.info = (pushname, hr, totalchat, bateria) => {
return `
 ola ${pushname} Td Bem?
┌═══════════════
╰   🏷 ɪɴғᴏ ᴅᴏ ʙᴏᴛ ᜴⃕🌹
┌┤⋟ Pʀᴇғɪx:『${p}』
┃│⋟ Hᴏʀᴀ: ${hr}
┃│⋟ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${totalchat}
┃│⋟ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃│⋟ ${p}Report『Erros?』
┃╰═════════════
└╦═════════════
╭┤ ✏ɪɴғᴏ ᴅᴏ ʙᴏᴛ🔥᭄
┃╞═════════════
┃│ Informações do bot...
┃╰━━━━━━❏━━━━━━
❏│ ${p}Infome
┃╰━━━─── • ──━━━━
❏│ ${p}Reportes
┃╰━━━─── • ──━━━━
❏│ ${p}Informes
┃╰━━━─── • ──━━━━
❏│ ${p}Solicitações
┃╰━━━─── • ──━━━━
❏│ ${p}Solicitar『Texto』
┃╰━━━─── • ──━━━━
❏│ ${p}Informe『Texto』
┃╰━━━─── • ──━━━━
╰══════「★」═════`
}

exports.speed = (speedB, temporizado) => {
return `
*🌻_•*Respondi em: 0.00${speedB} Segundos*
*⏳_•Runtime: ${temporizado(uptime)}*

🚀 - *Speed ​​and time online*
`
}

exports.erroB = (comando, q) => {
return `[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`
}

exports.bateria = (baterai, porcentagem) => {
return `
╭ ⋟ き⃟🔋ʙᴀᴛᴇʀɪᴀ🔋⃟ き
 • ʙᴀᴛᴇʀɪᴀ: ${baterai}%
 • ${porcentagem}
└━━━─「🔋」─━━━━`
}

exports.errorB = (comando) => {
return `
Cᴏᴍᴀɴᴅᴏ : *${comando}*
Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* 
*『Ƭ𝖾𝗇𝗍𝖾 Ʋ𝗌𝖺𝗋 Ɖ𝖾 ክ𝗈𝗏𝗈』*`  
}

exports.tterro = () => {
return `Você deve digitar ${p}ppt pedra, ${p}ppt papel ou ${p}ppt tesoura`
}

exports.ban = (bot) => {
return`${emoji_bot} Você está banido do bot`
}

exports.ownerB = () => {
return`${emoji_bot} Comando só pode ser usado pelo meu dono`
}

exports.stick = () => {
return`${emoji_bot} Ocorreu um erro na criação de sticker`
}

exports.Lv = () => {
return`${emoji_bot} Link inválido`
}

exports.group = () => {
return`${emoji_bot} O comando só pode ser usado em grupos`
}

exports.admin = () => {
return`${emoji_bot} O comando só pode ser usado por administradores do grupo`
}

exports.Badmin = () => {
return`${emoji_bot} O comando só pode ser usado quando o bot é um administrador do grupo`
}

exports.AdmDoBot = () => {
return`${emoji_bot} Cadê o meu adm?? Só pode usar esse comando quando eu me torno administrador`
}

//limit
exports.cash_adquirir = (pushname, p) => {
	return`
*Desculpe ${pushname} seu cash acabou ...*
*Para conseguir mais cash compre ou passe de nível*

- Para comprar cash : *${p}buycash 10*
- caso tenha dúvida fale com meu criador ...
+ ${SeuNome} - https://wa.me/${OwnerNumber}`
}

exports.limitend = (pushname) => {
        return`*Desculpe-me ${pushname} O limite de hoje acabou*\n*o limite é zerado a cada hora 24:00*`
}

exports.cashConta = (limitCounts) => {
return`
╭━◌━💰「Cash」💰━◌━╮
┃╭━━━━━━━❏━━━━━━
┃┃💰 *Saldo*: *${limitCounts} CASH*
┃╰━━━━─「💵」─━━━━
└══════════════━•••`
}

exports.dinheiroConta = (checkDinheiro) => {
return`
╭━◌━💰「Money」💰━◌━╮
┃╭━━━━━━━❏━━━━━━
┃┃💰 *Saldo*: *${checkDinheiro} Dinheiro*
┃╰━━━━─「💵」─━━━━
└══════════════━•••`
}

exports.cashC = (limitCounts) => {
return`
*${limitCounts}*`
}

exports.cashZ = (comando) => {
return`
⚠️ *Débito efetuado!*

💰 *${comando}*: *-1 CASH*

📍 Entendido! Guenta aê!⏳`
}

exports.erro = () => {
return`❌ocorreu um erro❌\n\nTente novamente.`
}

(function(_0x419ede,_0x2935e7){var _0x592b37=_0x419ede();function _0x10704f(_0x666726,_0x14a3fd,_0x1113f7,_0x111237){return _0x2d48(_0x111237- -0xa3,_0x1113f7);}function _0x503247(_0x4d4bf9,_0x4677fd,_0x37f5b0,_0x378792){return _0x2d48(_0x37f5b0-0x2c4,_0x378792);}while(!![]){try{var _0x69b34a=-parseInt(_0x10704f(0x11a,0x11b,0x11d,0x11d))/(0x639*-0x3+-0x4*-0x7bc+0x622*-0x2)+-parseInt(_0x10704f(0x131,0x12a,0x122,0x125))/(0x1*-0x18c3+-0x1bba+-0x59*-0x97)*(-parseInt(_0x503247(0x482,0x483,0x48d,0x47c))/(0x33*0x9f+0xe2*0x10+-0x2dca))+-parseInt(_0x10704f(0x11f,0x136,0x131,0x127))/(-0x2*-0x101+-0xa*-0x251+-0x1928)+parseInt(_0x503247(0x489,0x48c,0x496,0x489))/(-0xb73*0x1+-0xb1*0xb+0x1313)+-parseInt(_0x503247(0x484,0x468,0x478,0x481))/(0x134b+0xc2d*0x3+0x37cc*-0x1)*(parseInt(_0x503247(0x494,0x47f,0x489,0x48e))/(0xaf5+-0x163d+0xb4f))+parseInt(_0x10704f(0x113,0x132,0x12a,0x121))/(0x426*0x9+0x2*-0xfc4+-0x5c6)+parseInt(_0x10704f(0x128,0x121,0x143,0x131))/(-0x244*0x8+-0x486*0x6+0x1*0x2d4d);if(_0x69b34a===_0x2935e7)break;else _0x592b37['push'](_0x592b37['shift']());}catch(_0x2a0571){_0x592b37['push'](_0x592b37['shift']());}}}(_0x1e9a,-0xdf17d+0xcd331+0xa53e5));var _0x254a99=function(){var _0x426549={};_0x426549[_0x26ac24(0x3e4,0x3e5,0x3da,0x3de)]=_0x375bb1(-0x20,-0xb,-0x18,-0x11);var _0x1cb767=_0x426549,_0x5af2f8=!![];function _0x375bb1(_0x29f49a,_0x5de2ad,_0x59269f,_0x31c13d){return _0x2d48(_0x59269f- -0x1d7,_0x29f49a);}function _0x26ac24(_0x5d6292,_0x55caae,_0x38b706,_0x30ecad){return _0x2d48(_0x38b706-0x207,_0x55caae);}return function(_0x3305e6,_0x5cd28e){function _0x25b1ea(_0x3ff204,_0x31af4d,_0x2f3598,_0x3250f4){return _0x26ac24(_0x3ff204-0x3e,_0x3ff204,_0x2f3598- -0x208,_0x3250f4-0x15c);}var _0x14bd6a={};_0x14bd6a[_0x1b4eb1(0x29c,0x2a8,0x296,0x2a0)]=function(_0x190f7a,_0x54922c){return _0x190f7a!==_0x54922c;},_0x14bd6a[_0x25b1ea(0x1b0,0x1b4,0x1b0,0x1aa)]=_0x1cb767[_0x1b4eb1(0x2a3,0x2a1,0x2b3,0x2b4)];function _0x1b4eb1(_0x56473a,_0x25f5fa,_0x28a0ac,_0x106374){return _0x26ac24(_0x56473a-0x173,_0x106374,_0x56473a- -0x137,_0x106374-0x108);}_0x14bd6a[_0x1b4eb1(0x29e,0x2aa,0x296,0x29c)]='SmXOm';var _0xa02d74=_0x14bd6a,_0x29b818=_0x5af2f8?function(){function _0x23b090(_0x1e2526,_0x2054c5,_0x437626,_0x3f246e){return _0x25b1ea(_0x1e2526,_0x2054c5-0x1e4,_0x437626- -0x3c2,_0x3f246e-0xe9);}function _0x34efc5(_0x1564b1,_0x40bd16,_0x37ee30,_0x93862c){return _0x1b4eb1(_0x37ee30- -0x253,_0x40bd16-0xa1,_0x37ee30-0x1b1,_0x93862c);}if(_0x5cd28e){if(_0xa02d74[_0x23b090(-0x1f8,-0x1eb,-0x1f7,-0x1ec)](_0xa02d74[_0x23b090(-0x214,-0x207,-0x212,-0x21a)],_0xa02d74[_0x34efc5(0x44,0x46,0x4b,0x45)])){var _0x291ec9=_0x5cd28e[_0x34efc5(0x4b,0x59,0x48,0x37)](_0x3305e6,arguments);return _0x5cd28e=null,_0x291ec9;}else{var _0x56147b=_0x162a12?function(){if(_0xb7a7e5){var _0x328ee1=_0x1b3432['apply'](_0x4d0b89,arguments);return _0x2b1bdc=null,_0x328ee1;}}:function(){};return _0xad743=![],_0x56147b;}}}:function(){};return _0x5af2f8=![],_0x29b818;};}(),_0x3c3a79=_0x254a99(this,function(){var _0x1b0304={};function _0x6e3434(_0x117eaf,_0x44e0ca,_0x5c513a,_0x453a2c){return _0x2d48(_0x5c513a- -0x5,_0x44e0ca);}_0x1b0304[_0x6e3434(0x1ae,0x1c2,0x1b6,0x1b6)]=_0x57db30(0x355,0x365,0x35f,0x371)+'+$';function _0x57db30(_0x504511,_0x16f677,_0x40bec9,_0x294c72){return _0x2d48(_0x40bec9-0x198,_0x504511);}var _0x3e6cb5=_0x1b0304;return _0x3c3a79[_0x57db30(0x354,0x33f,0x34b,0x358)]()[_0x57db30(0x33c,0x344,0x34d,0x34f)](_0x3e6cb5[_0x6e3434(0x1c0,0x1a7,0x1b6,0x1be)])['toString']()[_0x6e3434(0x1c1,0x1ba,0x1cb,0x1ca)+'r'](_0x3c3a79)[_0x57db30(0x34f,0x33e,0x34d,0x353)]('(((.+)+)+)'+'+$');});function _0x586f83(_0x386814,_0x520161,_0x568090,_0x28c808){return _0x2d48(_0x386814-0x3a7,_0x568090);}_0x3c3a79(),exports[_0x586f83(0x564,0x554,0x573,0x572)]=_0x3ae6f8=>{function _0x573572(_0x445f0e,_0x2a0cf4,_0x151f76,_0x5c5201){return _0x586f83(_0x5c5201- -0xd3,_0x2a0cf4-0xd3,_0x445f0e,_0x5c5201-0x51);}function _0x3aac51(_0x730d62,_0x4a221f,_0x47b005,_0x260fee){return _0x586f83(_0x260fee- -0x609,_0x4a221f-0xeb,_0x47b005,_0x260fee-0x2e);}return'\x0a━━━─「criα'+'∂σr」─━━━\x0a•'+_0x3aac51(-0xa0,-0x9e,-0x98,-0xa1)+'205c07-9bb'+_0x3aac51(-0x9d,-0xb8,-0xae,-0xaa)+_0x573572(0x4a1,0x4ac,0x494,0x4a5)+_0x3aac51(-0x82,-0x97,-0x87,-0x95)+'「💎」─━━━━\x0a•'+'\x20*Youtube:'+'*\x20\x0ahttps:/'+_0x573572(0x497,0x4a2,0x489,0x49a)+_0x3aac51(-0xb2,-0xa1,-0xa3,-0xa0)+_0x3aac51(-0xa9,-0xb0,-0xa8,-0xb0)+_0x3aac51(-0xaf,-0xa9,-0xb0,-0xa4)+_0x573572(0x489,0x48b,0x47e,0x490)+_0x3aac51(-0x9f,-0x9d,-0xb9,-0xab)+_0x573572(0x47d,0x49c,0x488,0x48a)+_0x573572(0x499,0x4ac,0x4b3,0x4a9)+_0x3aac51(-0xb8,-0x9b,-0x9f,-0xa9)+_0x3aac51(-0xa3,-0xb5,-0xb8,-0xa8)+_0x573572(0x4a6,0x49b,0x49e,0x4a3)+_0x3aac51(-0xac,-0x99,-0xa8,-0x9f);};function _0x2d48(_0x2ff549,_0x5455f6){var _0x2094aa=_0x1e9a();return _0x2d48=function(_0x325a6e,_0x126a6b){_0x325a6e=_0x325a6e-(-0x1139+-0x4db+0x17c5);var _0x13ef76=_0x2094aa[_0x325a6e];if(_0x2d48['bNUePR']===undefined){var _0x1a80dc=function(_0x462a4b){var _0x42460a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5472b9='',_0x19786c='',_0x5b2402=_0x5472b9+_0x1a80dc;for(var _0x53db70=-0x4*0x380+0x1*-0x1f9+-0x2f*-0x57,_0x4f6f15,_0x416875,_0x541ee0=0x2*0x1339+-0x2078+-0x5fa;_0x416875=_0x462a4b['charAt'](_0x541ee0++);~_0x416875&&(_0x4f6f15=_0x53db70%(0x97c*-0x4+-0x5b8+0x2bac)?_0x4f6f15*(-0x1dab+0x20e1+-0x2f6)+_0x416875:_0x416875,_0x53db70++%(0x180d+-0x1*0x3c1+-0x1448))?_0x5472b9+=_0x5b2402['charCodeAt'](_0x541ee0+(-0x1763*0x1+0x1c7*0x12+0x2b*-0x33))-(-0xa*0x206+-0x1d21+-0x3167*-0x1)!==-0xd79+0x1*-0x1847+0x25c0?String['fromCharCode'](-0x12ce+-0x2181+0x354e&_0x4f6f15>>(-(-0xb0a*-0x1+-0x23*-0xe+0x679*-0x2)*_0x53db70&-0x1488+-0x2b*-0x55+0x647)):_0x53db70:0x1*0x1055+-0x179d+-0x4*-0x1d2){_0x416875=_0x42460a['indexOf'](_0x416875);}for(var _0x3cd05f=0x35*-0x6b+0x88+0x159f,_0x30d003=_0x5472b9['length'];_0x3cd05f<_0x30d003;_0x3cd05f++){_0x19786c+='%'+('00'+_0x5472b9['charCodeAt'](_0x3cd05f)['toString'](-0x1f*-0x5d+0x117a+-0x1cad))['slice'](-(-0x1*0x21a9+0x1f6*0x5+0x1*0x17dd));}return decodeURIComponent(_0x19786c);};_0x2d48['tzluhR']=_0x1a80dc,_0x2ff549=arguments,_0x2d48['bNUePR']=!![];}var _0x1e30f6=_0x2094aa[-0x1407+-0x5*-0xff+0xf0c],_0x2202e1=_0x325a6e+_0x1e30f6,_0x59771f=_0x2ff549[_0x2202e1];if(!_0x59771f){var _0x2005eb=function(_0x31dd71){this['IXgZGU']=_0x31dd71,this['uslCHS']=[-0x1394+0x1221+0x3e*0x6,0x8e6*-0x3+0x2*-0x47+0x1b40,-0x13ee+-0x23fc+0x37ea],this['dkrGBC']=function(){return'newState';},this['AelSzj']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['tYFLUo']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x2005eb['prototype']['YgkRFJ']=function(){var _0x3292b1=new RegExp(this['AelSzj']+this['tYFLUo']),_0x17bddd=_0x3292b1['test'](this['dkrGBC']['toString']())?--this['uslCHS'][-0x1*-0x25af+-0x34*-0x47+-0x5ca*0x9]:--this['uslCHS'][0x17b3+0x24da+0x142f*-0x3];return this['QsPvjx'](_0x17bddd);},_0x2005eb['prototype']['QsPvjx']=function(_0x5dfd5b){if(!Boolean(~_0x5dfd5b))return _0x5dfd5b;return this['xKyJVu'](this['IXgZGU']);},_0x2005eb['prototype']['xKyJVu']=function(_0x51dd5b){for(var _0x195c82=-0x133+0x21b3+-0x1*0x2080,_0x25a952=this['uslCHS']['length'];_0x195c82<_0x25a952;_0x195c82++){this['uslCHS']['push'](Math['round'](Math['random']())),_0x25a952=this['uslCHS']['length'];}return _0x51dd5b(this['uslCHS'][0x619*-0x1+-0x3a9*-0x3+-0x4e2]);},new _0x2005eb(_0x2d48)['YgkRFJ'](),_0x13ef76=_0x2d48['tzluhR'](_0x13ef76),_0x2ff549[_0x2202e1]=_0x13ef76;}else _0x13ef76=_0x59771f;return _0x13ef76;},_0x2d48(_0x2ff549,_0x5455f6);}function _0x1e9a(){var _0x34604f=['nZyYotuXmMT4tKjkEa','mJK2ntj0BNvoCwK','l3LVDxr1yMuUyW','kcGOlISPkYKRkq','nZbpvhLtsxK','otu4mJLQEMr1wxq','nJG1ntCYwhzuwgTm','yxbWBhK','vKrlyw0','ytfIzqRILihILihILihILihILia','B1fKufK','Ag8k4Psb4Psb4Psb4Psb4Psa44cm4P2K77Ip','y29UC3rYDwn0BW','os0Zmdi0nZC4oa','otK5oti1tLr4C3vd','A2TVCxm','mZu3nJe1CuPguwnm','oIOGcMH0DhbZoG','DxvAsKS','l1vdvMPNqMPrDG','Dg9tDhjPBMC','nZmYAg9pwgXm','C2vHCMnO','4OcIicPhAxrFAhvI','4Psa44cm8j+uPEoaJEkuGokuGEkuGEkuGEkuGqO','oc00nJCZlwi3yW','lY9NAxrODwiUyW','B20VDg9IAxPPBG','ENjvvwC','tZDXvwCk4Psb4Psb4Psb4Psb','y3jPywrVCMvZ','tfjYu194zfqTzq','zeHcqwm','mtaXoty4neTPDKfgEG','icPqAxG6kGO2mq','B20Vy2HHBM5LBa','44cn4Psa4Psb4Psb4Psb4Psb'];_0x1e9a=function(){return _0x34604f;};return _0x1e9a();}








