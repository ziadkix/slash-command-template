const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('list all commands'),
  async execute(interaction, client) {
    const list = client.commands
      .map(command => `\`/${command.data.name}\` ${command.data.description}`)
      .join('\n');

    const embed = new EmbedBuilder()
      .setTitle('Commands')
      .setDescription(list);

    await interaction.reply({ embeds: [embed], flags: 64 });
  }
};
