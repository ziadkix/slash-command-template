const getCommandFiles = require('../utils/getCommandFiles');

module.exports = (client) => {
  for (const file of getCommandFiles()) {
    const command = require(file);
    if (!command.data || !command.execute) continue;
    client.commands.set(command.data.name, command);
  }
};
