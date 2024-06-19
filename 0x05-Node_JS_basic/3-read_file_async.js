const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      
      const lines = data.trim().split('\n');
      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }
      
      const headers = lines[0].split(',');
      if (headers.length < 4) {
        reject(new Error());
        return;
      }
      
      const students = lines.slice(1)
      .map(line => line.split(','))
      .filter(parts => parts.length === headers.length);
      const totalStudents = students.length;
      
      const studentsByField = students.reduce((acc, student) => {
        const field = student[3];
        if (!acc[field]) {
          acc[field] = { count: 0, students: [] };
        }
        acc[field].count += 1;
        acc[field].students.push(student[0]);
        return acc;
      }, {});
      
      let output = `Number of students: ${totalStudents}\n`;
      for (const field in studentsByField) {
        const { count, students } = studentsByField[field];
        output += `Number of students in ${field}: ${count}. `;
        output += `List: ${students.join(', ')}\n`;
      }
      
      console.log(output.trim())
      resolve(output.trim());
    });
  });
}

module.exports = countStudents;
