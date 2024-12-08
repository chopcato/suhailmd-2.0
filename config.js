const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "18765159077";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_56_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODksXG4gICAgICAgIDIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDcxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzLFxuICAgICAgICAxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzLFxuICAgICAgICA0OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzLFxuICAgICAgICA4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0LFxuICAgICAgICA2NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ1N4aFpzb2c1VXFULzVQTDI3UlNhNmlXM0pHUUVkaTJHL0F5ZU1idFNNQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI1OTI2ODA0NjA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTQ4ODEwNkJCMzJCMTcxOEMwNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM2Mzc0MDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI1OTI2ODA0NjA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTc0MUEwNTM0MzAwNjRENURGN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM2Mzc0MTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidzhTc3FZOS1RbXFHUjR5S29UR3N6d1wiLFxuICBcInBob25lSWRcIjogXCJlNDhiYWQ1YS1hMjcwLTQyNmMtODdlMC04Yjg0YzA5NTMzNTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTksXG4gICAgICAxNjUsXG4gICAgICA2OSxcbiAgICAgIDcwLFxuICAgICAgOTksXG4gICAgICAxODYsXG4gICAgICA4MixcbiAgICAgIDE0MixcbiAgICAgIDE3NyxcbiAgICAgIDE5NyxcbiAgICAgIDIzMCxcbiAgICAgIDIwOSxcbiAgICAgIDE1MSxcbiAgICAgIDY0LFxuICAgICAgMTQ2LFxuICAgICAgMzQsXG4gICAgICAxMjgsXG4gICAgICA3MCxcbiAgICAgIDExMCxcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgMjgsXG4gICAgICA0OSxcbiAgICAgIDQzLFxuICAgICAgMjIyLFxuICAgICAgMTAxLFxuICAgICAgNjgsXG4gICAgICA5MixcbiAgICAgIDEwMyxcbiAgICAgIDcsXG4gICAgICA4NSxcbiAgICAgIDEwMSxcbiAgICAgIDI5LFxuICAgICAgMTEyLFxuICAgICAgNjIsXG4gICAgICA4MyxcbiAgICAgIDEyOCxcbiAgICAgIDExNyxcbiAgICAgIDE4LFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUC8zcy9ZRUVKdnExTG9HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJYU1KZUFqWFhEUGR5RXlMTWlySml6ZkxoUHpLVWRsZ1dJeDlab0Y0STE0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZqWVBVNndSNzlXRUlQVEE2TEQzLzdJYkY4T3JLTmQxRFpqY3BMbVI4aXhjczBtYUE5NzJwUDVOZk01cDNuOFVMN0p3TU43UkxLbVFJbmFLRENaQ0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVJUGZ3Q3FYZmJCWjkvbzdJTVlabi85TXZpWmFPUGt5cHVvbE04ZlFsVlJpRUlIWWFjZncwSWVEdmlJSzJZTXZYZ1g0WDFXc1lLb2FZaUxBYk5nWGhRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTkyNjgwNDYwNTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNjk0MjA4Nzc4NDI3OjdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSnV2afCfk57wn4e68J+HuFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNTkyNjgwNDYwNTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzYzNzQwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU84TFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTzhJLmpzb24iOiAie1wia2V5RGF0YVwiOlwibU1SOHNJTTdZR2hORURGKy9PTG84cHJ0VldWV1lsdjA3SDRwZDFvREw3OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzIyMDU2NzAzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM2MzU0MDA3OTRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPOEsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKMmdWOFNXMzFhMnoxV2Q2UUI1amg1MlExYWZWcytiV0llZTduN3NSTmRVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMjIwNTY3MDMsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzMzNjM2MjQ0MjkzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTzhMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM2ZXUlg1N2NIbjBmNzhHQzZhZWtTUEE5a3VHcURHemhROWl4OWFKclhqZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzIyMDU2NzAzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM2MzYyNDU2ODhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Juvi",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Juvi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
