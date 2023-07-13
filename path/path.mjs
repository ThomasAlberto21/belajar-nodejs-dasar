import path from 'path';

const file = 'E:/Game/Spiderman';

console.info(path.basename(file));
console.info(path.dirname(file));
console.info(path.toNamespacedPath(file))
console.info(path.isAbsolute(file));
