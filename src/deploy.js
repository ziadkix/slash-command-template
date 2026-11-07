require('dotenv').config();
const { REST, Routes } = require('discord.js');
const getCommandFiles = require('./utils/getCommandFiles');

(async () => {
  if (!process.env.TOKEN || !process.env.CLIENT_ID) {
    console.log('deploy failed: TOKEN and CLIENT_ID must be set in .env (copy .env.example first)');
    return;
  }

  try {
    const commands = getCommandFiles()
      .map(file => require(file))
      .filter(command => command.data)
      .map(command => command.data.toJSON());

    if (commands.length === 0) {
      console.log('no commands found under src/commands - nothing was pushed');
      return;
    }

    const rest = new REST().setToken(process.env.TOKEN);

    const route = process.env.GUILD_ID
      ? Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID)
      : Routes.applicationCommands(process.env.CLIENT_ID);

    await rest.put(route, { body: commands });
    console.log(`pushed ${commands.length} commands`);
  } catch (err) {
    console.log('deploy failed', err);
  }
})();
