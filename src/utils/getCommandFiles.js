const fs = require('fs');
const path = require('path');

module.exports = () => {
  const root = path.join(__dirname, '..', 'commands');
  const files = [];

  for (const folder of fs.readdirSync(root)) {
    const folderPath = path.join(root, folder);
    if (!fs.statSync(folderPath).isDirectory()) continue;

    for (const file of fs.readdirSync(folderPath)) {
      if (file.endsWith('.js')) files.push(path.join(folderPath, file));
    }
  }

  return files;
};
