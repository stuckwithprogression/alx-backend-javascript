/* function that returns an array of ids from a list of object */

export default function getListStudentIds(obj) {
  const arr = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  const arrMap = arr.map((element) => element.id);
  if (Array.isArray(obj)) {
    return arrMap;
  }

  return [];
}
