/**
 * groceriesList - function that returns a map of groceries with some items
 *
 * Return: return a map
*/

export default function groceriesList() {
  const myList = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  return new Map(myList);
}
