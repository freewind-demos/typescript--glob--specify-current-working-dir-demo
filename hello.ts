import glob from 'glob';
import path from 'path';

const files = glob.sync('g*', {
  cwd: path.resolve(__dirname, 'node_modules')
})

console.log(files);
