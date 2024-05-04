/**
 * updateStudentGradeByCity - function returns an array of students for a
 *                            specific city with their new grade
 *
 * @students: list of student
 * @city: city
 * @ngrades: the new value of grades to use to update the previous
 *
 * Return: return an array of students
*/

export default function updateStudentGradeByCity(students, city, ngrades) {
  const dgrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (ngrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || dgrade).grade,
      }));
  }

  return [];
}
