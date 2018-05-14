export default function (...args) {
  let classList = [];

  for (const list of args) {
    if (list === undefined || list === null) {
      continue;
    }

    if (Array.isArray(list)) {
      classList = classList.concat(list);
      continue;
    }

    switch (typeof list) {
      case 'string':
        classList = classList.concat(list.split(' '));
        break;
      case 'object':
        classList = classList.concat(Object.keys(list).filter(key => list[key] !== false));
        break;
    }
  }

  return classList;
}
