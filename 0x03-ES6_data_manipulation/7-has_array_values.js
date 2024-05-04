/**
 * hasValuesFromArray - function that returns a boolean if all the elements in
 *                      an array exist within the set
 *
 * @set: the set
 * @array: the array
 *
 * Return: return a boolean
*/

export default function hasValuesFromArray(set, array) {
  for (const element of array) {
    if (!set.has(element)) {
      return false;
    }
  }

  return true;
}
