const { parseFile } = require('./parseFile.js');

describe('parseFile()', () => {
  test('Test if some file is parse correctly', () => {
    const content = parseFile(`${__dirname}/__mock__/My Clippings.txt`);
    expect(content).toBe('some text here');
  });

  test('Test if throw exception if parameter is the wrong type', () => {
    try {
      parseFile(1234);
    } catch(error) {
      expect(error).toBe('[TYPE ERROR]: filePath is not the type string');
    }
  });
});
