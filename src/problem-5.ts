
interface Student {
    name: string;     
    age: number;     
    grades: number[];
}

function calculateAverageGrade (student : Student) : number{
      const totalGrade : number = student.grades.reduce((prev, current) => prev + current, 0);
      const avgerageNumber = totalGrade/student.grades.length;
      return avgerageNumber;
}

const student1: Student = {     
    name: "Bob",     
    age: 17,     
    grades: [75, 80, 82, 88, 90]
};


const averageGradeForBob = calculateAverageGrade(student1);
console.log(averageGradeForBob);