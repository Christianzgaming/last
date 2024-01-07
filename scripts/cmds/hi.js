module.exports = {
    config: {
        name: "hi",
        version: "1.0",
        author: "Jaychris Garcia",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
    onStart: async function(){},
    onChat: async function({
        event,
        message,
        api,
        getLang
    }) {
        const keywords = ['tanga', 'bobo', 'gago', 'animal', 'tarantado', 'punyeta', 'punyemas'];
        const foundKeyword = keywords.find(keyword => event.body.toLowerCase().includes(keyword));

        if (foundKeyword) {
            return message.reply(`ay ${foundKeyword} ka pala e panis!`);
        }
      
       const keywords2 = ['love', 'lovie', 'mahal', 'babe', 'asawa', 'wife', 'baby'];
       const foundKeyword2 = keywords2.find(keyword2 => event.body.toLowerCase().includes(keyword2));

      if (foundKeyword2) {
       return message.reply(`hello ${foundKeyword2}, how can i help you?`);
        
        }

      const keywords3 = ['Goodmorning', 'Goodevening', 'Goodafternoon', 'magandang umaga', 'magandang gabi', 'magandang hapon', 'Goodnight'];
      const foundKeyword3 = keywords3.find(keyword3 => event.body.toLowerCase().includes(keyword3));

      if (foundKeyword3) {
       return message.reply(`FROM MY MASTER CHANZ : ${foundKeyword3}, people! `);
        
        }

      const keywords4 = ['happyholiday', 'happybirthday', 'happy new year', 'happysunday', 'happymonday', 'happytuesday', 'happywednesday', 'happythursday', 'happyfriday'];
       const foundKeyword4 = keywords4.find(keyword4 => event.body.toLowerCase().includes(keyword4));

      if (foundKeyword4) {
       return message.reply(`FROM MY MASTER CHANZ : ${foundKeyword4}, po! `);

      }




      
    }
};