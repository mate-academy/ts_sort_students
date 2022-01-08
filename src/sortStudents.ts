
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

interface StudentWithAverageGrade extends Student {
  averageGrade: number;
}

export function sortStudents(students: Student[],
  sortBy:SortType, order:SortOrder):StudentWithAverageGrade[] {
  const studentsWithAverageGrades = students
    .map((student: Student) => ({
      ...student,
      averageGrade: student.grades.reduce((prev, current) => {
        return prev + current;
      }, 0) / student.grades.length,
    }));

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        return studentsWithAverageGrades.sort((a:Student, b: Student) => {
          return a.name.localeCompare(b.name);
        });
      case SortType.Surname:
        return studentsWithAverageGrades.sort((a:Student, b: Student) => {
          return a.surname.localeCompare(b.surname);
        });
      case SortType.Age:
        return studentsWithAverageGrades.sort((a:Student, b: Student) => {
          return a.age - b.age;
        });
      case SortType.Married:
        return studentsWithAverageGrades.sort((a:Student, b: Student) => {
          return Number(a.married) - Number(b.married);
        });
      case SortType.AverageGrade:
        return studentsWithAverageGrades
          .sort((a:StudentWithAverageGrade, b: StudentWithAverageGrade) => {
            return a.averageGrade - b.averageGrade;
          });
      default: return studentsWithAverageGrades;
    }
  }

  switch (sortBy) {
    case SortType.Name:
      return studentsWithAverageGrades.sort((a:Student, b: Student) => {
        return b.name.localeCompare(a.name);
      });
    case SortType.Surname:
      return studentsWithAverageGrades.sort((a:Student, b: Student) => {
        return b.surname.localeCompare(a.surname);
      });
    case SortType.Age:
      return studentsWithAverageGrades.sort((a:Student, b: Student) => {
        return b.age - a.age;
      });
    case SortType.Married:
      return studentsWithAverageGrades.sort((a:Student, b: Student) => {
        return Number(b.married) - Number(a.married);
      });
    case SortType.AverageGrade:
      return studentsWithAverageGrades
        .sort((a:StudentWithAverageGrade, b: StudentWithAverageGrade) => {
          return b.averageGrade - a.averageGrade;
        });
    default: return studentsWithAverageGrades;
  }
}
