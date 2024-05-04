/* function that returns an array of objects who are located in a specific city
*/

export default function getStudentByLocation(getListStudents, city) {
  const arr = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  return arr.filter((arr) => arr.location === city);
}
