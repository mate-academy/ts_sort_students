
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function compareStrings(a: string, b: string, order: SortOrder): number {
  return order === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
}

function compareNumbers(a: number, b: number, order: SortOrder): number {
  return order === 'asc' ? a - b : b - a;
}

function compareBooleans(a: boolean, b: boolean, order: SortOrder): number {
  if (a === b) {
    return 0;
  }

  switch (order) {
    case 'asc':
      return a ? 1 : -1;
    case 'desc':
      return a ? -1 : 1;
    default:
      return 0;
  }
}

function calculateAverage(array: number[]): number {
  return array.length
    ? array.reduce((prev, curr) => prev + curr) / array.length
    : 0;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const studentsCopy = students.map((student) => ({ ...student }));

  studentsCopy.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
        return compareStrings(a.name, b.name, order);
      case SortType.Surname:
        return compareStrings(a.surname, b.surname, order);
      case SortType.Age:
        return compareNumbers(a.age, b.age, order);
      case SortType.Married:
        return compareBooleans(a.married, b.married, order);
      case SortType.AverageGrade:
        return compareNumbers(
          calculateAverage(a.grades),
          calculateAverage(b.grades),
          order,
        );
      default:
        return 0;
    }
  });

  return studentsCopy;
}
