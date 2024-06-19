const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');
    if (lines.length === 0) throw new Error('Cannot load the database');
    
    const students = {};
    let totalStudents = 0;
    
    for (const line of lines.slice(1)) {
      if (line === '') continue;
      totalStudents++;
      const [firstName, , , field] = line.split(',');
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstName);
    }
    
    console.log(`Number of students: ${totalStudents}`);
    
    for (const field in students) {
      if (students.hasOwnProperty(field)) {
        const count = students[field].length;
        const list = students[field].join(', ');
        output = `Number of students in ${field}: ${count}. `
        output += `List: ${list}`
        console.log(output);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
