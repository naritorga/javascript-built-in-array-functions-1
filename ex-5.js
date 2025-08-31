const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function avgScorefn (accumulator, student) {
  return accumulator + student.score
}

function getAverageStudentScore(students) {
  // Start coding here
  let avgScore = students.reduce(avgScorefn, 0)
  console.log (avgScore / students.length)
}

getAverageStudentScore(students); // Output: 87.5
