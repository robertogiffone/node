const path = require('path');

console.log(path.basename('c:\\temp\\arquivo.html'));
console.log(path.normalize('c:\\temp/dir//subdir/dir/..'));
console.log('join path:', path.join('/teste', 'teste2', 'teste3/teste4', 'dir2', '..'));
console.log('resolve:', path.resolve('path.js'));
console.log('extension:', path.extname('path.js'));
