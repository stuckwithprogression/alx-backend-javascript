/* function that returns the sum of all student ids */

export default function getStudentIdsSum(getListStudents) {
  if (getListStudents instanceof Array) {
    return getListStudents.reduce(
      (prev, current) => prev.id || prev + current.id, 0,
    );
  }

  return 0;
}
