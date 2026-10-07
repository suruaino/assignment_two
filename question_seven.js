const student = { name: "Chidi", score: 50 };
Object.freeze(student);
student.score = 90;
console.log(student);
 
const grades = [1, 2, 3];
grades.push(4);
console.log(grades);
 
student = { name: "Bola", score: 70 };
