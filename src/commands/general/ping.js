const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('check the bot latency'),
  async execute(interaction, client) {
    await interaction.reply(`pong, ${client.ws.ping}ms`);
  }
};
