module.exports = {
  config: {
    name: "listai",
    aliases: [`listai`],
    version: "1.0",
    author: "ChristianZ",
    countDown: 0,
    category: "config",
    role: 0,
    shortDescription: {
      en: "List Ai",
    },
  },

  langs: {
    en: {
        LISTAI: "『 𝗔𝗜 』\n│✧ai ✧2gpt\n│✧gpt ✧gpt4\n│✧3gpt ✧4gpt\n│✧5gpt\n✧6gpt\n│✧nemo ✧bard \n│✧bot\n╰───────────⭔\n╭─⭔\n➤ Creator: \n【 𝗖𝗛𝗔𝗡𝗭 】",
    },
  },

  onStart: async function ({ message, event, getLang }) {
    const args = event.body.split(" ");
    let responseMessage = "";

    if (args.length === 1) {
      // Handle "help" command
      responseMessage = getLang("LISTAI");
    } else {
      // Handle other cases (e.g., "help commandName")
      // You can add custom logic here to provide instructions for specific commands.
      responseMessage = "Error.";
    }

    message.reply(responseMessage);
  },
};module.exports = {
  config: {
    name: "listai",
    aliases: [`listai`],
    version: "1.0",
    author: "ChristianZ",
    countDown: 0,
    category: "config",
    role: 0,
    shortDescription: {
      en: "List Ai",
    },
  },

  langs: {
    en: {
        LISTAI: "『 𝗔𝗜 』\n│✧ai ✧2gpt\n│✧gpt ✧gpt4\n│✧3gpt ✧4gpt\n│✧5gpt\n✧6gpt\n│✧nemo ✧bard \n│✧bot\n╰───────────⭔\n╭─⭔\n➤ Creator: \n【 𝗖𝗛𝗔𝗡𝗭 】",
    },
  },

  onStart: async function ({ message, event, getLang }) {
    const args = event.body.split(" ");
    let responseMessage = "";

    if (args.length === 1) {
      // Handle "help" command
      responseMessage = getLang("LISTAI");
    } else {
      // Handle other cases (e.g., "help commandName")
      // You can add custom logic here to provide instructions for specific commands.
      responseMessage = "┏━ AI ━━━━━━⦿━━━━━━━━֎";
    }

    message.reply(responseMessage);
  },
};