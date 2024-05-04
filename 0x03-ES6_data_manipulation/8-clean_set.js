/**
 * cleanSet - function that returns a string of all the set values that start
 *            with a specific string
 *
 * @set: the set
 * @startString: the specific string
 *
 * Return: return a string
*/

export default function cleanSet(set, startString) {
  const myList = [];

  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  for (const element of set) {
    if ((typeof element === 'string') && (element.startsWith(startString))) {
      myList.push(element.slice(startString.length));
    }
  }

  return myList.join('-');
}
