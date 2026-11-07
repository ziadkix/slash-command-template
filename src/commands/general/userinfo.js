const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('show info about a user')
    .addUserOption(option =>
      option.setName('user').setDescription('who to check')
    ),
  async execute(interaction) {
    const user = interaction.options.getUser('user') || interaction.user;
    const member = interaction.guild.members.cache.get(user.id);

    const embed = new EmbedBuilder()
      .setTitle(user.username)
      .setThumbnail(user.displayAvatarURL({ size: 256 }))
      .addFields(
        { name: 'ID', value: user.id },
        { name: 'Created', value: `<t:${Math.floor(user.createdTimestamp / 1000)}:R>`, inline: true }
      );

    if (member) {
      embed.addFields({
        name: 'Joined',
        value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:R>`,
        inline: true
      });
    }

    await interaction.reply({ embeds: [embed] });
  }
};
