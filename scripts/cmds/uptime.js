module.exports = {
  config: {
    name: "uptime",
    aliases: ["up", "upt"],
    version: "1.0",
    author: "XyryllPanget",
    role: 0,
    shortDescription: {
      en: "Displays the uptime of the bot."
    },
    longDescription: {
      en: "Displays the amount of time that the bot has been running for."
    },
    category: "System",
    guide: {
      en: "Use {p}uptime to display the uptime of the bot."
    }
  },
  onStart: async function ({ api, event, args }) {
const uptime = process.uptime();
const days = Math.floor(uptime / 86400);
const hours = Math.floor((uptime % 86400) / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
const seconds = Math.floor(uptime % 60);
const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

    api.sendMessage(`🤖 BOT running strong! 🤖\n \nCHANZBOT STATUS🟢\n\n\n\n⭓────────────────⭓\n├──⭔RUNNING TIME\n${uptimeString}. \n⭓────────────────⭓`, event.threadID);
  }
};