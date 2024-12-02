import * as fs from 'fs';

const loadFile = (path: string): Promise<string> => {
  console.log('Loading file:', path);

  return new Promise((resolve, reject) => {
    fs.readFile(path,  'utf-8', (err, data) => {
      if (err) {
        console.error('Error:', err);
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

export default loadFile;