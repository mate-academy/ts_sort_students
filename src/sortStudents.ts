
export interface Student {
  // describe Student interface
}

export enum SortType {
  // describe SortType enum
}

// create SortOrder type
export type SortOrder;


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

  function getAverage(x: number[]): number {
    return x.reduce((prev, grade) => prev + grade, 0)
    / x.length;
  }

  switch (sortBy) {
    case SortType.Age:
      if (order === 'asc') {
        studentsCopy.sort((a: Student, b: Student) => a[sortBy] - b[sortBy]);
      } else {
        studentsCopy.sort((a: Student, b: Student) => b[sortBy] - a[sortBy]);
      }
      break;

    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        studentsCopy
          .sort((a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]));
      } else {
        studentsCopy
          .sort((a: Student, b: Student) => b[sortBy].localeCompare(a[sortBy]));
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        studentsCopy.sort((a: Student, b: Student) => +a[sortBy] - +b[sortBy]);
      } else {
        studentsCopy.sort((a: Student, b: Student) => +b[sortBy] - +a[sortBy]);
      }
      break;

    case SortType.AverageGrade:
      if (sortBy === SortType.AverageGrade) {
        if (order === 'asc') {
          studentsCopy.sort((a: Student, b: Student) => {
            const averageGradesOfA: number
              = getAverage(a[sortBy]);

            const averageGradesOfB: number
              = getAverage(b[sortBy]);

            return averageGradesOfA - averageGradesOfB;
          });
        } else {
          studentsCopy.sort((a: Student, b: Student) => {
            const averageGradesOfA: number
              = getAverage(a[sortBy]);
            const averageGradesOfB: number
              = getAverage(b[sortBy]);

            return averageGradesOfB - averageGradesOfA;
          });
        }
      }
      break;

    default:
      break;
  }

  return studentsCopy;
}
