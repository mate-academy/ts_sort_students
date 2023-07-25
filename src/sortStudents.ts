
export interface Student {
  name: string
  surname: string
  age: number
  married: boolean
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGrade(x: number[]): number {
  let gradeSum: number = 0;

  // for (let i: number = 0; i < x.length; i++) {
  //   gradeSum += x[i];
  // }
  x.forEach((grade) => {
    gradeSum += grade;

    return grade;
  });

  return gradeSum / x.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  studentsCopy.sort((a: Student, b: Student) => {
    if (sortBy === SortType.Name || sortBy === SortType.Surname) {
      if (order === 'asc') {
        return a[sortBy].localeCompare(b[sortBy]);
      }

      return b[sortBy].localeCompare(a[sortBy]);
    }

    if (sortBy === SortType.Age) {
      if (order === 'asc') {
        return a[sortBy] - b[sortBy];
      }

      return b[sortBy] - a[sortBy];
    }

    if (sortBy === SortType.Married) {
      if (order === 'asc') {
        if (b[sortBy] === a[sortBy]) {
          return 0;
        }

        if (b[sortBy] && b[sortBy] !== a[sortBy]) {
          return -1;
        }

        return 1;
      }

      if (a[sortBy] === b[sortBy]) {
        return 0;
      }

      if (a[sortBy] && a[sortBy] !== b[sortBy]) {
        return -1;
      }

      return 1;
    }

    if (sortBy === SortType.AverageGrade) {
      if (order === 'asc') {
        return averageGrade(a[sortBy]) - averageGrade(b[sortBy]);
      }

      return averageGrade(b[sortBy]) - averageGrade(a[sortBy]);
    }

    return 21;
  });

  return studentsCopy;
}
