const Discord = require ('discord.js');

const client = new Discord.Client();

const token = 'YOUR_DISCORD_BOT_TOKEN';

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}`);

});

client.on('message', (message) => {

  // Ignore messages from other bots or non-text channels

  if (message.author.bot || !message.content || !message.guild) {

    return;

  }

  // Check if the message starts with a specific command prefix

  if (message.content.startsWith('!hello')) {

    // Reply with a simple greeting

    message.channel.send('Hello, there!');

  } else if (message.content.startsWith('!ping')) {

    // Reply with a "pong" and the current latency

    message.channel.send(`Pong! Latency: ${Date.now() - message.createdTimestamp}ms`);

  }

});

client.login(token);
