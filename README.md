# Slash Command Template

A clean starter for discord.js v14 bots that run on slash commands. Drop a file in the commands folder, deploy, done.

## Setup

1. Clone the repo and run `npm install`
2. Copy `.env.example` to `.env` and fill it in
3. Run `npm run deploy` to register the commands
4. Run `npm start`

## Env values

- `TOKEN` your bot token
- `CLIENT_ID` your application id
- `GUILD_ID` optional, set it to register commands in one server instantly. Leave it empty to register them globally

## Folder layout

```
src
  commands
    general
      ping.js
      userinfo.js
      serverinfo.js
      help.js
  events
    ready.js
    interactionCreate.js
  handlers
    commandHandler.js
    eventHandler.js
  utils
    getCommandFiles.js
  deploy.js
  index.js
```

## Adding a command

Make a new file inside any folder under `src/commands`:

```js
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hello')
    .setDescription('say hello'),
  async execute(interaction) {
    await interaction.reply('hello');
  }
};
```

Run `npm run deploy` again and restart the bot.

## Adding an event

Make a file inside `src/events` that exports `name`, `execute` and optionally `once: true`.

## License

MIT
