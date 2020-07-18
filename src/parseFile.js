const fs = require('fs');

const parseFile = (filePath) => {
  if (typeof filePath !== 'string') {
    throw '[TYPE ERROR]: filePath is not the type string';
  }

  // Open file not just read
  const content = fs.readFileSync(filePath, 'utf8'); 
  return content;
};

exports.parseFile = parseFile;
