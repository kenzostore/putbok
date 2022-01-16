let handler = async (m, { conn, usedPrefix, command }) => {
    await conn.sendButton(m.chat, `“${conn.pickRandom(global.sesad)}”`, '© Putbotz', 'sesad', `${usedPrefix + command}`, m)
}
handler.help = ['sesad']
handler.tags = ['quotes']
handler.command = /^(sesad)$/i

module.exports = handler

global.sesad = [
  "untung gua jeles,jadi ada alasan buat jomblo wkwk",
  "Kata kata tersakit pas lebaran menurut gua adalah *Kamu gak ush y,Kan udah gede*",
