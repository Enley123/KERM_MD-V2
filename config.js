//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "50934251716";
global.owner = process.env.OWNER_NUMBER || "50934251716";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0FjYXBTZmpzVlRVVFdobG5nazN5Yy9GKzR5RSsvc3VLaHAvVlVBSzQxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidCtydDN1MndCaExhd0VlSTdMVG9RK2NVNGkraE5QN29HbGZNaUg1dE53MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TDMvY09NOUlGSjQ1cVdVV0pLcWZSeVlOeHhCUVVtOGZzNFhOdjF5ZzFjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmSGJEWGlVdFI5am0wQkZjOWJPY1dlb2RTMnYzTEdvN3pDWTlCRGlXWXlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNOZU9URFNia3ViNGI3MHk0MGpoNGp2dVV3QTlhRWluRmpKZ1BFNi9NVzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZXd1ZUQm1maWRseUxwNnp6OUlOY3c3ZHd2ZFAzTWlYbGtueDJpUmduM009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1BMN1FZQ01aTVdlZ2haUlhUcHBmUzJ6N0pVMUhBd1R2ZDh2OGRPZEhsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXRtSjRmNXBUZWx1bkFIQTNSU0VpcXRTeXlZWTIxZ3hEYk9xQjM2cmxYWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJ1TWE0YUF1R1oySldPY25remhIUUpiMktBc0UwNitxOHdBcGoraTdPMkl6S3VySjlDZXVyU1RZeXk4bXRaTHU0clZHN3JTKzk1MGluVnJzQUEycWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzcsImFkdlNlY3JldEtleSI6IkNUdmZaS1FkWWxBWDZJanZJK2tLaHhaZElVQkFSZWxzRWJaSGVCRGNVSkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InFEaHYzUXdGUll5X0VJQS0tOGF5eVEiLCJwaG9uZUlkIjoiMmZmY2ZjMGMtZjJiYy00MWIxLTljZWYtM2M0NDMyZmEzOWU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9pZDVKUUZPUVcvYzZUTGRxWFZEZ0hleTB5MD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4TlJ5MHFzMGZ1RDVucnRLUEZOaXgyajdqNHc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU0xSMzRNM0QiLCJtZSI6eyJpZCI6IjUwOTM0MjUxNzE2OjkyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6InRoZSBGdXR1ciBCaWxpb25uYWlyZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUNqdkZBUXk1YnV0d1lZQXlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMFI0dkJrRGRWcDJQRVFhS1hXM2NkQ0RhVFpoV1daNzZ0cGhkcmxzZUF5MD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYUFvZnJaTllRVUp6bndjNUVzN3RuMGhGZ05FY1hYTEhFeG9SRmFMV1lKTXpKYW5PQUJGT3ZIOHA4WHdPa3BRbjZSRlpMQkxwMkNGUFNsUGE2ME9kQkE9PSIsImRldmljZVNpZ25hdHVyZSI6Im1CaFhqcm5SNktLUERvKzJidWF3Vmx2T1ZWV3UwTUN6b2dJLzdzNDU3K2xXcUw3eitwZVJNOG5xNlJzZyt1QmNaWFMzUjBvSCtWMmNpY0NUSlpOeWhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5MzQyNTE3MTY6OTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZEVlTHdaQTNWYWRqeEVHaWwxdDNIUWcyazJZVmxtZStyYVlYYTViSGdNdCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzc2MTI0MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQblYifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
