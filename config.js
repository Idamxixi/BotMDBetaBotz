const fs = require("fs")
const chalk = require("chalk")

// Other
global.thum = "https://telegra.ph/file/7188012d573871aaf4fa0.jpg"
global.log0 = fs.readFileSync("./media/images.jpg")
global.thumb = fs.readFileSync("./media/images.jpg")
global.err4r = "https://telegra.ph/file/7188012d573871aaf4fa0.jpg"
global.owner = ['6285691890852','6285691890852','6285691890852']
global.lolhuman = "RelzzAPIs"
global.rkyt = []
global.banUser = ['']
global.ntilink = ['120363042526543638@g.us','120363024920013325@g.us','120363039329527308@g.us','120363040599533141@g.us','120363023278327109@g.us','120363022782381398@g.us']
global.wlcm = ['120363042526543638@g.us','120363024920013325@g.us','120363039329527308@g.us','120363040599533141@g.us','120363023278327109@g.us','120363022782381398@g.us']
global.gcrevoke = ['']
global.packname = "© 𝚞𝚕𝚝𝚛𝚊𝚖𝚊𝚗𝚋𝚘𝚝𝚣"
global.packname2 = "ᵒʷⁿᵉʳ ᵘˡᵗʳᵃᵐᵃⁿᵇᵒᵗᶻ"
global.author = "ｉｄａｍｘｉｘｉ"
global.sessionName = "session"
global.namebot = "𝚞𝚕𝚝𝚛𝚊𝚖𝚊𝚗𝚋𝚘𝚝𝚣"
global.linkgrupss = "https://chat.whatsapp.com/EHByam2PJGiKrSclraOftK"
global.antitags = ['6285691890852@s.whatsapp.net']
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: '*Success!*',
    admin: '*Fitur Khusus Admin Group Cuy!*',
    botAdmin: '*Bot Aja Bukan Admin Anj‼️*',
    owner: '*Fitur Khusus ｉｄａｍｘｉｘｉ*',
    group: '*Fitur Digunakan Hanya Untuk Group!*',
    private: '*Fitur Digunakan Hanya Untuk Private Chat!*',
    bot: '*Fitur Khusus Pengguna Nomor Bot*',
    wait: '*Tunggu Sebentar Y Sayang ...Kalo Lama Balasnya Mungkin Delay)!*',
    linkm: 'Linknya Mana Kak?',
    ban: '*Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner*'
}
global.limitawal = {
    premium: "Infinity",
    free: 20,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 20
}
// Beli Di Zenz Yo
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Isi Api Mu Di sini
global.APIKeys = {
	'https://zenzapis.xyz': 'BagasPrdn',
}
//Thank Fax Bot
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
