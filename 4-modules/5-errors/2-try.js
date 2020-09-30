const path = require('path');
const fs = require('fs');

const files = ['.bash_profile', 'kjkjhh', '.npmrc'];

files.forEach(file => {
  try {
    const data = fs.readFileSync(file, 'utf-8');
    console.log('File data is', data);
  } catch (err) {
    console.log('File not found');
  }
});
