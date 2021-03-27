const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const axios = require('axios')
const moment = require('moment-timezone')
const get = require('got')
const fetch = require('node-fetch')
const color = require('./lib/color')
const errorImg = 'https://i.ibb.co/x5Ms3wc/10435152-0.png'
const { spawn, exec } = require('child_process')
const emojiUnicode = require('emoji-unicode')
const listkey = ['kfvbfdhvgis','sgfudsavbuba','fuvn4734t4','nvnjavnjgui','vnvabvvnnai','eudvmjfvknfv','ndohdbbgfa','vbiabdsub','bvisdicibai']
const nhentai = require('nhentai-js')
const snnya = ['DBGBSJKVJBI58JBC','VFBHAUNFAFBBUA5VJN5','BSNLIJGFHDK6JVSK','KSSHFGSUWABCJX5NVAUI','BVJSHVDJNVMDLAJ5KDJ','PSJHVSFVHR5CNFDIVD','HFHSIVHDN27NCVHDK','BVAIVAJFHDNSB5JBHDKS','PAHDVKWFHSJVI67JXGVND','kfvbfdhvgis','sgfudsavbuba','fuvn4734t4','nvnjavnjgui','vnvabvvnnai','eudvmjfvknfv','ndohdbbgfa','vbiabdsub','bvisdicibai']
const { API } = require('nhentai-api')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const NoLink = JSON.parse(fs.readFileSync('./lib/NoLink.json'))
const virus = JSON.parse(fs.readFileSync('./lib/virus.json'))
const autostick = JSON.parse(fs.readFileSync('./lib/autosticker.json'))
const autojoin = JSON.parse(fs.readFileSync('./lib/autojoin.json'))
const os = require('os')
const qrcode = require('qrcode')
const ms = require('parse-ms')
const Math_js = require('mathjs')
const ppbot = 'https://i.ibb.co/bPsF72Q/Benny-BOT-3-20201227-221100.jpg'
const errorurl = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
const errorurl2 = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
const acak = JSON.parse(fs.readFileSync('./lib/acak.json'))
const config = JSON.parse(fs.readFileSync('./config.json'))
const ngegas = JSON.parse(fs.readFileSync('./lib/kasar.json'))
const wel = JSON.parse(fs.readFileSync('./lib/welcome.json')) 
const rate = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
const { artinama, liriklagu, stickerburn, stickertrigger, uploadImages, quotemaker, quoteit, processTime, getStickerMaker, covidworld, randomNimek, fb, sleep, jadwalTv, ss, wall } = require('./lib/functions')
const { help, snk, info, donate, readme, listChannel } = require('./lib/help2')
const { stdout } = require('process')
const nsfwgrp = JSON.parse(fs.readFileSync('./lib/nsfw.json'))
const nsfw_ = JSON.parse(fs.readFileSync('./lib/NSFW.json'))
const welkom = JSON.parse(fs.readFileSync('./lib/welcome.json'))
const { RemoveBgResult, removeBackgroundFromImageBase64, removeBackgroundFromImageFile } = require('remove.bg')
const _registered = JSON.parse(fs.readFileSync('./ingfo/registered.json'))
const umur = JSON.parse(fs.readFileSync('./ingfo/umur.json'))
const _premium = JSON.parse(fs.readFileSync('./ingfo/premium.json'))
const ban = JSON.parse(fs.readFileSync('./lib/banned.json'))                           
const ben = JSON.parse(fs.readFileSync('./settings/banned.json'))
const msgFilter = require('./lib/msgFilter')
const ruleArr = JSON.parse(fs.readFileSync('./settings/rule.json'))
const images = require('./utils/images')
const rugaapi = require('./utils/rugaApi')
const nekopoi = require('./lib/nekopoi')
const settingan = JSON.parse(fs.readFileSync('./lib/setting.json'))
const shortener = require('./utils/shortener')
const isUrls = require('./utils/index')
const meme = require('./utils/meme')
const translate = require('./utils/translate')
const rugapoi = require('./utils/nekopoi')
const getLocationData = require('./utils/location')
const vhtear = 'APIKEY'

moment.tz.setDefault('Asia/Jakarta').locale('id')

