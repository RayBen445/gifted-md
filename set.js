// Hi Buddy,
// Edit Anything Here Except ones Indicated "DO NOT"...
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.caption = "*©𝟐𝟎𝟐𝟒 𝐏𝐑𝐎𝐅 𝐓𝐄𝐂𝐇 𝐕𝟓*"; // Input Yours custom...(Maintain font for Flow)
global.api = "https://api.giftedtech.web.id/api"; // DO NOT Change this...
global.session = "https://pairing.giftedtech.web.id"; // DO NOT Change this....
global.footer = "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜ*"; // Input Yours custom...(Maintain font for Flow)
global.ytdl = "https://ytdl.giftedtech.web.id"; // You Can Change this...
global.giftedCdn = "https://cdn.giftedtech.web.id";
global.sessionServer = "https://creds.giftedtech.web.id";
global.giftedRepo = "https://github.com/mauricegift/gifted-md";
global.giftedApiRepo = "https://api.github.com/repos/mauricegift/gifted-md";


 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Gifted~H4sIAAAAAAAAA5VUSY7jRhD8ilFXCRY3iZSABsxN3CRSW2tpYw5FskiVRLGoYpESNWjAHzAMwzdf5mrAv/IL5gkGe5megz1u32pJZEZGROZHkBNcIg81YPQRFBTXkKH2yJoCgRHQqiRBFHRBDBkEI4CDq7LhjQXVrxxkuFrjbfNQkys3R7543OBePvCCGTwn2/QOPHZBUYUZjr6R8ODx2tFOaXW01aMne+7tobivTrltOzw9DIMdURYrPZZzkbsDj21GiCnOU7PYoxOiMPNQM4OYvg/+fEa8qU83uZesT0deC22ylPVYzwSJDJkk49180fFE2bKm74OPuISwiXGhgZga13Siy/vzxDzvi0Wy7nX8G8MPBBtpTjn1GX6J0xzFToxyhlnzbt6R5mxDRbY2hequY0tvUtOu7U59EsV5GJ7tmxOWw46xXprv5N2vinJ+MJ1JJNSBiF3PGDZiPLFUTHczPRjq/sKXIrU3Xl2+Bj6jr145/h/eiR6tw51fOe7ZGGinxanIrGZ1Ma/nVJxtqWDO/bkurX1bIO+Dv/O2B0tcKoZEA39yURSP4rQMLek6hijRPMiL2rx3g2isvMGHrKLfQhn2gh08LQVBSRzHyhRHzQ0lWdyqTcijfTwzBmh6q47be8WrWSJZ82XUo6p8mfC3cEtWwQBNyGorJIF2v0zO086+slNNvXvq6IgaJwYj/rELKEpxyShkmOTtm8ApXQDjeokiitgTvSCVLhrNFogRpzFZqIY9UmP17A3yYKfEg4Myt+f3Ei7RxLwDXVBQEqGyRLGNS0ZoM0VlCVNUgtGPH7ogR1f2LFxbTuS7IMG0ZPd5VWQExq+qvn7CKCJVzpZNHuntAVEw4t6eEWM4T8uWxyqHNNrjGul7yEowSmBWoi8dIopiMGK0Ql+mVidxS7zoqqu+0ndBF5yeBMExGAFBlIa82B9wHMdLI4H/ofz+0uaFRfF9jhjoguwljh9ysigMB7yoyIM2sv3oghy22cCMkgSVJaHfff706x9//fTz50+//Pn502+/tzq8dNEWjRGDOCvBCOjO2eUYZ5iO3eyjqWWpZqrqqQreun61z7M8oeMO5XSyiwcXLnHXw+Wg4w23MJej/s2yJPqg9V1rNXcPRnr3D0nACFzi/Thv4sOsf5oS52xgq5riXD8PDv7SvXoyCuoxvrg6adLypvWWdGiOWaSaYziuTqTw67k1WHYE6T6elaV1FvoB04zLXVstRjWO0NfF3ORiZFpQqqXsJn3kdkK/46oYH6bZkFfSfCFrqLkYsTVTHGzXmr8Q+8s81ocxkzb+bS90Qint6AMp7bi+qU36G8HUX4z9NFjZy0LDT5Zr9WyvCUZP++FFl//W9xl560PusftVkpeV8y9jq20aPUGSLtio9O1mndxXNa7XQtERg+i6rzxhjpaLI6fvLhJ4fPzQBUUGWULoCYwAzGNKntxDSdUa28kT8o1iuuo4r61nsGTq27Cs8AmVDJ4KMOLlPi/wiiQJz1EzSgoblvuWBUtSTxV4/BuqoluZegcAAA==", // Add sess Id here especially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || false, // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by Professor 👨‍🏫📚!", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "2349135600014", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐏𝐑𝐎𝐅 𝐓𝐄𝐂𝐇", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐎𝐅 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "𝐏𝐑𝐎𝐅-𝐌𝐃💜", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "5.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐎𝐅-𝐁𝐎𝐓", // Input Yours custom...(Maintain font for Flow)
BOT_PIC: process.env.BOT_PIC || "https://files.giftedtech.web.id/file/gifted-md.jpg", // You can Replace with yours...
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "Gifted creates things that creates other things",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "212,79", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
