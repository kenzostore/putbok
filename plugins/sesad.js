let handler = async (m, { conn, usedPrefix, command }) => {
    await conn.sendButton(m.chat, `“${conn.pickRandom(global.sesad)}”`, '© Putbotz', 'sesad', `${usedPrefix + command}`, m)
}
handler.help = ['sesad']
handler.tags = ['quotes']
handler.command = /^(sesad)$/i

module.exports = handler

global.sesad = [
