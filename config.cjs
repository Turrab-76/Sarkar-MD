// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Sarkarmd$eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5tMC9CUHJ2aHplTmN4em5IQTFwT2JjdFVGSU5uRTJYbTIwSTFHWkhFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTW4zY2oxKzVLVFBxK3JoQ1VyZ0djKytnS3JLL0JablJzT0NTWExXZFpSRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQVFCdWJBU3VyalZYbE80RGNmWjNrOXVPY2laZDh4aktmR2R6RElEVWs0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxS3RoVk9WeUxxRGRFdnlsQnMzSDdJSm9BWERzY3h3MmhzSkFmdzBJTXhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJCT1YrQ0JvZmJ3d21OS2xnTCtjYnZWRms2eVFoYTNVVkpqdUhKTUwxMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlWbEZCaW1FVnRSRHVaeXg0aXdNNlB0amZ1aHhVME03dnJJelBXZEFRRzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMElsVHZLclNzYjIzcjNnWEtUUk5DWEgrSEROeENINlpodmo4TnpzVVBGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVV6NFAyaURvcExWUDJtcXVZZXY5V25VSmdET2xueTE0YWs0K295NjRGdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjU4cHJyTFBmTHlDMmplRTRiQmNEQ1Z5OFJjbkZydGoyY2tIckpmUWJDREV3bzA3MklBTWhoT2xxMHAvNEFmM240enFLOVg1UHFPVkdRYUxhM0xSc2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU1LCJhZHZTZWNyZXRLZXkiOiJJK3RrLzU4NmJnZVNXcTNmTENDM3FZQ0VUOXduQ1BTY3RNcXhhcUgyOEI4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM1NTc1NzQxNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3REEwMTJCQkJERUFEODVBMkMzMzgxRTMzM0QxMkNFRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ4NjUxNjYwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIxMjNMT1RVUyIsIm1lIjp7ImlkIjoiOTIzMzU1NzU3NDE1OjU1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlR1cnJhYiBIYWlkZXIiLCJsaWQiOiIxMTUyMDQ0Mjc5MzE4NDk6NTVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLMmRvZDRHRUllZDZjRUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1dXd5b3A2RmdJbGhQMTV4T3V0Tk10SG1rUG0rWm1UR2N4dkJHZUFVT3dRPSIsImFjY291bnRTaWduYXR1cmUiOiJybW5qZ21kaFh5UElnUitoMTFoWlo1czFaS0NXblNLZzZKRjlPOHUzN3BvdUNYTmFidkQzN1VZeUc0QWwyN2hXdVc3SlQwN1pkTGdvKzRCc0ZFY1lBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiU1ZyektVbUhSNHN6OXVWSzVIRVBwK29ISDdMcHVQT1BscjBMVE9GNm0xd1pCVkM5WE04WXNzd0xYMkpObFJ6eFlGTGRWRW0rRnNkSFBDRjBNbGhuaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzNTU3NTc0MTU6NTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWJzTXFLZWhZQ0pZVDllY1RyclRUTFI1cEQ1dm1aa3huTWJ3Um5nRkRzRSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ4NjUxNjU5LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRWtkIn0=",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : false,
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : false,
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "©Bandaheali",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923253617422",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
