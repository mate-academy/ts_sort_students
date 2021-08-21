// describe Student type
// create and export SortType enum
// create SortOrder type

interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[]
    = students.map((student: Student) => ({ ...student }));

  if (order === 'asc') {
    if (sortBy === SortType.Age) {
      studentsCopy.sort((a: Student, b: Student) => a[sortBy] - b[sortBy]);
    }

    if (sortBy === SortType.Name || sortBy === SortType.Surname) {
      studentsCopy
        .sort((a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]));
    }

    if (sortBy === SortType.Married) {
      studentsCopy.sort((a: Student, b: Student) => +a[sortBy] - +b[sortBy]);
    }

    if (sortBy === SortType.AverageGrade) {
      studentsCopy.sort((a: Student, b: Student) => {
        const averageGradesOfA: number
          = a[sortBy].reduce((prev, grade) => prev + grade, 0)
          / a[sortBy].length;

        const averageGradesOfB: number
          = b[sortBy].reduce((prev, grade) => prev + grade, 0)
          / b[sortBy].length;

        return averageGradesOfA - averageGradesOfB;
      });
    }
  } else {
    if (sortBy === SortType.Age) {
      studentsCopy.sort((a: Student, b: Student) => b[sortBy] - a[sortBy]);
    }

    if (sortBy === SortType.Name || sortBy === SortType.Surname) {
      studentsCopy
        .sort((a: Student, b: Student) => b[sortBy].localeCompare(a[sortBy]));
    }

    if (sortBy === SortType.Married) {
      studentsCopy.sort((a: Student, b: Student) => +b[sortBy] - +a[sortBy]);
    }

    if (sortBy === SortType.AverageGrade) {
      studentsCopy.sort((a: Student, b: Student) => {
        const averageGradesOfA: number
          = a[sortBy].reduce((prev, grade) => prev + grade, 0)
          / a[sortBy].length;
        const averageGradesOfB: number
          = b[sortBy].reduce((prev, grade) => prev + grade, 0)
          / b[sortBy].length;

        return averageGradesOfB - averageGradesOfA;
      });
    }
  }

  return studentsCopy;
}
