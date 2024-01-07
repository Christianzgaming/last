const axios = require('axios');

const GPT_API_URL = 'https://sandipapi.onrender.com/gpt';
const PREFIXES = ['/gpt'];

module.exports = {
  config: {
    name: "gpt",
    version: 1.0,
    author: "CHANZ",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {
    // Initialization logic if needed
  },
  onChat: async function ({ api, event, args, message }) {
    try {
      const prefix = PREFIXES.find((p) => event.body && event.body.toLowerCase().startsWith(p));

      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }

      const prompt = event.body.substring(prefix.length).trim();

      if (!prompt) {
        const defaultMessage = getCenteredHeader("𝗖𝗛𝗔𝗡𝗭 𝗕𝗢𝗧 💢") + "\n━━━━━━━━━━━━━━━━━━\nHello! Im ChanZ Bot, Ask me anything and I will answer it for you. \n\nTo use me,\n- Type '/gpt' followed by your question.\n- Example: '/gpt What is the meaning of life?'";
        await message.reply(defaultMessage);
        return;
      }

      const answer = await getGPTResponse(prompt);

      // Adding header to the answer
      const answerWithHeader = getCenteredHeader("𝗖𝗛𝗔𝗡𝗭 𝗕𝗢𝗧 𝗥𝗘𝗦𝗣𝗢𝗡𝗦𝗘 💬") + "\n━━━━━━━━━━━━━━━━━━\n" + answer;

      await message.reply(answerWithHeader);
    } catch (error) {
      console.error("Error:", error.message);
      // Additional error handling if needed
    }
  }
};

function getCenteredHeader(header) {
  const totalWidth = 32; // Adjust the total width as needed
  const padding = Math.max(0, Math.floor((totalWidth - header.length) / 2));
  return " ".repeat(padding) + header;
}

async function getGPTResponse(prompt) {
  // Implement caching logic here

  const response = await axios.get(`${GPT_API_URL}?prompt=${encodeURIComponent(prompt)}`);
  return response.data.answer;
}