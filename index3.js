const { create, Client } = require('@open-wa/wa-automate')
const welcome = require('./lib/welcome')
const bennymsg3 = require('./bennymsg3')
const color = require('./lib/color')
const options = require('./options')

const start = async (client = new Client()) => {
        console.log(color('[SERVER] Server Online!', 'yellow'))
        // Force it to keep the current session
        client.onStateChanged((state) => {
            console.log(color('[bennybotwa]', 'blue'), state)
            if (state === 'CONFLICT' || state === 'UNLAUNCHED') client.forceRefocus()
        })
        // listening on message
        client.onMessage((async (message) => {
            client.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 1000) {
                    client.cutMsgCache()
                }
            })
            bennymsg3(client, message)
        }))

        client.onGlobalParicipantsChanged((async (heuh) => {
			client.sendStickerFromUrl(from, 'https://pixabay.com/id/photos/jendela-air-kaca-tetes-teks-hujan-3777037')
            await welcome(client, heuh)
            //left(client, heuh)
            }))
			
        client.onAddedToGroup(((chat) => {
            let totalMem = chat.groupMetadata.participants.length
            if (totalMem < 0) { 
            	client.sendText(chat.id, `Cih member nya cuma ${totalMem}, Kalo mau invite bot, minimal jumlah mem ada 0`).then(() => client.leaveGroup(chat.id)).then(() => client.deleteChat(chat.id))
            } else {
                client.sendText(chat.groupMetadata.id, `Halo warga grup *${chat.contact.name}* terimakasih sudah menginvite bot ini, untuk melihat menu silahkan kirim *!help*`)
            }
        }))

        client.onAck((x => {
            const { from, to, ack } = x
            if (x !== 3) client.sendSeen(to)
        }))
		
		client.onMessage((async (message) => {
		if (!sender.isMe) return client.reply(dari, 'SELF-BOT!')
			return await client.reply(from, bennymsg(message, client), id)
		}))

        // listening on Incoming Call
        client.onIncomingCall(( async (call) => {
            await client.sendText(call.peerJid, 'Maaf, saya tidak bisa menerima panggilan. nelfon = block!')
            .then(() => client.contactBlock(call.peerJid))
        }))
    }

create('session3', options(true, start))
    .then(client => start(client))
    .catch((error) => console.log(error))