module.exports = bennymsg = async (client = new Client(), message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, author, quotedMsg, quotedMsgObj, mentionedJidList } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName } = sender
        pushname = pushname || verifiedName
        const commands = caption || body || ''
        const command = commands.toLowerCase().split(' ')[0] || ''
        const args =  commands.split(' ')
		const monospace = '```'

        const msgs = (message) => {
            if (command.startsWith('#'))  {
                if (message.length >= 10){
                    return `${message.substr(0, 15)}`
                }else{
                    return `${message}`
                }
            }
        }
		

        const mess = {
			write: '*[WAIT]* Sedang menambahkan nomor anda ke database⏳',
            wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
            error: {
                St: '[❗] Kirim gambar dengan caption *#sticker* atau tag gambar yang sudah dikirim',
                Qm: '[❗] Terjadi kesalahan, mungkin themenya tidak tersedia!',
                Yt3: '[❗] Terjadi kesalahan, tidak dapat meng konversi ke mp3!',
                Yt4: '[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem.',
                Ig: '[❗] Terjadi kesalahan, mungkin karena akunnya private',
                Ki: '[❗] Bot tidak bisa mengeluarkan admin group!',
                Ad: '[❗] Tidak dapat menambahkan target, mungkin karena di private',
                Iv: '[❗] Link yang anda kirim tidak valid!'
            }
        }
        
		const prefix = settingan.prefix
		const isCmd = command.startsWith(prefix)
        const isCmdo = command.startsWith('!')
        const isCmdi = command.startsWith('$')
        const isCmdn = command.startsWith('.')
        const isCmdv = command.startsWith('/')
        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
		const url = args.length !== 0 ? args[0] : ''
        const botNumber = await client.getHostNumber()
		const superOwner = JSON.parse(fs.readFileSync('./settings/superowner.json'))
		const owner = JSON.parse(fs.readFileSync('./settings/owner.json'))
		const afk = JSON.parse(fs.readFileSync('./lib/afk.json'))
        const blockNumber = await client.getBlockedIds() 
		const isPrem = listkey.includes(chatId)
		const isNoLink = isGroupMsg ? NoLink.includes(chatId) : false
		const isVirus = isGroupMsg ? virus.includes(chatId) : false
		const isAuto = isGroupMsg ? autojoin.includes(chatId) : false
		const isAutoStick = isGroupMsg ? autostick.includes(chatId) : false
		const serial = sender.id
		const dari = sender && sender.isMe ? to : from
		const limit = JSON.parse(fs.readFileSync('./lib/limit.json'))
		let limitCount = settingan.limitCount
		let banChats = settingan.banChats2
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
		const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
		const text = type === 'text'
		const pengirim = sender.id
		const isRule = ruleArr.includes(chatId)
		const saya = '6287741097274@c.us'
		const creator = '6289636006352@c.us'
		const isNgegas = ngegas.includes(chatId)
		const isSuper = superOwner.includes(sender.id)
		const isPilot = owner.includes(sender.id)
		const isAfk = afk.includes(sender.id)
        const isBlocked = blockNumber.includes(sender.id)
		const isRegistered = _registered.includes(sender.id)
		const isPremium = _premium.includes(sender.id)
        const isNsfw = isGroupMsg ? nsfw_.includes(chatId) : false
		const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
		const q = args.join(' ')
		const typu = message
		const isBanned = ban.includes(sender.id)
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
		
        if (!isGroupMsg && command.startsWith('#')) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(msgs(command)), 'from', color(pushname))
        if (isGroupMsg && command.startsWith('#')) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(msgs(command)), 'from', color(pushname), 'in', color(formattedTitle))
		if (!isGroupMsg && !command.startsWith('#')) console.log('\x1b[1;33m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color(body), 'from', color(pushname))
        if (isGroupMsg && !command.startsWith('#')) console.log('\x1b[1;33m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color(body), 'from', color(sender.id), 'in', color(formattedTitle))
		
		msgFilter.addFilter(from)
		
		//client.sendSeen(chatId)
		
		if (isCmd && isBanned) return
		
		if (isGroupMsg && isVirus && !isSuper && isBotGroupAdmins) {
		if (text.length === 500) {
		client.reply(dari, `Opps Atakel dadakan`, id)
		await client.removeParticipant(groupId, sender.id)
		    }
		}
		
		// Anti-group link detector
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isNoLink && !isPilot && !isSuper) {
            if (chats.match(new RegExp(/(https:\/\/chat.whatsapp.com)/gi))) {
                const valid = await client.inviteInfo(chats)
                if (valid) {
                    console.log(color('[KICK]', 'red'), color('Received a group link and it is a valid link!', 'yellow'))
                    await client.reply(from, `*「 GROUP LINK DETECTOR 」*\nKamu dikick karena mengirimkan link group lain!`, id)
                    await client.removeParticipant(groupId, sender.id)
                } else {
                    console.log(color('[WARN]', 'yellow'), color('Received a group link but is not a valid link!', 'yellow'))
                }
            }
        }
		
		const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
            if (chats.match(new RegExp(/(https:\/\/chat.whatsapp.com)/gi))) {
                await client.joinGroupViaLink(chats)
				console.log(color('[AUTO JOIN]', 'cyan'), color('Otw join gan!', 'yellow'))
            }
		
		if (isGroupMsg && isBotGroupAdmins) {
				const allMem = await client.getGroupMembers(groupId)
            for (let i = 1; i < allMem.length; i++) {
                    await client.demoteParticipant(groupId, allMem[i])
				console.log(color('[AUTO ADMIN]', 'cyan'), color('BRING ME THE HORIZON 2011', 'yellow'))
			}
        }
		
		function limitAdd(id) {
            if (isPremium) {
                return;
            }
            var found = false;
            Object.keys(limit).forEach((i) => {
                if (limit[i].id == id) {
                    found = i
                }
            })
            if (found !== false) {
                limit[found].limit += 1;
                fs.writeFileSync('./lib/limit.json', JSON.stringify(limit));
            }
        }
		
		function isMedialimit(id) {
            if (isAdmin) {
                return false;
            }
            let found = false;
            for (let i of medialimit) {
                if (i.id === id) {
                    let limitsa = i.medialimit;
                    if (limitsa >= medialimitCount) {
                        found = true;
                        client.reply(dari, 'Perintah media anda sudah mencapai batas, coba esok hari atau coba perintah lain:)', id)
                        return true;
                    } else {
                        medialimit
                        found = true;
                        return false;
                    }
                }
            }
            if (found === false) {
                let obj = {
                    id: `${id}`,
                    medialimit: 1
                };
                medialimit.push(obj);
                fs.writeFileSync('./lib/medialimit.json', JSON.stringify(medialimit));
                return false;
            }
        }
		
		function banChat() {
            if (banChats == true) {
                return false
            } else {
                return true
            }
        }

        function MedialimitAdd(id) {
            if (isAdmin) {
                return;
            }
            var found = false;
            Object.keys(medialimit).forEach((i) => {
                if (medialimit[i].id == id) {
                    found = i
                }
            })
            if (found !== false) {
                medialimit[found].medialimit += 1;
                fs.writeFileSync('./lib/medialimit.json', JSON.stringify(medialimit));
            }
        }
		
		if (body === '#public') {
            if (!isPilot) return client.reply(dari, 'Maaf, perintah ini hanya dapat dilakukan oleh owner bot!', id)
            if (settingan.banChats === false) return
            settingan.banChats = false
            banChats = false
            fs.writeFileSync('./lib/setting.json', JSON.stringify(settingan, null, 2))
            client.reply(dari, '*PUBLIC MODE*', id)
		}
		
	    if (sender.isMe === '#help') {
            if (!sender.isMe) return client.reply(dari, 'SELF BOT!!', id)
            client.reply(dari, help, id)
		}
		
		/* if (args.includes('@6289636006352')) { //replace with your bot number
            client.reply(dari, 'Iya ada apa?', id)
        }
		
		if (isGroupMsg && isAutoStick) {
		if (isMedia && typu === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(dari, imageBase64)
            } 
		}
		
		 if (!isSuper) return */
   		 switch(command) {
	/*case '#antivirus':
                    if (!isGroupMsg) return client.reply(dari, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                    if (!isGroupAdmins) return client.reply(dari, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
                    if (args.length === 1) return client.reply(dari, 'Pilih enable atau disable!', id)
					if (args[1].toLowerCase() === 'on') {
					if (isVirus) return  client.reply(dari, 'Fitur ini sudah diaktifkan!', id)
                        virus.push(chatId)
                        fs.writeFileSync('./lib/virus.json', JSON.stringify(virus))
                        client.reply(dari, 'Fitur anti virus berhasil di aktifkan di group ini!', id)
                        await client.reply(dari, 'Kalau mau bot langsung kick yang kirim virus, Jadikan bot admin terlebih dahulu!', id)
                    } else if (args[1].toLowerCase() === 'off') {
                        virus.splice(chatId, 1)
                        fs.writeFileSync('./lib/virus.json', JSON.stringify(virus))
                        client.reply(dari, 'Fitur anti virus berhasil di nonaktifkan di group ini!', id)
                    } else {
                        client.reply(dari, 'Pilih on atau off udin!', id)
                    }
                    break
	case '#autojoin':
                    if (!isGroupMsg) return client.reply(dari, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                    if (!isSuper) return client.reply(dari, 'Perintah ini hanya bisa di gunakan oleh super owner!', id)
                    if (args.length === 1) return client.reply(dari, 'Pilih enable atau disable!', id)
					if (args[1].toLowerCase() === 'on') {
				    if (isAuto) return  client.reply(dari, 'Fitur ini sudah diaktifkan!', id)
                        autojoin.push(chatId)
                        fs.writeFileSync('./lib/autojoin.json', JSON.stringify(autojoin))
                        client.reply(dari, 'Fitur Auto join berhasil di aktifkan di group ini!', id)
                    } else if (args[1].toLowerCase() === 'off') {
                        autojoin.splice(chatId, 1)
                        fs.writeFileSync('./lib/autojoin.json', JSON.stringify(autojoin))
                        client.reply(dari, 'Fitur Auto join berhasil di nonaktifkan di group ini!', id)
                    } else {
                        client.reply(dari, 'Pilih on atau off udin!', id)
                    }
                    break
	case '#setgpname':
	case '#setgcname':
            if (!isGroupMsg) return client.reply(dari, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
            if (!isGroupAdmins) return client.reply(dari, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
            if (!isBotGroupAdmins) return client.reply(dari, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id)
                    arg = body.trim().split('|')
					const detv = await client.getChatById(groupId)
			        const gropnama = detv.contact.formattedName 
					const namagrup = body.slice(11)
                    let halaman = global.page ? global.page : await client.getPage()
                    await halaman.evaluate((chatId, subject) =>
                        Store.WapQuery.changeSubject(chatId, subject), groupId, `${namagrup}`)
                    client.sendTextWithMentions(dari, `Nama group telah diubah oleh admin @${sender.id.replace('@c.us','')}\n\n• Before: ${gropnama}\n• After: ${namagrup}`)
                    break
	 case '#groupicon':
		 if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
           if (!isGroupMsg) return client.reply(dari, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
            var grouppic = await client.getProfilePicFromServer(chatId)
            var gp = grouppic 
            await client.sendFileFromUrl(dari, gp, 'group.png')
			break
    case '#mutegrup':
	case '#mutegroup':
			if (!isGroupMsg) return client.reply(dari, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
            if (!isGroupAdmins) return client.reply(dari, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
            if (!isBotGroupAdmins) return client.reply(dari, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id)
			if (args.length === 1) return client.reply(dari, 'Pilih on atau off!', id)
			if (args[1].toLowerCase() === 'on') {
				client.setGroupToAdminsOnly(groupId, true).then(() => client.sendText(dari, 'Berhasil mengubah agar hanya admin yang dapat chat!'))
		    } else if (args[1].toLowerCase() === 'off') {
				client.setGroupToAdminsOnly(groupId, false).then(() => client.sendText(dari, 'Berhasil mengubah agar semua anggota dapat chat!'))
			} else {
				client.reply(dari, `Untuk mengubah settingan group chat agar hanya admin saja yang bisa chat\n\nPenggunaan:\n${prefix}mutegrup on --aktifkan\n${prefix}mutegrup off --nonaktifkan`, id)
			}
			break
    case '#setprofile':
	case '#seticongroup':
	case '#seticon':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (!isGroupMsg) return client.reply(dari, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
        if (!isGroupAdmins) return client.reply(dari, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
        if (!isBotGroupAdmins) return client.reply(dari, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id)
		if (isMedia && type == 'image' || isQuotedImage) {
				const url = args.length !== 0 ? args[0] : ''
				client.reply(dari, mess.wait, id)
				const dataMedia = isQuotedImage ? quotedMsg : message
				const _mimetype = dataMedia.mimetype
				const mediaData = await decryptMedia(dataMedia, uaOverride)
				const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
				await client.setGroupIcon(groupId, imageBase64)
			} else if (args.length === 1) {
				if (!isUrl(url)) { await client.reply(dari, 'Maaf, link yang kamu kirim tidak valid.', id) }
				client.setGroupIconByUrl(groupId, url).then((r) => (!r && r !== undefined)
				? client.reply(dari, 'Maaf, link yang kamu kirim tidak memuat gambar.', id)
				: client.reply(dari, 'Berhasil mengubah profile group', id))
			} else {
				client.reply(dari, `Commands ini digunakan untuk mengganti icon/profile group chat\n\n\nPenggunaan:\n1. Silahkan kirim/reply sebuah gambar dengan caption ${prefix}setprofile\n\n2. Silahkan ketik ${prefix}setprofile linkImage`)
			}
			break
	case '#nsfw':
	    if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (!isGroupMsg) return client.reply(dari, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (args.length === 1) return client.reply(dari, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                nsfw_.push(chatId)
                fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
                client.reply(dari, 'NSWF Command berhasil di aktifkan di group ini! kirim perintah *#nsfwMenu* untuk mengetahui menu', id)
            } else if (args[1].toLowerCase() === 'disable') {
                nsfw_.splice(chatId, 1)
                fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
                client.reply(dari, 'NSFW Command berhasil di nonaktifkan di group ini!', id)
            } else {
                client.reply(dari, 'Pilih enable atau disable udin!', id)
            }
            break
    case '#welcome':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        if (!isGroupMsg) return client.reply(dari, 'Perintah ini hanya bisa di gunakan dalam group!', id)
        if (args.length === 1) return client.reply(dari, 'Pilih enable atau disable!', id)
        if (args[1].toLowerCase() === 'enable') {
                welkom.push(chatId)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
                client.reply(dari, 'Fitur welcome berhasil di aktifkan di group ini!', id)
            } else if (args[1].toLowerCase() === 'disable') {
                welkom.splice(chatId, 1)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
                client.reply(dari, 'Fitur welcome berhasil di nonaktifkan di group ini!', id)
            } else {
                client.reply(dari, 'Pilih enable atau disable udin!', id)
            }
            break
    case '#nsfwmenu':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (isBanned) return await client.reply(dari, `Maaf, Nomor kamu telah dibanned!`, id)
        if (!isNsfw) return
            client.reply(dari, '1. #randomHentai\n2. #randomNsfwNeko', id)
            break
    case '#nh':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        if (args.length === 2) {
                const nuklir = body.split(' ')[1]
                client.reply(dari, mess.wait, id)
                const cek = await nhentai.exists(nuklir)
                if (cek === true)  {
                    try {
                        const api = new API()
                        const pic = await api.getBook(nuklir).then(book => {
                            return api.getImageURL(book.cover)
                        })
                        const dojin = await nhentai.getDoujin(nuklir)
                        const { title, details, link } = dojin
                        const { parodies, tags, artists, groups, languages, categories } = await details
                        var teks = `*Title* : ${title}\n\n*Parodies* : ${parodies}\n\n*Tags* : ${tags.join(', ')}\n\n*Artists* : ${artists.join(', ')}\n\n*Groups* : ${groups.join(', ')}\n\n*Languages* : ${languages.join(', ')}\n\n*Categories* : ${categories}\n\n*Link* : ${link}`
                        exec('nhentai --id=' + nuklir + ` -P mantap.pdf -o ./hentong/${nuklir}.pdf --format `+ `${nuklir}.pdf`, (error, stdout, stderr) => {
                            client.sendFileFromUrl(dari, pic, 'hentod.jpg', teks, id).then(() => 
                            client.sendFile(dari, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', id)).catch(() => 
                            client.sendFile(dari, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', id))
                            if (error) {
                                console.log('error : '+ error.message)
                                return
                            }
                            if (stderr) {
                                console.log('stderr : '+ stderr)
                                return
                            }
                            console.log('stdout : '+ stdout)
                            })
                    } catch (err) {
                        client.reply(dari, '[❗] Terjadi kesalahan, mungkin kode nuklir salah', id)
                    }
                } else {
                    client.reply(dari, '[❗] Kode nuClear Salah!')
                }
            } else {
                client.reply(dari, '[ WRONG ] Kirim perintah *#nh [nuClear]* untuk contoh kirim perintah *#readme*')
            }
        	break
    case '#linkgroup':
		if (isBanned) return await client.reply(dari, `Maaf, Nomor kamu telah dibanned!`, id)
	    if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        if (!isBotGroupAdmins) return client.reply(dari, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
        if (isGroupMsg) {
                const inviteLink = await client.getGroupInviteLink(groupId);
                client.sendLinkWithAutoPreview(dari, inviteLink, `\nLink group *${name}*`)
            } else {
            	client.reply(dari, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            }
            break
    case '#adminlist':
	if (isBanned) return await client.reply(dari, `Maaf, Nomor kamu telah dibanned!`, id)
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
    if (!isGroupMsg) return client.reply(dari, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            let mimin = ''
            for (let admon of groupAdmins) {
                mimin += `➸ @${admon.replace(/@c.us/g, '')}\n` 
            }
            await sleep(2000)
            await client.sendTextWithMentions(dari, mimin)
            break
	case '#randomtag':
	if (isBanned) return await client.reply(dari, `Maaf, Nomor kamu telah dibanned!`, id)
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
    if (!isGroupMsg) return client.reply(dari, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const groupMems = await client.getGroupMembers(groupId)
			let fdkj = groupMems[Math.floor(Math.random() * groupMems.length)] 
            await client.sendTextWithMentions(dari, `@${miminh}`)
            break
    case '#mentionall':
	case '#tagall':
		if (isBanned) return await client.reply(dari, `Maaf, Nomor kamu telah dibanned!`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        if (!isGroupMsg) return client.reply(dari, 'Perintah ini hanya bisa di gunakan dalam group!', id)
        if (!isGroupAdmins) return client.reply(dari, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            const groupMem = await client.getGroupMembers(groupId)
            let hehe = '' 
            for (let i = 0; i < groupMem.length; i++) {
                hehe += ''
                hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehe += ''
            await sleep(2000)
            await client.sendTextWithMentions(dari, hehe, id)
            break
    case '#kickall':
		if (isBanned) return await client.reply(dari, `Maaf, Nomor kamu telah dibanned!`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        if (!isGroupMsg) return client.reply(dari, 'Perintah ini hanya bisa di gunakan dalam group!', id)
		if (!isGroupAdmins) return client.reply(dari, 'Perintah ini hanya bisa digunakan oleh admin group!', id)
        if (!isBotGroupAdmins) return client.reply(dari, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMem = await client.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                    await client.removeParticipant(groupId, allMem[i].id)
            }
            await client.reply(dari, 'Succes kick all members', id)
            break
    case '#banall':
			if (!isPilot) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh owner bot`, id)
		    if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (!isGroupMsg) return client.reply(dari, 'Perintah ini hanya bisa di gunakan dalam group!', id)
			const grupmem = await client.getGroupMembers(groupId, sender.id)
            for (let blast of grupmem) 
                    ben.push(blast)
                    fs.writeFileSync('./settings/banned.json', JSON.stringify(ben))
            await client.reply(dari, 'Succes ban all members', id)
            break
	case '#unbanall':
		if (!isPilot) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh owner bot`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (!isGroupMsg) return client.reply(dari, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            let beneta = ben.indexOf(ban[0])
                ben.splice(beneta)
                fs.writeFileSync('./settings/banned.json', JSON.stringify(ben))
            await client.reply(dari, 'Succes unban all members', id)
            break
    case '#deskgrup':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
	    if (!isGroupMsg) return client.reply(dari, 'Perintah ini hanya bisa digunakan didalam grup', id)
			const det = await client.getChatById(groupId)
			const groupname = det.contact.formattedName 
		    const deskripsi = det.groupMetadata.desc
		    await client.reply(dari, `Ini deskripsi grup \n[${groupname}] \n${deskripsi}`, id)
		    break
    case '#demoteall':
		if (isBanned) return await client.reply(dari, `Maaf, Nomor kamu telah dibanned!`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (!isGroupMsg) return client.reply(dari, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isBotGroupAdmins) return client.reply(dari, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMemi = await client.getGroupMembers(groupId)
            for (let i = 0; i < allMemi.length; i++) {
                    await client.demoteParticipant(groupId, allMemi)
            }
            client.reply(dari, 'Succes demote all member', id)
            break
	case '#promoteall':
		if (isBanned) return await client.reply(dari, `Maaf, Nomor kamu telah dibanned!`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (!isGroupMsg) return client.reply(dari, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isBotGroupAdmins) return client.reply(dari, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMemu = await client.getGroupMembers(groupId) 
                    client.promoteParticipant(groupId, allMemu)
            await client.reply(dari, 'Succes promote all member', id)
            break
    case '#groupinfo':
		 if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (!isGroupMsg) return client.reply(dari, '.', id) 
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupnama = name
            var welgrp = wel.includes(chatId)
            var ngrp = nsfwgrp.includes(chatId)
            var grouppic = await client.getProfilePicFromServer(chatId)
            if (grouppic == undefined) {
                 var pfp = errorurl
            } else {
                 var pfp = grouppic 
            }
            await client.sendFileFromUrl(dari, pfp, 'group.png', `*${groupnama}* 

🌐️ *Members: ${totalMem}*

💌️ *Welcome: ${welgrp}*

🔮️ *Rule* : *${isRule}*

⚜️ *NSFW: ${ngrp}*

📃️ *Group Description* 

${desc}`)
            break
	case '#add':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            const orang = args[1]
            if (!isGroupMsg) return client.reply(dari, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return client.reply(dari, 'Untuk menggunakan fitur ini, kirim perintah *#add* 628xxxxx', id)
            if (!isGroupAdmins) return client.reply(dari, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return client.reply(dari, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            try {
                await client.addParticipant(dari, `${orang}@c.us`)
            } catch {
                client.reply(dari, mess.error.Ad, id)
            }
            break
			case '#prank':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (!isGroupMsg) return client.reply(dari, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return client.reply(dari, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return client.reply(dari, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return client.reply(dari, 'Untuk menggunakan Perintah ini, kirim perintah *#kick* @tagmember', id)
            await client.sendText(dari, `Perintah diterima, mengeluarkan:\n${mentionedJidList.join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                await client.removeParticipant(groupId, mentionedJidList[i])
            }
			await client.addParticipant(dari, mentionedJidList).then(() => client.sendText(dari, 'SELAMAT KAMU KENA PRANK KAMERA NYA AKU TARO SITU'))
            break
        case '#kick':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (!isGroupMsg) return client.reply(dari, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return client.reply(dari, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return client.reply(dari, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return client.reply(dari, 'Untuk menggunakan Perintah ini, kirim perintah *#kick* @tagmember', id)
            await client.sendText(dari, `Perintah diterima, mengeluarkan:\n${mentionedJidList.join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                await client.removeParticipant(groupId, mentionedJidList[i])
            }
            break
    case '#leave':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        if (!isGroupMsg) return client.reply(dari, 'Perintah ini hanya bisa di gunakan dalam group', id)
        if (!isPilot) return client.reply(dari, 'Perintah ini hanya bisa di gunakan oleh owner bot', id)
            await client.sendText(dari,'Dadah').then(() => client.leaveGroup(groupId))
            break
    case '#promote':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        if (!isGroupMsg) return client.reply(dari, 'Fitur ini hanya bisa di gunakan dalam group', id)
	    if (!isGroupAdmins) return client.reply(dari, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
        if (!isBotGroupAdmins) return client.reply(dari, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
        if (mentionedJidList.length === 0) return client.reply(dari, 'Untuk menggunakan fitur ini, kirim perintah *#promote* @tagmember', id)
        if (groupAdmins.includes(mentionedJidList[0])) return client.reply(dari, 'Maaf, user tersebut sudah menjadi admin.', id)
            await client.promoteParticipant(groupId, mentionedJidList[0])
            await client.sendTextWithMentions(dari, `Perintah diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)
            break
    case '#demote':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        if (!isGroupMsg) return client.reply(dari, 'Fitur ini hanya bisa di gunakan dalam group', id)
        if (!isGroupAdmins) return client.reply(dari, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
        if (!isBotGroupAdmins) return client.reply(dari, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
        if (mentionedJidList.length === 0) return client.reply(dari, 'Untuk menggunakan fitur ini, kirim perintah *#demote* @tagadmin', id)
        if (mentionedJidList.length >= 2) return client.reply(dari, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
        if (!groupAdmins.includes(mentionedJidList[0])) return client.reply(dari, 'Maaf, user tersebut tidak menjadi admin.', id)
            await client.demoteParticipant(groupId, mentionedJidList[0])
            await client.sendTextWithMentions(dari, `Perintah diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break
	case '#revlinkgroup':
	case '#resetlink':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        if(isGroupMsg && isBotGroupAdmins && isGroupAdmins) {
			client.reply(dari, mess.wait, id)
            await client.revokeGroupInviteLink(groupId)
            } else if(!isGroupMsg) {
                client.reply(dari, 'Fitur ini hanya bisa di gunakan dalam group', id)
            } else if(!isGroupAdmins) {
                client.reply(dari, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            } else if(!isBotGroupAdmins) {
                client.reply(dari, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            }
			await client.reply(dari, `Berhasil reset link group`, id)
            break
    case '#delete':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        if (!isGroupMsg) return client.reply(dari, 'Fitur ini hanya bisa di gunakan dalam group', id)
        if (!isGroupAdmins) return client.reply(dari, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
        if (!quotedMsg) return client.reply(dari, 'Salah!!, kirim perintah *#delete [tagpesanbot]*', id)
        if (!quotedMsgObj.fromMe) return client.reply(dari, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', id)
            client.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
	case '#katakasar':
        if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (!isGroupMsg) return client.reply(dari, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
			client.reply(dari, `Untuk mengaktifkan Fitur Kata Kasar pada Group Chat\n\nApasih kegunaan Fitur Ini? Apabila seseorang mengucapkan kata kasar akan mendapatkan denda\n\nPenggunaan\n${prefix}kasar on --mengaktifkan\n${prefix}kasar off --nonaktifkan\n\n${prefix}reset --reset jumlah denda`, id)
			break
    case '#antikasar':
	    if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (!isGroupMsg) return client.reply(dari, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
		if (args.length === 1) return client.reply(dari, 'Pilih on atau off!', id)
		if (args[1].toLowerCase() === 'on') {
				ngegas.push(chatId)
				fs.writeFileSync('./lib/kasar.json', JSON.stringify(ngegas))
				client.reply(dari, 'Fitur Anti Kasar sudah di Aktifkan', id)
			} else if (args[1].toLowerCase() === 'off') {
				let nixx = ngegas.indexOf(chatId)
				ngegas.splice(nixx, 1)
				fs.writeFileSync('./lib/kasar.json', JSON.stringify(ngegas))
				client.reply(dari, 'Fitur Anti Kasar sudah di non-Aktifkan', id)
			} else {
				client.reply(dari, `Untuk mengaktifkan Fitur Kata Kasar pada Group Chat\n\nApasih kegunaan Fitur Ini? Apabila seseorang mengucapkan kata kasar akan mendapatkan denda\n\nPenggunaan\n#antikasar on --mengaktifkan\n#antikasar off --nonaktifkan\n\n${prefix}reset --reset jumlah denda`, id)
			}
			break
    case '#randomhentai':
	    if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)       
			   client.reply(dari, mess.wait, id)
			   const hentaio = await fetch(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`)
				 const hentaiok = await hentaio.json()
				 client.sendFileFromUrl(dari, hentaiok.result, 'hentai.jpg', 'Neh..', id)
				 break
	case '#jurnalotaku':
	    if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)       
			   client.reply(dari, mess.wait, id)
			   const jurnalnya = await fetch(`http://api.itsmeikyxsec404.xyz/jurnalotaku?apikey=itsmeiky633`)
				 const jurnal = await jurnalnya.json()
				 client.sendFileFromUrl(dari, jurnal.result, 'jurnal.jpg', 'Neh..', id)
				 break
    case '#randomnsfwneko':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        if (isGroupMsg) return client.reply(dari, 'Perintah ini hanya bisa digunakan didalam grup!', id)
        if (!isNsfw) return client.reply(dari, 'Command/Perintah NSFW belum di aktifkan di group ini!', id)
                const nsfwnekonya = await fetch('https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA')
                const nsfwneko = await nsfwnekonya.json()
                client.sendFileFromUrl(dari, nsfwneko.result, 'nsfw.png', 'Nsfwneko!', id)
            break
	case '#randomquran':
	    if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)       
			   client.reply(dari, mess.wait, id)
			   const quran = await fetch(`https://api.zeks.xyz/api/randomquran`)
			   const qrn = await quran.json()
			   client.reply(dari, `➸*Nama Surah* : ${qrn.result.nama} \n➸*Arti* : ${qrn.result.arti} \n➸*Asma* : ${qrn.result.asma} \n➸*Ayat* : ${qrn.result.ayat} \n➸*Keterangan* : ${qrn.result.keterangan} \n➸*Dari* : ${qrn.result.type} \n➸*Urutan* : ${qrn.result.urut} \n➸*Nomor* : ${qrn.result.nomor} \n➸*Audio* : ${qrn.result.audio}`, id)
			   break
    case '#randomnekonime':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            const nekonime = await fetch(`https://tobz-api.herokuapp.com/api/nekonime?apikey=BotWeA`)
			const nekon = await nekonime.json()
            client.sendFileFromUrl(dari, nekon.result, `Nekonime${ext}`, 'Nekonime!', id)
            break
    
	    //Owner Fitures
	case '#shutdown':
	case '#matikanbot':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
                if (!isPilot) return await client.reply(dari, 'Perintah ini hanya untuk Owner bot!', id)
                return await client.reply(dari, 'Baik Bot Segera Off', id)
                    .then(async () => await client.kill())
            break
	case '#setinfo':
			if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
                if (!isPilot) return await client.reply(dari, 'Perintah ini hanya untuk Owner bot!', id)
                if (!q) return await client.reply(dari, `Harap masukkan pesan yang ingin disampaikan!`, id)
                await client.setMyStatus(body.slice(9))
                await client.sendText(dari, `Sudah selesai, Owner-sama~`)
            break
	case '#bc':
		if (isBanned) return await client.reply(dari, `Maaf, Nomor kamu telah dibanned!`, id)
		if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        if (!isPilot) return client.reply(dari, 'Perintah ini hanya untuk Owner bot!', id)
            if (args.length === 0) return client.reply(dari, `Untuk broadcast ke semua chat ketik:\n${prefix}bc [isi chat]`)
			if (!isQuotedImage) return client.reply(dari, 'Tag gambarnya!', id)
		   let msg = body.slice(4)
            const chatz = await client.getAllChatIds()
            for (let idk of chatz) {
                var cvk = await client.getChatById(idk)
			if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                if (!cvk.isReadOnly) client.sendImage(idk, imageBase64, 'contoh.jpg', `❉──────────────────❉
        *_BROADCAST_*
❉──────────────────❉\n\n${msg}`)
                if (cvk.isReadOnly) client.sendImage(idk, imageBase64, 'contoh.jpg', `❉──────────────────❉
       *_BROADCAST_*
❉──────────────────❉\n\n${msg}`)
            } }
            client.reply(dari, 'Broadcast Success!', id)
            break
	case '#bctext':
		if (isBanned) return await client.reply(dari, `Maaf, Nomor kamu telah dibanned!`, id)
		if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        if (!isPilot) return client.reply(dari, 'Perintah ini hanya untuk Owner bot!', id)
            if (args.length == 0) return client.reply(dari, `Untuk broadcast ke semua chat ketik:\n${prefix}bc [isi chat]`)
            let msgj = body.slice(8)
            const chatp = await client.getAllChatIds()
            for (let idy of chatp) {
                var clk = await client.getChatById(idy)
                if (!clk.isReadOnly) client.sendText(idy, `❉──────────────────❉
        *_BROADCAST_*
❉──────────────────❉\n\n${msgj}`)
                if (clk.isReadOnly) client.sendText(idy, `❉──────────────────❉
       *_BROADCAST_*
❉──────────────────❉\n\n${msgj}`)
            }
            client.reply(dari, 'Broadcast Success!', id)
            break
	case '#blokdia':
		    if (isBanned) return await client.reply(dari, `Maaf, Nomor kamu telah dibanned!`, id)
			if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
			if (!isPilot) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh owner bot`, id)
			for (let blost of mentionedJidList) {
                    ban.push(blost)
                    fs.writeFileSync('./lib/blokir.json', JSON.stringify(ban))
				await client.contactBlock(mentionedJidList)
                }
                await client.reply(dari, `Success blokir target!`, id)
            break
	case '#ban':
		if (isBanned) return await client.reply(dari, `Maaf, Nomor kamu telah dibanned!`, id)
        if (!isPilot) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh owner bot`, id)
        if (mentionedJidList.length === 0) return await client.reply(dari, `Format salah!`, id)
        if (mentionedJidList[0] === botNumber) return await client.reply(dari, `Format salah!`, id)
            const allMemek = await client.getGroupMembers(groupId)
			 for (let i = 0; i < mentionedJidList.length; i++)
                    ban.push(mentionedJidList[i])
                    fs.writeFileSync('./lib/banned.json', JSON.stringify(ban))
                await client.reply(dari, `Success ban target!`, id)
            break
    case '#unban':
		if (isBanned) return await client.reply(dari, `Maaf, Nomor kamu telah dibanned!`, id)
        if (!isPilot) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh owner bot`, id)
                if (mentionedJidList.length === 0) return await client.reply(dari, `Format salah!`, id)
                if (mentionedJidList[0] === botNumber) return await client.reply(dari, `Format salah!`, id)
                let benet = ban.indexOf(mentionedJidList[0])
                ban.splice(benet, 1)
                fs.writeFileSync('./lib/banned.json', JSON.stringify(ban))
                await client.reply(dari, `Success unban target!`, id)
            break
	case '#leaveall':
		if (isBanned) return await client.reply(dari, `Maaf, Nomor kamu telah dibanned!`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        if (!isPilot) return client.reply(dari, 'Perintah ini hanya untuk Owner bot', id)
            const allChats = await client.getAllChatIds()
            const allGroups = await client.getAllGroups()
            for (let gclist of allGroups) {
                await client.sendText(gclist.contact.id, `Maaf bot sedang pembersihan, total chat aktif : ${allChats.length}`)
                await client.leaveGroup(gclist.contact.id)
            }
            client.reply(dari, 'Succes leave all group!', id)
            break
	case '#clearall':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        if (!isPilot) return client.reply(dari, 'Perintah ini hanya untuk Owner bot', id)
            const allChatz = await client.getAllChats()
            for (let dchat of allChatz) {
                await client.deleteChat(chatId)
            }
            client.reply(dari, 'Succes clear all chat!', id)
            break	
	case '#leave':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (!isGroupMsg) return client.reply(dari, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isPilot) return client.reply(dari, 'Perintah ini hanya bisa di gunakan oleh owner bot', id)
            await client.reply(dari,'Dadah', id).then(() => client.leaveGroup(groupId))
            break		
			
		//Super Owner Fitures
	case '#keyprem':
	case '#key':
	if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
    client.reply(dari, '*[ WAIT ]* Sedang mencari key ', id)
	let lskey = listkey[Math.floor(Math.random() * listkey.length)] 
	await client.reply(dari, lskey, id)
	break
	case '#getses': 
			if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
		    client.reply(dari, mess.wait, id)
			const sesPic = await client.getSnapshot()
            client.sendFile(dari, sesPic, 'session.png', 'Neh...', id)
            break
	case '#setname':
	    if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
		client.reply(dari, mess.wait, id)
		const grap = body.slice(9)
		await client.setMyName(grap)
                client.sendTextWithMentions(dari, `Makasih Nama Barunya @${sender.id.replace('@c.us','')} 😘`)
            break
	case '#setstatus':
            if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
			    const setstat = body.slice(11)
                await client.setMyStatus(setstat)
                client.sendTextWithMentions(dari, `Makasih Status Barunya @${sender.id.replace('@c.us','')} 😘`)
            break
        case '#setpp':
            if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
			const isqwtimg1 = quotedMsg && quotedMsg.type === 'image'
                    if (isMedia && typu == 'image' || isQuotedImage) {
                        const dataMediax = isqwtimg1 ? quotedMsg : message
                        const _mimetypep = dataMediax.mimetype
                        const mediaDatax = await decryptMedia(dataMediax, uaOverride)
                        const imageBase64j = `data:${_mimetypep};base64,${mediaDatax.toString('base64')}`
                        await client.setProfilePic(imageBase64j)
                        await client.reply(dari, 'Berhasil mengubah foto profile!', id)
                    }
                    break
        case '#getpic':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (!isGroupMsg) return client.reply(dari, `Fitur ini hanya bisa di gunakan dalam group`, id)
            client.reply(dari, mess.wait, id)
			const texnugm = body.slice(8)
            const getnomber =  await client.checkNumberStatus(texnugm)
            const useriq = getnomber.id.replace('@','') + '@c.us'
                try {
                    var jnck = await client.getProfilePicFromServer(useriq)

                    client.sendFileFromUrl(dari, jnck, `awok.jpg`)
                } catch {
                    client.reply(dari, `Tidak Ada Foto Profile!`, id)
                }
            break
	case '#jadikanowner':	
		if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
                    owner.push(sender.id)
                    fs.writeFileSync('./settings/owner.json', JSON.stringify(owner))
		 await client.reply(dari, `Success menambahkan ${pushname} menjadi owner bot!`, id)
            break
	case '#creator':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
	   client.sendContact(dari, creator)
		break
	case '#adminme':
	case '#promoteme':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        if (!isGroupMsg) return client.reply(dari, 'Fitur ini hanya bisa di gunakan dalam group', id)
	    if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
           await client.promoteParticipant(groupId, pengirim)
            await client.sendTextWithMentions(dari, `Perintah diterima, menambahkan @${pengirim} sebagai admin.`)
            break
	case '#unadminme':
	case '#demoteme':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        if (!isGroupMsg) return client.reply(dari, 'Fitur ini hanya bisa di gunakan dalam group', id)
	    if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
        if (!isBotGroupAdmins) return client.reply(dari, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            await client.demoteParticipant(groupId, pengirim)
            await client.sendTextWithMentions(dari, `Perintah diterima, menghapus @${pilotNumber} sebagai admin.`)
            break
	case '#bikingrup':
	case '#creategroup':
	    if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
            arg = body.trim().split('|')
			client.reply(dari, mess.wait, id)
			const gcname = args[1]
		    client.createGroup(gcname, saya)
            await client.reply(dari, 'Group Created ✨️', id)
            break
	case '#culikdia':
	        if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
            const gcnamo = args[1]
            client.createGroup(gcnamo, mentionedJidList)
            await client.sendText(dari, 'Group Created ✨️')
            break
	case '#chatowner':
	    if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		const msgn = body.slice(11)
		const pngrm = owner
            for (let idt of pngrm) {
                var cok = await client.getChatById(idt)
                if (!cok.isReadOnly) client.sendText(idt, `❉──────────────────❉
        DARI: *${pushname}*
❉──────────────────❉\n\n${msgn}`)
                if (cok.isReadOnly) client.sendText(idt, `❉──────────────────❉
       DARI: *${pushname}*
❉──────────────────❉\n\n${msgn}`)
            }
		await client.reply(dari, `Sukses chat owner bot!`, id)
		break
	case '#chat':
	arg = body.trim().split('|')
	const idiot = `${arg[1]}@c.us`
	const psnn = arg[2]
	 for (let idt of idiot) {
                var cok = await client.getChatById(idt)
                client.sendText(idt, `DARI : wa.me/${pengirim.replace(/[@c.us]/g, '')}\n${psnn}`)
            }
	await client.reply(dari, `Berhasil chat ${idiot} dengan pesan ${psnn}`, id)
	break
	case '#chatpremium':
	    if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		const msgny = body.slice(13)
		 for (let idt of _premium) {
                var cok = await client.getChatById(idt)
                if (!cok.isReadOnly) client.sendText(idt, `❉──────────────────❉
        DARI: *${pushname}*
❉──────────────────❉\n\n${msgny}`)
                if (cok.isReadOnly) client.sendText(idt, `❉──────────────────❉
       DARI: *${pushname}*
❉──────────────────❉\n\n${msgny}`)
            }
		await client.reply(dari, `Sukses chat user premium bot!`, id)
		break
    case '#tambahsowner':	
		if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
				  for (let addo of mentionedJidList) {
                    owner.push(addo)
                    fs.writeFileSync('./settings/superowner.json', JSON.stringify(owner))
                }
		 await client.reply(dari, `Success menambahkan ${mentionedJidList.join('\n')} menjadi super owner bot!`, id)
            break
	case '#tambahpremium':	
	    if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
				  for (let addi of mentionedJidList) {
                    _premium.push(addi)
                    fs.writeFileSync('./ingfo/premium.json', JSON.stringify(_premium))
                }
		 await client.reply(dari, `Success menambahkan ${mentionedJidList.join('\n')} menjadi premium user!`, id)
            break
	case '#tambahowner':	
		if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
		if (mentionedJidList.length === 0) return client.reply(dari, 'Untuk menggunakan fitur ini, kirim perintah *#promote* @tagmember', id)
        		  for (let add of mentionedJidList) {
                    owner.push(add)
                    fs.writeFileSync('./settings/owner.json', JSON.stringify(owner))
                }
		 await client.reply(dari, `Success menambahkan ${mentionedJidList.join('\n')} menjadi owner bot!`, id)
            break
	case '#hapusowner':
		if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
			let beneto = ban.indexOf(mentionedJidList[1])
                owner.splice(beneto, 1)
                fs.writeFileSync('./settings/owner.json', JSON.stringify(owner))
                await client.reply(dari, `Success menghapus ${mentionedJidList.join('\n')} dari owner bot!`, id)
            break
	case '#setprefix':
		if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
            if (args.length === 1) return client.reply(dari, `*Kirim Perintah ${prefix}setto [prefix baru]*. 
Contoh: ${prefix}setprefix #`, id)
            const pf = body.slice(11)
            settingan.prefix = `${pf}`
            prefix = `${pf}`
            fs.writeFileSync('./lib/setting.json', JSON.stringify(settingan, null, 2))
            client.reply(dari, `Change Prefix To ${pf} SUCCESS!`, id)
            break
	case '#hapussemuaowner':
		if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
		  let benetc = owner.indexOf(owner[0])
                owner.splice(benetc)
                fs.writeFileSync('./lib/setting.json', JSON.stringify(settingan, null, 2))
            await client.reply(dari, 'Succes delete all owner', id)
            break
			
		//Islami Fitures
	case '#jadwalshalat':
			if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (args.length == 0) return client.reply(dari, `Untuk melihat jadwal solat dari setiap daerah yang ada\nketik: ${prefix}jsolat [daerah]\n\nuntuk list daerah yang ada\nketik: ${prefix}daerah`, id)
            const solatx = body.slice(14)
		const solatj = await fetch(`https://tobz-api.herokuapp.com/api/jadwalshalat?q=${solatx}&apikey=BotWeA`)
		const solatp = await solatj.json()
        client.reply(dari, solatp.result, id)
            break
    case '#infosurah':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
            if (args.length == 0) return client.reply(dari, `*_${prefix}infosurah <nama surah>_*\nMenampilkan informasi lengkap mengenai surah tertentu. Contoh penggunan: ${prefix}infosurah al-baqarah`, id)
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                var pesan = ""
                pesan = pesan + "Nama : "+ data[idx].name.transliteration.id + "\n" + "Asma : " +data[idx].name.short+"\n"+"Arti : "+data[idx].name.translation.id+"\n"+"Jumlah ayat : "+data[idx].numberOfVerses+"\n"+"Nomor surah : "+data[idx].number+"\n"+"Jenis : "+data[idx].revelation.id+"\n"+"Keterangan : "+data[idx].tafsir.id
                client.reply(dari, pesan, id)
              break
    case '#surah':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (args.length == 0) return client.reply(dari, `*_${prefix}surah <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}surah al-baqarah 1\n\n*_${prefix}surah <nama surah> <ayat> en/id_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Inggris / Indonesia. Contoh penggunaan : ${prefix}surah al-baqarah 1 id`, id)
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                  var responseh2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[1])
                  var {data} = responseh2.data
                  var last = function last(array, n) {
                    if (array == null) return void 0;
                    if (n == null) return array[array.length - 1];
                    return array.slice(Math.max(array.length - n, 0));
                  };
                  bhs = last(args)
                  pesan = ""
                  pesan = pesan + data.text.arab + "\n\n"
                  if(bhs == "en") {
                    pesan = pesan + data.translation.en
                  } else {
                    pesan = pesan + data.translation.id
                  }
                  pesan = pesan + "\n\n(Q.S. "+data.surah.name.transliteration.id+":"+args[1]+")"
                  client.reply(dari, pesan, id)
                }
              break
    case '#tafsir':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (args.length == 0) return client.reply(dari, `*_${prefix}tafsir <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahan dan tafsirnya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}tafsir al-baqarah 1`, id)
                var responsh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var {data} = responsh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                  var responsih = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[1])
                  var {data} = responsih.data
                  pesan = ""
                  pesan = pesan + "Tafsir Q.S. "+data.surah.name.transliteration.id+":"+args[1]+"\n\n"
                  pesan = pesan + data.text.arab + "\n\n"
                  pesan = pesan + "_" + data.translation.id + "_" + "\n\n" +data.tafsir.id.long
                  client.reply(dari, pesan, id)
              }
              break
    case '#alaudio':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (args.length == 0) return client.reply(dari, `*_${prefix}ALaudio <nama surah>_*\nMenampilkan tautan dari audio surah tertentu. Contoh penggunaan : ${prefix}ALaudio al-fatihah\n\n*_${prefix}ALaudio <nama surah> <ayat>_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}ALaudio al-fatihah 1\n\n*_${prefix}ALaudio <nama surah> <ayat> en_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Inggris. Contoh penggunaan : ${prefix}ALaudio al-fatihah 1 en`, id)
              ayat = "ayat"
              bhs = ""
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var surah = responseh.data
                var idx = surah.data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = surah.data[idx].number
                if(!isNaN(nmr)) {
                  if(args.length > 2) {
                    ayat = args[1]
                  }
                  if (args.length == 2) {
                    var last = function last(array, n) {
                      if (array == null) return void 0;
                      if (n == null) return array[array.length - 1];
                      return array.slice(Math.max(array.length - n, 0));
                    };
                    ayat = last(args)
                  } 
                  pesan = ""
                  if(isNaN(ayat)) {
                    var responsih2 = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah/'+nmr+'.json')
                    var {nama, nama_translations, number_of_ayah, number_of_surah,  recitations} = responsih2.data
                    pesan = pesan + "Audio Quran Surah ke-"+number_of_surah+" "+nama+" ("+nama_translations.ar+") "+ "dengan jumlah "+ number_of_ayah+" ayat\n"
                    pesan = pesan + "Dilantunkan oleh "+recitations[0].nama+" : "+recitations[0].audio_url+"\n"
                    pesan = pesan + "Dilantunkan oleh "+recitations[1].nama+" : "+recitations[1].audio_url+"\n"
                    pesan = pesan + "Dilantunkan oleh "+recitations[2].nama+" : "+recitations[2].audio_url+"\n"
                    client.reply(dari, pesan, id)
                  } else {
                    var responsih2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+ayat)
                    var {data} = responsih2.data
                    var last = function last(array, n) {
                      if (array == null) return void 0;
                      if (n == null) return array[array.length - 1];
                      return array.slice(Math.max(array.length - n, 0));
                    };
                    bhs = last(args)
                    pesan = ""
                    pesan = pesan + data.text.arab + "\n\n"
                    if(bhs == "en") {
                      pesan = pesan + data.translation.en
                    } else {
                      pesan = pesan + data.translation.id
                    }
                    pesan = pesan + "\n\n(Q.S. "+data.surah.nama.transliteration.id+":"+args[1]+")"
                    await client.sendFileFromUrl(dari, data.audio.secondary[0])
                    await client.reply(dari, pesan, id)
                  }
              }
              break
	case '#randomtrapnime':
		if (!isRegistered) return client.sendText(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`)
            const trap = await fetch(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=BotWeA`)
			const trapi = await trap.json()
            client.sendFileFromUrl(dari, trapi.result, `trapnime${ext}`, 'Trapnime!', id)
            break
	case '#randomayat':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
          if (body.length > 6) {
            const response = await get.get('https://api.quran.sutanlab.id/surah')
            const data = response.data
            nmr = Math.floor(Math.random() * 115);
            maks = data[nmr-1].numberOfVerses
            ayat = Math.floor(Math.random() * maks) + 1;
            if(!isNaN(nmr)) {
              const responsi2 = await get.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+ayat)
              const {data} = responsi2.data
              var last = function last(array, n) {
                if (array == null) return void 0;
                if (n == null) return array[array.length - 1];
                return array.slice(Math.max(array.length - n, 0));
              };
              bhs = last(args)
              pesan = ""
              pesan = pesan + data.text.arab + "\n\n"
              if(bhs == "en") {
                pesan = pesan + data.translation.en
              } else {
                pesan = pesan + data.translation.id
              }
              pesan = pesan + "\n\n(Q.S. "+data.surah.nama.transliteration.id+":"+ayat+")"
              client.sendText(dari, pesan)
            }
          }
          break
		  
	    //Other Fiturs
	
	case '#pantun':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt')
            .then(res => res.text())
            .then(body => {
                let splitpantun = body.split('\n')
                let randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)]
                client.reply(dari, randompantun.replace(/aruga-line/g,"\n"), id)
            })
            .catch(() => {
                client.reply(dari, 'Ada yang Error!', id)
            })
            break
	case '#motivasi':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            fetch('https://raw.githubusercontent.com/selyxn/motivasi/main/motivasi.txt')
            .then(res => res.text())
            .then(body => {
                let splitmotivasi = body.split('\n')
                let randommotivasi = splitmotivasi[Math.floor(Math.random() * splitmotivasi.length)]
                client.reply(dari, randommotivasi, id)
            })
            .catch(() => {
                client.reply(dari, 'Ada yang Error!', id)
            })
            break
	      case '#howgay':
		  if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        		if (args.length == 0) return client.reply(dari, `Untuk mengetahui seberapa gay seseorang gunakan ${prefix}howgay namanya\n\nContoh: ${prefix}howgay burhan`, id)
            fetch('https://raw.githubusercontent.com/MrPawNO/howgay/main/howgay.txt')
            .then(res => res.text())
            .then(body => {
                let splithowgay = body.split('\n')
                let randomhowgay = splithowgay[Math.floor(Math.random() * splithowgay.length)]
                client.reply(dari, randomhowgay, id)
            })
            .catch(() => {
                client.reply(dari, 'Ada yang Error!', id)
            })
            break
        case '#fakta':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')
            .then(res => res.text())
            .then(body => {
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                client.reply(dari, randomnix, id)
            })
            .catch(() => {
                client.reply(dari, 'Ada yang Error!', id)
            })
            break
        case '#katabijak':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/katabijax.txt')
            .then(res => res.text())
            .then(body => {
                let splitbijak = body.split('\n')
                let randombijak = splitbijak[Math.floor(Math.random() * splitbijak.length)]
                client.reply(dari, randombijak, id)
            })
            .catch(() => {
                client.reply(dari, 'Ada yang Error!', id)
            })
            break
	case '#cerpen':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
      		const cerpennya = await fetch('https://masgi.herokuapp.com/api/cerpen')
      			const cerpen = await cerpennya.json()
				client.reply(dari, cerpen.data, id)
		      	break
	case '#bucin':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
      			const bucinnya = await fetch('http://api.itsmeikyxsec404.xyz/bucin?apikey=itsmeiky633')
				const bucin = await bucinnya.json()
				client.reply(dari, bucin.result, id)
		      	break
	case '#cersex':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
			if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
			    const cersexnya = await fetch(`https://api.vhtear.com/cerita_sex&apikey=GuaGanti`)
				const sersex = await cersexnya.json()
				client.sendFileFromUrl(dari, sersex.result.image, 'bokep.jpg', `*Judul : ${sersex.result.judul} \n *Cerita* : ${sersex.result.cerita}`, id)
		      	break
	case '#puisi':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		      	const puisinya = await fetch('https://api.vhtear.com/puisi_image&apikey=GuaGanti')
		      	const puisi = await puisinya.json()
			    	 client.sendFile(dari, puisi, 'puisi.jpg', 'Neh..', id)
		      	break
			 case '#shortlink':
			 if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
			 if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
            if (args.length == 1) return client.reply(dari, `ketik #shortlink <url>`, id)
			const short = body.slice(11)
            const shortlink = await fetch(`https://tobz-api.herokuapp.com/api/shorturl?url=${short}&apikey=BotWeA`)
			const shortnya = await shortlink.json()
            client.reply(dari, shortnya.result, id)
            break
	case '#bitly':
	 if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
			 if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
            if (args.length == 1) return client.reply(dari, `ketik #bitly <url>`, id)
			const bitly = body.slice(7)
			const bitlynya = await fetch(`https://tobz-api.herokuapp.com/api/bitly?url=${bitly}&apikey=BotWeA`)
			const btly = await bitlynya.json()
			client.sendText(dari, btly.result)
			break
	case '#spamcall':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
			 if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
            if (args.length == 1) return client.reply(dari, `ketik #bitly <url>`, id)
		const target = body.slice(10)
			const targetnya = await fetch(`https://tobz-api.herokuapp.com/api/spamcall?no=${target}&apikey=BotWeA`)
			const trgt = await targetnya.json()
			client.reply(dari, trgt.logs, id)
			break
	case '#infoloker':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
			 if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
	         const lokernya = await fetch('http://docs-jojo.herokuapp.com/api/infoloker')
			 const lokr = await lokernya.json()
			 client.reply(dari, `➸ *Perusahaan* : ${lokr.result.perusahaan} \n➸ *Deskripsi* : ${lokr.result.desc} \n➸ *Edukasi* : ${lokr.result.edukasi} \n➸ *Lokasi* : ${lokr.result.lokasi} \n➸ *Gaji* : ${lokr.result.gaji} \n➸ *Syarat* : ${lokr.result.syarat} \n➸ *Pengalaman* : ${lokr.result.pengalaman} \n➸ *Level Karir* : ${lokr.result.levelKarir} \n➸ *Profesi* : ${lokr.result.profesi} \n➸ *Job Function* : ${lokr.result.jobFunction} \n➸ *Link* : ${lokr.result.link}`, id)
			 break
	case '#randomanime':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
	      const ranimenya = await fetch(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`)
		  const ranime = await ranimenya.json()
		  client.sendFileFromUrl(dari, ranime.result, '', 'Neh..', id)
		  break
	case '#jokes':
	case '#randomjokes':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
	      const jokesnya = await fetch(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`)
		  const jokes = await jokesnya.json()
		  client.sendFileFromUrl(dari, jokes.result, '', 'Neh..', id)
		  break
	case '#estetik':
	case '#randomestetik':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
	      const estehnya = await fetch(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`)
		  const esteh = await estehnya.json()
		  client.sendFileFromUrl(dari, esteh.result.result, '', 'Neh..', id)
		  break
	case '#covidindo':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
			rugaapi.covidindo()
			.then(async (res) => {
				await client.reply(dari, `${res}`, id)
			})
			break
	case '#bapakfont':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
			if (args.length == 1) return client.reply(dari, `Mengubah kalimat menjadi alayyyyy\n\nketik #bapakfont kalimat`, id)
			const bapak = body.slice(11)
			const bapakfont = await fetch(`https://api.terhambar.com/bpk?kata=${bapak}`)
			const bapack = await bapakfont.json()
				 client.reply(dari, `${bapack.text}`, id)
			break
	case '#heroml':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
	    if (args.length == 1) return client.reply(dari, '```Hero nya mana??```', id)
         client.reply(dari, mess.wait, id)
		 const dtilny = await fetch(`http://api-melodicxt-2.herokuapp.com/api/mobilelegends/hero-detail?query=${body.slice(8)}&apiKey=administrator`)
		 const dtil = await dtilny.json()
		client.sendFileFromUrl(dari, dtil.result.image, 'emel.jpg', `➸ *Hero* : ${dtil.result.hero_name} \n➸ *Role* : ${dtil.result.role} \n➸ *Items* : \n-Alias : ${dtil.result.items.alias} \n-Weapon : ${dtil.result.items.weapon} \n➸ *Attributes* : \n-Ability : ${dtil.result.attributes.ability_crit_rate} \n-Attack speed : ${dtil.result.attributes.attack_speed} \n-Hp : ${dtil.result.attributes.hp} \n-Hp regen : ${dtil.result.attributes.hp_regen} \n-Magic defense : ${dtil.result.magic_defense} \n-Magic power : ${dtil.result.attributes.magic_power} \n-Mana : ${dtil.result.attributes.mana} \n-Mana regen : ${dtil.result.attributes.mana_regen} \n-Movement speed : ${dtil.result.attributes.movement_speed} \n-Physical attack : ${dtil.result.attributes.physical_attack} \n-Physical defense : ${dtil.result.attributes.physical_defense} \n➸ *Story* : ${dtil.result.background_story}`, id)
	    break
	case '#cekzodiak':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
    if (args.length == 1) return client.reply(dari, `Untuk mengecek zodiak, gunakan #cekzodiak nama tanggallahir-bulanlahir-tahunlahir\nContoh: #cekzodiak fikri 13-06-2004`, id)
		arg = body.trim().split('|')
         client.reply(dari, mess.wait, id)
		const nmny = arg[1]
		const tanggal = arg[2]
		const cekzodiak = await fetch(`https://arugaz.herokuapp.com/api/getzodiak?nama=${nmny}&tgl-bln-thn=${tanggal}`)
		const cekzodiaku = await cekzodiak.json()
            await client.reply(dari, `➸*Nama*: ${cekzodiaku.nama}\n➸*Lahir*: ${cekzodiaku.lahir}\n➸*Usia*: ${cekzodiaku.usia}\n➸*Ultah*: ${cekzodiaku.ultah}\n➸*Zodiak*: ${cekzodiaku.zodiak}`, id)
            .catch(() => {
                client.reply(dari, 'Ada yang Error!', id)
            })
            break
		case '#artinama':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
			if (args.length == 1) return client.reply(dari, `Untuk mengetahui arti nama seseorang\nketik ${prefix}artinama namakamu`, id)
            const arti = body.slice(10)
			const artiname = await artinama(arti)
				await client.reply(dari, `➸ *Nama* : ${arti} \n➸ *Arti* : ${artiname}`, id)
			break
		case '#cekjodoh':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
			       arg = body.trim().split('|')
                    if (arg.length >= 3) {
                        client.reply(dari, mess.wait, id)
                        const kamu = arg[0]
                        const pacar = arg[1]
                        const rpmn = rate[Math.floor(Math.random() * rate.length)]
                        const rpmn2 = rate[Math.floor(Math.random() * rate.length)]
                        const rpmn3 = rate[Math.floor(Math.random() * rate.length)]
                        const rpmn4 = rate[Math.floor(Math.random() * rate.length)]
                        const rpmn5 = rate[Math.floor(Math.random() * rate.length)]
                        const rpmn6 = rate[Math.floor(Math.random() * rate.length)]
                        await client.reply(dari, `*Hasil Pengamatan!*\nPasangan dengan nama ${kamu} dan ${pacar}\n\n➸ Cinta : ${rpmn}\n➸ Jodoh : ${rpmn2}\n➸ Kemiripan : ${rpmn3}\n➸ Kesukaan : ${rpmn4}\n➸ Kesamaan : ${rpmn5}\n➸ Kebucinan ${rpmn6}`, id)
                    } else {
                        await client.reply(dari, 'Jodohnya mana?', id)
                    }
                    break
	case '#tiktok':
	     if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
         if (args.length === 1) return client.reply(dari, 'Kirim perintah *#tiktok [linkTiktok]*\nContoh : *#tiktok https://vt.tiktok.com/yqyjPX/*', id)
                        client.reply(dari, mess.wait, id)
                        const tikt = await fetch(`https://api.vhtear.com/tiktokdl?link=${body.slice(8)}&apikey=GuaGanti`)
                       const tktk = await tikt.json()
					   client.sendFileFromUrl(dari, tktk.result.video, 'tiktok.mp4', 'Neh..', id)
					break
	case '#hitung':
	case '#kalkulator':
                    if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
                    if (args.length === 1) return client.reply(dari, '[❗] Kirim perintah *!hitung [ Angka ]*\nContoh : #hitung 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /')
                    const mtk = body.slice(8)
                    if (typeof Math_js.evaluate(mtk) !== "number") {
                        client.reply(dari, `"${mtk}", bukan angka!\n[❗] Kirim perintah *!hitung [ Angka ]*\nContoh : !hitung 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`, id)
                    } else {
                        client.reply(dari, `*[ MATEMATIKA ]*\n\n*Kalkulator*\n\nHasil dari:\n${mtk} = ${Math_js.evaluate(mtk)}`, id)
                    }
                    break
	case '#kirimsms':
                    if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
                    if (args.length === 1) return client.reply(dari, 'Nomornya mana??')
					arg = body.trim().split('|')
                    const smsnya = await fetch(`https://api.i-tech.id/special/sms?key=VvxXfG-BKB2H9-FQCct2-KvxKuS-zcOE0q&no=${arg[1]}&msg=${arg[2]}`)
					client.reply(dari, `*[ WAIT ]* Sedang mengirim sms ke nomor ${arg[1]}`, id)
					const sms = smsnya.json()
					if (sms.code == 200) return await client.reply(dari, `${monospace}Berhasil mengirim sms ke nomor ${arg[1]} \nDengan pesan : ${arg[2]}${monospace}`, id)
	                break
	case '#cekip':
	case '#checkip':
	     if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		 if (args.length === 1) return client.reply(dari, 'Kirim perintah *#checkip [ipaddress]*\nContoh : *#checkip 182.0.144.145*', id)
                    client.reply(dari, mess.wait, id)
                    arg = body.trim().split('|')
                    console.log(...arg[1])
                    var slicedArgs = Array.prototype.slice.call(arg, 1);
                    console.log(slicedArgs)
                    const cekip = await slicedArgs.join(' ')
                    console.log(cekip)
                    try {
                        const cekip2 = await axios.get('https://mnazria.herokuapp.com/api/check?ip=' + cekip)
                        const {
                            city,
                            continent_name,
                            country_name,
                            ip,
                            latitude,
                            location,
                            longitude,
                            region_name
                        } = cekip2.data
                        const cekip3 = `*User Ditemukan!*

➸ *Kota:* ${city}
➸ *Benua:* ${continent_name}
➸ *Negara:* ${country_name}
➸ *Ip Address:* ${ip}
➸ *Garis Lintang:* ${latitude}
➸ *Kode Telepon:* +${location.calling_code}
➸ *Ibu Kota:* +${location.capital}
➸ *Bahasa:* +${location.languages[0].name}
➸ *Garis Bujur:* ${longitude}
➸ *Wilayah:* +${region_name}`

                        const pictk = await bent("buffer")(location.country_flag)
                        const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
                        client.sendImage(dari, base64, city, cekip3)
                    } catch (err) {
                        console.error(err.message)
                        await client.sendFileFromUrl(dari, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                        client.sendText(ownerNumber, 'Error Check IP : ' + err)
                    }
                    break
    case '#infonomor':
        if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        if (args.length == 1) return client.reply(dari, 'Nomornya mana??', id)
        const nomro = body.slice(11)
      const nomronya = await fetch(`http://docs-jojo.herokuapp.com/api/infonomor?no=${nomro}`)
      const nmro = await nomronya.json()
      client.reply(dari, `➸ *Nomor* : ${nmro.nomor} \n➸ *Internasional* : ${nmro.international} \n➸ *Operator* : ${nmro.op}`, id)
     break
      case '#play':
                    if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
                if (!isPremium) return await client.reply(dari, `Nomor kamu belum terdaftar sebagai user premium. Hubungi owner untuk mendaftar!`, id)
				if (args.length == 1) return client.reply(dari, `Untuk mencari lagu from youtube\n\nPenggunaan: #play judul lagu`, id)
                        client.reply(dari, mess.wait, id)
                        const webplay = await fetch(`https://api.vhtear.com/ytmp3?query=${serplay}&apikey=GuaGanti`)
                        const webplay2 = await webplay.json()
                            const captplay = `*「 PLAY 」*\n\n➸ *Judul* : ${webplay2.result.title} \n➸ *Size* : ${webplay2.result.size} \n➸ *Durasi* : ${webplay2.result.duration}\n_*Music Sedang Dikirim*_`
                            client.sendFileFromUrl(dari, webplay2.result.image, 'thumb.jpg', captplay, id)
                            await client.sendFileFromUrl(dari, webplay2.result.mp3, `${webplay2.result.title}.mp3`, '', id)
                    break
      case '#joox':
                        if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
                        if (args.length == 1) return client.reply(dari, `Untuk mencari lagu from youtube\n\nPenggunaan: !play judul lagu`, id)
                            client.reply(dari, mess.wait, id)
                            const textjoox = body.slice(6)
                            const jooxnya = await fetch(`https://tobz-api.herokuapp.com/api/joox?q=${textjoox}&apikey=BotWeA`)
                            const joox = await jooxnya.json()
                            client.sendFileFromUrl(dari, joox.result.thumb, 'thumb.jpg', `[*JOOX*] \n➸ *Judul* : ${joox.result.judul} \n➸ *Album* : ${joox.result.album} \n➸ *Diupload* : ${joox.result.dipublikasi} \nMohon tunggu sebentar lagu sedang di download`, id)
                            await client.sendFileFromUrl(dari, joox.result.mp3, `${joox.result.judul}`, '', id)
                   break
     case '#ytmp3':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
         if (args.length === 1) return client.reply(dari, 'Kirim perintah *#ytmp3 [linkYt]*, untuk contoh silahkan kirim perintah *#readme*')
            let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinks) return client.reply(dari, mess.error.Iv, id)
                client.reply(dari, mess.wait, id)
				const linkyta = body.slice(7)
                const resp = await fetch(`https://naufalhoster.xyz/dl/youtube?apikey=john-doe&url=${linkyta}`)
                    const resps = await resp.json()
					client.sendFileFromUrl(dari, resps.result.thumbnail, 'thumb.jpg', `➸ *Title* : ${resps.result.title}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, id)
                    await client.sendPtt(dari, resps.result.url_audio, `${resps.result.title}mp3`, '', id)
            break
    case '#ytmp4':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
           if (args.length === 1) return client.reply(dari, 'Kirim perintah *#ytmp4 [linkYt]*, untuk contoh silahkan kirim perintah *#readme*')
            let isLin = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLin) return client.reply(dari, mess.error.Iv, id)
                client.reply(dari, mess.wait, id)
				const linkytv = body.slice(7)
                const ytv = await fetch(`https://naufalhoster.xyz/dl/youtube?apikey=john-doe&url=${linkytv}`)
				const ytvs = await ytv.json()
                    client.sendFileFromUrl(dari, ytvs.result.thumbnail, 'thumb.jpg', `➸ *Title* : ${ytvs.result.title}\n➸ *Deskripsi* : ${ytvs.result.description}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, id)
                    await client.sendFileFromUrl(dari, ytvs.result.url_video, `${ytvs.title}.mp4`, `➸ *Title* : ${ytvs.result.title}\n➸ *Deskripsi* : ${ytvs.result.description}`, id)
            break
		case '#randomloli':
		case '#loli':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		const lolinya = await fetch('https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA')
		const loli = await lolinya.json()
		client.sendFileFromUrl(dari, loli.result, 'loli.jpg', 'Neh..', id)
		break
	case '#ytsearch':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
         const linknye = body.slice(10)
		 const searchnya = await fetch(`https://api.vhtear.com/youtube?query=${linknye}&apikey=GuaGanti`)
		 const srch = await searchnya.json()
		 const srkn = `*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Gambar* : ${srch.result.data.image} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Gambar* : ${srch.result.data.image} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Gambar* : ${srch.result.data.image} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Gambar* : ${srch.result.data.image} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link} \n*Judul* : ${srch.result.title} \n➸ *Channel* : ${srch.result.channel} \n➸ *Durasi* : ${srch.result.title} \n➸ *Views* : ${srch.result.views} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link}`
		
		 client.sendFile(dari, srch.result.image, 'thumb.jpg', srkn, id)
		  break
	case '#infofilm':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		const filmnya = await fetch(`https://tobz-api.herokuapp.com/api/film?q=${body.slice(10)}&apikey=BotWeA`)
		const film = await filmnya.json()
		client.sendFileFromUrl(dari, film.result.thumb, 'thumb.jpg', `*INFO FILM* \n➸ *Judul* : ${film.result.judul} \n➸ *Genre* : ${film.result.genre_negara} \n➸ *Rating* : ${film.result.rating} \n➸ *Link* : ${film.result.link}`, id)
	    break
	case '#spekhp':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
	    const speknya = await fetch(`https://api.vhtear.com/gsmarena?query=${body.slice(8)}&apikey=GuaGanti`)
	    const spek = await speknya.json()
		client.sendFileFromUrl(dari, spek.result.image, 'spek.jpg', `*Spekifikasi Hp ${body.slice(8)}* \n➸ *Nama HP* : ${spek.result.title} \n➸ *Spekifikasi* : ${spek.result.spec}`, id)
		break
	case '#images':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
        if (args.length == 0) return client.reply(dari, `Untuk mencari gambar dari pinterest\nketik: ${prefix}images [search]\ncontoh: ${prefix}images naruto`, id)
            client.reply(dari, mess.wait, id)
			const cariwall = body.slice(8)
            const hasilwall = await images.fdci(cariwall)
            await client.sendFileFromUrl(dari, hasilwall, '', '', id)
            .catch(() => {
                client.reply(dari, 'Ada yang Error!', id)
            })
            break
	case '#tutorial':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            client.reply(dari, mess.wait, id)
			const tutornih = 'https://r6---sn-uvu-c33d.googlevideo.com/videoplayback?expire=1609687429&ei=JI3xX8iPOIHeWYGku2g&ip=1.10.240.76&id=o-AGiYPWxWFUSEes4i4718WRqHyUKYObEo2-rPqSDODXXp&itag=22&source=youtube&requiressl=yes&mh=cp&mm=31%2C29&mn=sn-uvu-c33d%2Csn-uvu-c336&ms=au%2Crdu&mv=m&mvi=6&pl=22&initcwndbps=1167500&vprv=1&mime=video%2Fmp4&ns=F3OIUK8BPJzkkjLLN7FFx1cF&ratebypass=yes&dur=329.398&lmt=1601549706627200&mt=1609665634&fvip=6&c=WEB&txp=6216222&n=RJqq359lrKq14-DH&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAL2-FX-GUnSkxEMsFzAahW4ps_pzf2Dv9cF_HnWe0aI7AiEA2pJ5IW0DJFHtphtDkF8_OgA_Fp19_xQTsH5njIzokA8%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgYDUHKu-l6IkX5DnpOsoWt31AsY_4pYV8l9rxCmcEFMQCIC9buPspDRwlKp09vFYdu6Qf6-PMUk0Chd1-n0MPoA9q&title=TUTORIAL%20MEMASANG%20BOT%20STICKER%20WHATSAPP'
			client.sendFileFromUrl(dari, tutornih, 'tutornih.mp4', '', id)
			break
		case '#bot':
		if (isBanned) return await client.reply(dari, `Maaf, Nomor kamu telah dibanned!`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		const siminya = await fetch(`https://naufalhoster.xyz/tools/simsimi?apikey=juwenzxcajaa&pesan=${body.slice(5)}`)
		const simi = await siminya.json()
		client.reply(dari, simi.result.response, id)
        break
    case '#fotocewe':
    case '#fotocewek':
        if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
        client.reply(dari, mess.wait, id)
		const cangti = ['https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500','https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500','https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500','https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500']
        let cangtip = cangti[Math.floor(Math.random() * cangti.length)]
        client.sendFileFromUrl(dari, cangtip, 'cewk.jpg')
        break
        case '#wiki':
        if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
        if (args.length === 1) return client.reply(dari, 'Kirim perintah *#wiki [query]*\nContoh : *#wiki asu*', id)
            const query_ = body.slice(6)
            const wiki = await fetch(`https://docs-jojo.herokuapp.com/api/wiki?q=${query_}`)
			const wikia = await wiki.json()
                    if (wiki.error) {
                        client.reply(dari, wiki.error, id)
                    } else {
                        client.reply(dari, `➸ *Query* : ${query_}\n\n➸ *Result* : ${wikia.result}\n\n➸*Gambar* : ${wikia.img}`, id)
                    }
                    break
	case '#ceksange':
	      if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
          if (!isGroupMsg) return await client.reply(dari, 'Perintah ini hanya bisa digunakan didalam grup!', id)
		  if (mentionedJidList.length === 0) return client.reply(dari, 'Untuk menggunakan Perintah ini, kirim perintah *#ceksange* @tagmember', id)
		  const groupMemc = await client.getGroupMembers(groupId)
		  let prsen = rate[Math.floor(Math.random() * rate.length)]
		  await client.reply(dari, `Sange Si @${mentionedJidList} adalah ${prsen}`, id)
		  break
    case '#cuaca':
	case '#weather':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (args.length == 0) return client.reply(dari, `Untuk melihat cuaca pada suatu daerah\nketik: ${prefix}cuaca [daerah]`, id)
            client.reply(dari, mess.wait, id)
			const cuacaq = body.slice(7)
            const cuacap = await rugaapi.cuaca(cuacaq)
            await client.reply(dari, cuacap, id)
            .catch(() => {
                client.reply(dari, 'Ada yang Error!', id)
            })
            break
		case '#fb':
		case '#facebook':
		    if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
			if (args.length == 0) return client.reply(dari, `Untuk mendownload video dari link facebook\nketik: ${prefix}fb [link_fb]`, id)
			rugaapi.fb(args[0])
			.then(async (res) => {
				const { link, linkhd, linksd } = res
				if (res.status == 'error') return client.sendFileFromUrl(dari, link, '', 'Maaf url anda tidak dapat ditemukan', id)
				await client.sendFileFromUrl(dari, linkhd, '', 'Nih ngab videonya', id)
				.catch(async () => {
					await client.sendFileFromUrl(dari, linksd, '', 'Nih ngab videonya', id)
					.catch(() => {
						client.reply(dari, 'Maaf url anda tidak dapat ditemukan', id)
					})
				})
			})
			break
    case '#owner':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            client.sendContact(dari, creator)
            break
    case '#ig':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (args.length === 1) return client.reply(dari, 'Kirim perintah *#ig [linkIg]* untuk contoh silahkan kirim perintah *#readme*')
           const igtxt = body.slice(4)
		  const igdnya = await fetch(`http://api-melodicxt-2.herokuapp.com/api/instagram-downloader?url=${igtxt}&apiKey=administrator`)
		  const flig = await igdnya.json()
		  client.sendFileFromUrl(dari, flig.result.result, 'ig.jpg', 'Neh..', id)
		  break
	 case '#limit': //batesin biar ga kebanyakan download fitur youtube:D
                    if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
                    if (isPremium) return client.reply(dari, `Sisa limit request media anda tersisa : *UNLIMITED*\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
                    var found = false
                    const limed = JSON.parse(fs.readFileSync('./lib/medialimit.json'))
                    for (let lmta of limed) {
                        if (lmta.id === serial) {
                            let medialimitCounts = medialimitCount - lmta.medialimit
                            if (medialimitCounts <= 0) return client.reply(dari, `Limit request media anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
                            client.reply(dari, `Sisa limit request media anda tersisa : *${medialimitCounts}*\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
                            found = true
                        }
                    }
                    //console.log(limit)
                    //console.log(limidat)
                    if (found === false) {
                        let obj = {
                            id: `${serial}`,
                            medialimit: 1
                        };
                        medialimit.push(obj);
                        fs.writeFileSync('./lib/medialimit.json', JSON.stringify(medialimit, 1));
                        client.reply(dari, `Sisa limit request media anda tersisa : *${medialimitCounts}*\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
                    }
                    break
	case '#igstalk':
		case '#stalkig':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (args.length === 1)  return client.reply(dari, 'Kirim perintah *#igStalk @username*\nConntoh *#igStalk @duar_amjay*', id)
		   const stalk = await fetch(`https://api.zeks.xyz/api/igstalk?username=${body.slice(9)}&apikey=apivinz`)
		   const stlk = await stalk.json()
		    if (stalk.status == false) return client.reply(dari, 'Mungkin apinya error', id)
            if (stalk.error) return client.reply(dari, stalk.error, id)
            const caps = `➸ *Nama* : ${stlk.fullName}\n➸ *Username* : ${stlk.username}\n➸ *Jumlah Followers* : ${stlk.follower}\n➸ *Jumlah Following* : ${stlk.following}\n➸ *Biodata* : ${stlk.bio}`
		await client.sendFileFromUrl(dari, stlk.profile_pic, 'Pict.jpg', `➸ *Nama* : ${stlk.fullname}\n➸ *Username* : ${stlk.username}\n➸ *Jumlah Followers* : ${stlk.follower}\n➸ *Jumlah Following* : ${stlk.following}\n➸ *Biodata* : ${stlk.bio}`, id)
            break
		case '#fancytext':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (args.length == 1)  return client.reply(dari, 'Kirim perintah *#fancytext textnya', id)
		  const fancynya = await fetch(`https://arugaz.my.id/api/random/text/fancytext?text=${body.slice(11)}`)
		  const fancy = await fancynya.json()
		  client.reply(dari, fancy.result, id)
		  break
     case '#infogempa':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            const bmkg = await fetch(`https://api-zefian.glitch.me/api/infogempa`)
			const bmth = await bmkg.json()
			const hasil = `*${bmth.waktu}*\n📍 *Lokasi* : *${bmth.lokasi}*\n〽️ *Kedalaman* : *${bmth.kedalaman}*\n💢 *Magnitude* : *${bmth.magnitude}*\n🔘 *Potensi* : *${bmth.potensi}*\n📍 *Koordinat* : *${bmth.koordinat}*`
            client.sendFileFromUrl(dari, bmth.map, 'map.jpg', `${hasil}`, id)
            break
    case '#anime':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            const keyword = message.body.replace('#anime', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/anime?q=${keyword}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await client.sendFileFromUrl(dari, errorurl2, 'error.png', '💔️ Sorry, Couldn\'t find the requested anime', id)
              console.log("Sent!")
              return null
              }
            const { title, synopsis, episodes, url, rated, score, image_url } = parsed.results[0]
            const content = `*Anime Found!*
✨️ *Title:* ${title}

🎆️ *Episodes:* ${episodes}

💌️ *Rating:* ${rated}

❤️ *Score:* ${score}

💚️ *Synopsis:* ${synopsis}

🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            client.sendImage(dari, base64, title, content)
           } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(dari, errorurl2, 'error.png', '💔️ Sorry, Couldn\'t find the requested anime')
           }
          break
	case '#anime2':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (args.length === 1) return client.reply(dari, 'Kirim perintah *#anime [query]*\nContoh : *#anime darling in the franxx*', id)
            const animeku = await get.get('https://docs-jojo.herokuapp.com/api/dewabatch?q=' + body.slice(7)).json()
            if (animeku.error) return client.reply(dari, animeku.error, id)
            const res_animeku = `${animeku.result}\n\n${animeku.sinopsis}`
            client.sendFileFromUrl(dari, animeku.thumb, 'dewabatch.jpg', res_animeku, id)
            break
    case '#brainly':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
	    if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (args.length >= 2){
                const BrainlySearch = require('./lib/brainly')
                let tanya = body.slice(9)
                let jum = Number(tanya.split('.')[1]) || 2
                if (jum > 10) return client.reply(dari, 'Max 10!', id)
                if (Number(tanya[tanya.length-1])){
                    tanya
                }
                client.reply(dari, `➸ *Pertanyaan* : ${tanya.split('.')[0]}\n\n➸ *Jumlah jawaban* : ${Number(jum)}`, id)
                await BrainlySearch(tanya.split('.')[0],Number(jum), function(res){
                    res.forEach(x=>{
                        if (x.jawaban.fotoJawaban.length == 0) {
                            client.reply(dari, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n`, id)
                        } else {
                            client.reply(dari, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n\n➸ *Link foto jawaban* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
                        }
                    })
                })
            } else {
                client.reply(dari, 'Usage :\n#brainly [pertanyaan] [.jumlah]\n\nEx : \n#brainly NKRI .2', id)
            }
            break
	case '#translate':
	    if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
        const trns = await fetch(`https://arugaz.my.id/api/edu/translate?lang=en&text=${body.slice(11)}`)
		const trans = await trns.json()
		client.reply(dari, trans.text, id)
		break
	case '#ceklokasi':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
        if (quotedMsg && quotedMsg.type == 'location') return client.reply(dari, `Maaf, format pesan salah.\nKirimkan lokasi dan reply dengan caption ${prefix}ceklokasi`, id)
            console.log(`Request Status Zona Penyebaran Covid-19 (${quotedMsg}, ${quotedMsg}).`)
            const zoneStatus = await getLocationData(quotedMsg.lat, quotedMsg.lng)
            if (zoneStatus.kode !== 200) client.sendText(dari, 'Maaf, Terjadi error ketika memeriksa lokasi yang anda kirim.')
            let datax = ''
            for (let i = 0; i < zoneStatus.data.length; i++) {
                const { zone, region } = zoneStatus.data[i]
                const _zone = zone == 'green' ? 'Hijau* (Aman) \n' : zone == 'yellow' ? 'Kuning* (Waspada) \n' : 'Merah* (Bahaya) \n'
                datax += `${i + 1}. Kel. *${region}* Berstatus *Zona ${_zone}`
            }
            const texto = `*CEK LOKASI PENYEBARAN COVID-19*\nHasil pemeriksaan dari lokasi yang anda kirim adalah *${zoneStatus.status}* ${zoneStatus.optional}\n\nInformasi lokasi terdampak disekitar anda:\n${datax}`
            client.sendText(dari, texto)
            break	
	case '#manga':
            if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
         	const keywrd = (args)
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/manga?q=${keywrd}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await client.sendFileFromUrl(dari, errorurl2, 'error.png', 'Sorry, Couldn\'t find the requested manga', id)
              console.log("Sent!")
              return null
              }
            const { title, synopsis, chapters, url, volumes, score, image_url } = parsed.results[1]
            const content = `*Manga found*
*Title:* ${title}
*Chapters:* ${chapters}
*Volumes:* ${volumes}
*Score:* ${score}
*Synopsis:* ${synopsis}
*Link*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            client.sendImage(dari, base64, title, content)
           } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(dari, errorurl2, 'error.png', 'Sorry, Couldn\'t find the requested manga')
           }
          break
    case '#rpaper':
	case '#randomwallpaper':
	case '#rwallpaper':
	       if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		   const walnime = await fetch('http://api-melodicxt-2.herokuapp.com/api/random/wallpaper?apiKey=administrator')
            const walnimek = await walnime.json()
            client.sendFileFromUrl(dari, walnimek.result.result, 'Nimek.jpg', 'Neh..', id)
            break
    case '#wait':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const fetch = require('node-fetch')
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                client.reply(dari, 'Searching....', id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                	if (resolt.docs && resolt.docs.length <= 0) {
                		client.reply(dari, 'Maaf, saya tidak tau ini anime apa', id)
                	}
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                    	teks = '*Saya memiliki keyakinan rendah dalam hal ini* :\n\n'
                    }
                    teks += `➸ *Title Japanese* : ${title}\n➸ *Title chinese* : ${title_chinese}\n➸ *Title Romaji* : ${title_romaji}\n➸ *Title English* : ${title_english}\n`
                    teks += `➸ *Ecchi* : ${is_adult}\n`
                    teks += `➸ *Eps* : ${episode.toString()}\n`
                    teks += `➸ *Kesamaan* : ${(similarity * 100).toFixed(1)}%\n`
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    client.sendFileFromUrl(dari, video, 'nimek.mp4', teks, id).catch(() => {
                        client.reply(dari, teks, id)
                    })
                })
                .catch(() => {
                    client.reply(dari, 'Error !', id)
                })
            } else {
                client.sendFile(dari, './media/img/tutod.jpg', 'Tutor.jpg', 'Neh contoh mhank!', id)
            }
            break	
	case '#giveaway':
	if (!isSuper) return
	let undi = _registered[Math.floor(Math.random() * _registered.length)]
	client.reply(dari, undi, id)
	break
	case '#profile':
     case '#me':
            if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (quotedMsg) return profile(quotedMsgObj.sender.id, message, fs, groupAdmins, benny)
	    if (mentionedJidList.length >= 1) return profile(mentionedJidList[1], message, fs, groupAdmins, benny)
	    return profile(sender.id, message, fs, groupAdmins, benny)
            break
	case '#filmgangster':
	     if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		  const gangste = JSON.parse(fs.readFileSync('./lib/gangster.json')) 
		  let gangster = gangste[Math.floor(Math.random() * gangste.length)]
		  client.sendFileFromUrl(dari, gangster, 'gangster.mp4', '', id)
		  break
	case '#chord':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (args.length === 1) return client.reply(dari, 'Kirim perintah *#chord [query]*, contoh *#chord aku bukan boneka*', id)
            const query__ = body.slice(7)
            const chord = await fetch(`http://docs-jojo.herokuapp.com/api/chord?q=${query__}`)
			const cordnya = await chord.json()
            client.reply(dari, chordnya.result, id)
            break
    case '#listdaerah':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            const listDaerah = await get('https://docs-jojo.herokuapp.com/api/daerah').json()
            client.reply(dari, listDaerah, id)
            break
    case '#listblock':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            let hih = `This is list of blocked number\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➸ @${i.replace(/@c.us/g,'')}\n`
            }
            client.sendTextWithMentions(dari, hih, id)
            break
	case '#karakter':
	case '#karakter':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
 	    const keywr = (args)
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/character?q=${keywr}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await client.sendFileFromUrl(dari, errorurl2, 'error.png', 'Sorry, Couldn\'t find the requested character', id)
              console.log("Sent!")
              return null
              }
            const { name, alternative_names, url, image_url } = parsed.results[1]
            const content = `*Character found!*
*Name:* ${name}
*Nickname:* ${alternative_names}
*Link*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            client.sendImage(dari, base64, name, content)
           } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(dari, errorurl2, 'error.png', 'Sorry, Couldn\'t find the requested character')
           }
          break
        case '#wallpaper':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (args.length == 0) return client.reply(dari, 'Wrong Format!', id)
            const query = await fetch('http://api-melodicxt-2.herokuapp.com/api/random/wallpaper?apiKey=administrator')
            const walls = await query.json()
            await client.sendFileFromUrl(dari, walls.result.result, 'walls.jpg', 'Neh..', id)
	    break
	case '#afk':
		     if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
                   if (!isGroupMsg) return client.reply(dari, 'Perintah ini hanya bisa di gunakan dalam group!', id)
 				  afk.push(sender.id)
                    fs.writeFileSync('./lib/afk.json', JSON.stringify(afk))
                await client.reply(dari, `Berhasil, ${pushname} sekarang afk!`, id)
            break
	case '#unafk':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (!isGroupMsg) return client.reply(dari, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            let afko = afk.indexOf(sender.id)
                afk.splice(afko, 1)
                fs.writeFileSync('./lib/afk.json', JSON.stringify(afk))
                return await client.reply(dari, `${pushname} telah mematikan afk!`, id)
            break
    case '#listchannel':
				if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            client.reply(dari, listChannel, id)
            break
    case '#jadwaltv':
		    if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (args.length === 1) return client.reply(dari, 'Kirim perintah *#jadwalTv [channel]*', id)
            const queri = body.slice(10)
            const jadwal = await fetch(`https://api.zeks.xyz/api/jadwaltv?channel=${queri}&apikey=apivinz`)
			const jdwl = await jadwal.json()
            client.reply(dari, `Nih gan \n${jdwl.result}\n`, id)
            break
    case '#jadwaltvnow':
				if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            const jadwalNow = await fetch(`http://docs-jojo.herokuapp.com/api/jadwaltvnow`)
            const jdn = await jadwalNow.json()
            client.reply(dari, `Jam : ${jdn.result.jam}\n\nJadwalTV : ${jdn.result.jadwalTV}join\n`, id)
            break
	case '#lirik':
            if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (args.length == 1) return client.reply(dari, 'Kirim perintah *#lirik [optional]*, contoh *#lirik aku bukan boneka*', id)
            const lagu = body.slice(7)
            const lirik = await liriklagu(lagu)
            client.reply(dari, lirik, id)
            break
	case '#nulis':
		 if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (args.length === 1) return client.reply(dari, 'Kirim perintah *#nulis [teks]*', id)
             const text = body.slice(7)
            client.reply(dari, mess.wait, id)
            const splitText = text.replace(/(\S+\s*){1,10}/g, '$&\n')
            const fixHeight = splitText.split('\n').slice(0, 30).join('\n')
            spawn('convert', [
                './media/img/before.jpg',
                '-font',
                'IndieFlower-Regular',
                '-size',
                '700x960',
                '-pointsize',
                '25',
                '-interline-spacing',
                '1',
                '-annotate',
                '+170+222',
                fixHeight,
                './media/img/after.jpg'
            ])
            .on('error', () => client.reply(dari, 'Error gan', id))
            .on('exit', () => {
                client.sendImage(dari, './media/img/after.jpg', 'nulis.jpg', 'Nih gan dah jadi', id)
            })
            break
	case '#magernulis':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
    if (args.length == 1) return client.reply(dari, 'Kirim perintah *#lirik [optional]*, contoh *#lirik aku bukan boneka*', id)
	client.sendFileFromUrl(dari, `https://api.vhtear.com/write?text=${body.slice(12)}&apikey=GuaGanti`, 'nulis.jpg', 'Neh..', id)
	break
    case '#daftar':
            if (isRegistered) return await client.reply(dari, `Nomor kamu sudah terdaftar!`, id)
			client.reply(dari, mess.write, id)
		    const nimir = sender.id
			let sn = snnya[Math.floor(Math.random() * snnya.length)] 
			_registered.push(sender.id)
		    fs.writeFileSync('./ingfo/registered.json', JSON.stringify(_registered))
            await client.reply(dari, `${monospace}Pendaftaran Berhasil Dengan SN: \n${sn}\nNama : ${pushname} \nNick : ${pushname} \nNomor : wa.me/${sender.id.replace(/[@c.us]/g, '')} \n\nTerima Kasih atas pendaftaran anda \nUntuk perintah bot silahkan ketik \n#help / #menu${monospace}`, id)
            break
	case '#unreg':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            let unreg = _registered.indexOf(sender.id)
                _registered.splice(unreg, 1)
                fs.writeFileSync('./ingfo/registered.json', JSON.stringify(_registered))
                return await client.reply(dari, `${pushname} telah logout dari BennyBOT!`, id)
            break
    case '#waifu':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            const waifu = await fetch(`http://docs-jojo.herokuapp.com/api/waifu`)
            const waifus = await waifu.json()
            client.sendFileFromUrl(dari, waifus.image, 'Waifu.jpg', `➸ Name : ${waifus.name}\n➸ Description : ${waifus.desc}\n\n➸ Source : ${waifus.source}`, id)
            break	
    case '#husbu':
	    if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            const diti = fs.readFileSync('./lib/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            client.sendFileFromUrl(dari, rindKiy.image, 'Husbu.jpg', rindKiy.teks, id)
            break	
    case '#inu':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
            let kya = list[Math.floor(Math.random() * list.length)]
            client.sendFileFromUrl(dari, kya, 'Dog.jpeg', 'Inu')
            break
        case '#neko':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            q2 = Math.floor(Math.random() * 900) + 300;
            q3 = Math.floor(Math.random() * 900) + 300;
            client.sendFileFromUrl(dari, 'http://placekitten.com/'+q3+'/'+q2, 'neko.png','Neko ')
            break
    case '#pokemon':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            q7 = Math.floor(Math.random() * 890) + 1;
            client.sendFileFromUrl(dari, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+q7+'.png','Pokemon.png',)
            break
		case '#coolteks':
	case '#cooltext':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (args.leOOngth == 0) return client.reply(dari, `Untuk membuat teks keren CoolText pada gambar, gunakan ${prefix}cooltext teks\n\nContoh: ${prefix}cooltext arugaz`, id)
		rugaapi.cooltext(args[0])
		.then(async(res) => {
		await client.sendFileFromUrl(dari, `${res.link}`, '', `${res.text}`, id)
		})
		break
	case '#ttp2':
           if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
           if (args.length === 1) return client.reply(dari, `Kirim perintah *#ttp2 [ Teks ]*, contoh *#ttp2 Elaina*`, id)
            const ttp2t = body.slice(6)
            const lttp2 = ["Orange","White","Green","Black","Purple","Red","Yellow","Blue","Navy","Grey","Magenta","Brown","Gold"]
            const rttp2 = lttp2[Math.floor(Math.random() * (lttp2.length))]
            await client.sendImageAsSticker(dari, `https://docs-jojo.herokuapp.com/api/ttp?text=${ttp2t}&warna=${rttp2}`)
            break
	case '#pinterest':
			if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (args.length == 1) return client.reply(dari, `Membuat bot men-screenshot sebuah web\n\nPemakaian: #ss [url]\n\ncontoh: #ss http://google.com`, id)
         const pinterest = body.slice(11)
	     const pinternya = await fetch(`https://api.zeks.xyz/api/pin?q=${pinterest}&apikey=apivinz`)
		 const pinter = await pinternya.json()
		 client.sendFile(dari, pinter.result, 'Pinter.jpg', 'Nih gan..', id)
		 break
    case '#ss':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            if (args.length == 1) return client.reply(dari, `Membuat bot men-screenshot sebuah web\n\nPemakaian: #ss [url]\n\ncontoh: #ss http://google.com`, id)
            const ss = body.slice(4)
			const scrinshit = await fetch(`https://api.zeks.xyz/api/ssweb?url=${ss}&apikey=apivinz`)
            const ssweb = await scrinshit.json()
		    client.sendFile(dari, ssweb.result, 'ss.jpg', 'cekrek', id)
            break
	case '#asupan':
	      if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		  if (!isPremium) return await client.reply(dari, `Nomor kamu belum terdaftar sebagai user premium. Hubungi owner untuk mendaftar!`, id)
		  const asupa = JSON.parse(fs.readFileSync('./lib/asupan.json')) 
		  let asupan = asupa[Math.floor(Math.random() * asupa.length)]
		  client.sendFileFromUrl(dari, asupan, 'asupan.mp4', '', id)
		  break
   /*  case '#help':
    case '!help':
    case '.help':
    case '/help':
    case '$help':
	    if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
	      if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
         const cvdwrld = await fetch(`https://api.terhambar.com/negara/World`)
		const cvd = await cvdwrld.json()
		const kopit = `*➸NEGARA*: ${cvd.negara} \n*➸TOTAL*: ${cvd.total} \n*➸KASUS BARU*: ${cvd.kasus_baru} \n*➸MENINGGAL*: ${cvd.meninggal} \n*➸MENINGGAL BARU*: ${cvd.meninggal_baru} \n*➸SEMBUH*: ${cvd.sembuh} \n*➸PENANGANAN*: ${cvd.penanganan} \n*➸TERAKHIR*: ${cvd.terakhir}*`
		 return await client.reply(dari, `Hi ${pushname}👋🏻 \n*Tanggal dan Waktu* : ${time}\n\n*User bot*: ${_registered.length}\n\n*COVID WORLD*\n${kopit}\n${help}`, id)
            break
	case '#menu':
    case '!menu':
    case '.menu':
    case '/menu':
    case '$menu':
	    if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
	      if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
         const cvdworld = await fetch(`https://api.terhambar.com/negara/World`)
		const cvdo = await cvdworld.json()
		const kopik = `*➸NEGARA*: ${cvdo.negara} \n*➸TOTAL*: ${cvdo.total} \n*➸KASUS BARU*: ${cvdo.kasus_baru} \n*➸MENINGGAL*: ${cvdo.meninggal} \n*➸MENINGGAL BARU*: ${cvdo.meninggal_baru} \n*➸SEMBUH*: ${cvdo.sembuh} \n*➸PENANGANAN*: ${cvdo.penanganan} \n*➸TERAKHIR*: ${cvdo.terakhir}*`
		 return await client.reply(dari, `Hi ${pushname}👋🏻 \n*Tanggal dan Waktu* : ${time}\n\n*User bot*: ${_registered.length}\n\n*COVID WORLD*\n${kopik}\n${help}`, id)
            break
        case '#readme':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            client.reply(dari, readme, id)
            break	 */
        /* case 'anjing':
        case 'bangsat':
		case 'ngentot':
		case 'memek':
		case 'kontol':
		case 'kntl':
		case 'anjg':
		case 'ajg':
	    case 'asu':
		case 'mmk':
		case 'goblok':
		case 'gblk':
		case 'tolol':
		case 'tll':
              client.sendPtt(dari, './media/tts/kontol.mp3', id)
			  break */
		/* case 'p':
		case 'Woy':
		case 'woy':
		case 'Bot':
		case 'bot':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
		    client.sendText(dari, 'Bot aktif ketik #help untuk melihat list Bot ini')
			break 
		case '#botstat': {
			if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            const loadedMsg = await client.getAmountOfLoadedMessages()
            const chatIds = await client.getAllChatIds()
            const groups = await client.getAllGroups()
            const blok = await client.getBlockedIds()
            client.sendText(dari, `Status :\n- ${loadedMsg} Loaded Messages\n- ${groups.length} Group Chats\n- ${blok.length} Kontak Terblokir\n- ${chatIds.length - groups.length} Personal Chats\n- ${chatIds.length} Total Chats`)
            }
			break
		/* case 'assalamualaikum':
		case 'asalamualaikum':
		   return await client.reply(dari, 'Waalaikumsalam', id)
			break
			case '#antivirtex':
			return await client.reply(dari, `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nhttps://youtube.com/c/bennyhidayat\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`, id)
			break
		case 'makasih':
		case 'terima kasih':
		case 'terima kasih':
		    return await client.reply(dari, 'Sama Sama Bre', id)
			break 
		case '#daftarpremium':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (isPremium) return client.reply(dari, `Nomor kamu sudah terdaftar di user premium`, id)
        if (args.length == 1) return await client.reply(dari, `${monospace}Keynya mana? \nChat owner untuk membeli key!${monospace} \nwa.me/6287741097274`, id)
		  const key = args[1]
	  if (key !== 'anjaybah') return client.reply(dari, '*key* salah! silahkan chat owner bot unruk mendapatkan key yang valid', id)
	   _premium.push(sender.id)
   fs.writeFileSync('./ingfo/premium.json', JSON.stringify(_premium))
 await client.reply(dari, `╭───「 *PREMIUM USER* 」───
│++
│+ *Nama* : ${pushname}
│+ *Nomor* : wa.me/${sender.id.replace(/[@c.us]/g, '')}
│
╰───────────────────
Terima kasih telah melakukan pembayaran.
Total user premium : ${_premium.length}

       ║▌│█║▌│ █║▌│█│║▌║
       ║▌│█║▌│ █║▌│█│║▌║
          
           *_BENNY_*      `, id)
   break
   case '#unprem':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            let unprem = _premium.indexOf(sender.id)
                _premium.splice(unprem, 1)
                fs.writeFileSync('./ingfo/premium.json', JSON.stringify(_premium))
                return await client.reply(dari, `${pushname} telah keluar dari premium user!`, id)
            break
	case '#hapuspremium':
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
          if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
		  let unpremi = _premium.indexOf(mentionedJidList[0])
                _premium.splice(unpremi, 1)
                fs.writeFileSync('./ingfo/premium.json', JSON.stringify(_premium))
                return await client.reply(dari, `${mentionedJidList} telah dihapus dari premium user!`, id)
            break
	case '#listprem':
	case '#listpremium':
	    if (!isSuper) return await client.reply(dari, 'Khusus owner bot goblok', id)
		client.reply(dari, _premium, id)
		break
	case '#hapussemuapremium':
	case '#deleteallpremium':
	if (!isSuper) return await client.reply(dari, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
             let unpreme = _premium.indexOf(_premium)
			 _premium.splice(unpreme)
                fs.writeFileSync('./ingfo/premium.json', JSON.stringify(_premium))
                return await client.reply(dari, `${isPremium} telah dihapus dari premium user!`, id)
            break
   case 'loveyou':
   if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
   return await client.reply(dari, `LoveYou Too >//<`, id)
   break
   case '#info':
   if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            client.sendLinkWithAutoPreview(dari, 'https://github.com/bennyganteng/GuaGanti', info)
            break
        case '#snk':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
            client.reply(dari, snk, id)
            break
		case 'hai bot':
		const salam = 'Hai juga'
		client.sendMessage(id, salam, { quoted: me })
		break
		case '#pc':
		     if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
             if (args.length == 0) return client.reply(dari, `Untuk Pribadi Chat, Silahkan ketik #pc [pesannya]`, id)
			  arg = body.trim().split('|')
			  const poso = arg[1]
			  client.sendText(pengirim, `${poso}\n\nBENNY BOT`)
			  await client.reply(dari, 'Silahkan cek pesan Bot', id)
			  break
		case '#chatdia':
		     if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
             if (args.length == 0) return client.reply(dari, `Untuk  Chat Dia, Silahkan ketik #chat [pesannya]`, id)
			  arg = body.trim().split('|')
			  const poson = arg[1]
			  client.sendText(mentionedJidList, `DARI: [${pengirim}] \n${poson}`)
			  await client.reply(dari, 'Berhasil chat dia', id)
			  break
		case '#bhwhatsapp':
		     if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
             const apk = 'https://www.mediafire.com/download/sv5q4pei2nhuv7v'
			  client.sendFile(dari, apk, '', 'BHWhatsApp.apk', id)
			 break
		case '#linkppbot':
		return await client.reply(dari, ppbot, id)
		     break
		case '#ppbot':
		     client.sendFileFromUrl(dari, ppbot, '', 'pp.jpg')
			 break
		case '#lapor':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		      if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`, id)
              if (args.length === 1) return await client.reply(dari, `Untuk lapor ke owner, Silahkan ketik #lapor [pesannya]`, id)
			  const keluhan = body.slice(7)
			  client.sendText(creator, `*[REPORT]* \nDARI: [wa.me/${sender.id.replace(/[@c.us]/g, '')}] \n${keluhan}`)
			  await client.reply(dari, 'Terima Kasih atas laporannya', id)
			  break
		case 'iri':
		case 'Iri':
		    client.sendPtt(dari, './media/tts/iri.mp3', id)
			break
	    case '#wa.me':
        case '#wame':
            await client.reply(dari, `*This Is Your WhatsApp Number Link ${pushname}*\n\n*wa.me/${sender.id.replace(/[@c.us]/g, '')}*\n\n*or*\n\n*api.whatsapp.com/send?phone=${sender.id.replace(/[@c.us]/g, '')}*`, id)
            break
        case '#profile':
            if (quotedMsg) return profile(quotedMsgObj.sender.id, message, fs, groupAdmins, client)
	    if (mentionedJidList.length >= 1) return profile(mentionedJidList[1], message, fs, groupAdmins, client)
	    return profile(sender.id, message, fs, groupAdmins, client)
            break*/
		}
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
        //client.kill().then(a => console.log(a))
    }
}			
