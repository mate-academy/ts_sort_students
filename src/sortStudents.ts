
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  // write your function
  const sortedStudents = [...students];

  sortedStudents
    .sort((studentA, studentB) => {
      let valueA;
      let valueB;

      if (sortBy === SortType.Name) {
        valueA = studentA.name;
        valueB = studentB.name;
      } else if (sortBy === SortType.Surname) {
        valueA = studentA.surname;
        valueB = studentB.surname;
      } else if (sortBy === SortType.Age) {
        valueA = studentA.age;
        valueB = studentB.age;
      } else if (sortBy === SortType.Married) {
        valueA = studentA.married;
        valueB = studentB.married;
      } else if (sortBy === SortType.AverageGrade) {
        const averageGradeA = studentA.grades
          .reduce((sum, grade) => sum + grade, 0) / studentA.grades.length;
        const averageGradeB = studentB.grades
          .reduce((sum, grade) => sum + grade, 0) / studentB.grades.length;

        valueA = averageGradeA;
        valueB = averageGradeB;
      } else {
        throw new Error('Invalid SortType');
      }

      // Porównywanie wartości dla sortowania
      if (order === 'asc') {
        if (valueA < valueB) {
          return -1;
        }

        if (valueA > valueB) {
          return 1;
        }

        return 0;
      }

      if (order === 'desc') {
        if (valueA > valueB) {
          return -1;
        }

        if (valueA < valueB) {
          return 1;
        }

        return 0;
      }

      return 0;
    });

  return sortedStudents;
}
