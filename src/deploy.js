require('dotenv').config();
const { REST, Routes } = require('discord.js');
const getCommandFiles = require('./utils/getCommandFiles');

const commands = getCommandFiles()
  .map(file => require(file))
  .filter(command => command.data)
  .map(command => command.data.toJSON());

const rest = new REST().setToken(process.env.TOKEN);

const route = process.env.GUILD_ID
  ? Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID)
  : Routes.applicationCommands(process.env.CLIENT_ID);

(async () => {
  try {
    await rest.put(route, { body: commands });
    console.log(`pushed ${commands.length} commands`);
  } catch (err) {
    console.log('deploy failed', err);
  }
})();
