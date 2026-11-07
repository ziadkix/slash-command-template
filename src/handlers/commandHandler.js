const getCommandFiles = require('../utils/getCommandFiles');

module.exports = (client) => {
  for (const file of getCommandFiles()) {
    const command = require(file);
    if (!command.data || !command.execute) continue;

    if (client.commands.has(command.data.name)) {
      console.log(`skipped ${file}: command name "${command.data.name}" already loaded`);
      continue;
    }

    client.commands.set(command.data.name, command);
  }
};
