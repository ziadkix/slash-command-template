const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('show info about this server')
    .setDMPermission(false),
  async execute(interaction) {
    const guild = interaction.guild;

    const embed = new EmbedBuilder()
      .setTitle(guild.name)
      .setThumbnail(guild.iconURL({ size: 256 }))
      .addFields(
        { name: 'Members', value: String(guild.memberCount), inline: true },
        { name: 'Channels', value: String(guild.channels.cache.size), inline: true },
        { name: 'Roles', value: String(guild.roles.cache.size), inline: true },
        { name: 'Created', value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:R>` }
      );

    await interaction.reply({ embeds: [embed] });
  }
};
