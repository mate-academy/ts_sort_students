
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  average?: number;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

function sortByString(
  students: Student[], type: string, order: SortOrder,
): Student[] {
  if (order === 'asc') {
    return students.sort((a, b) => a[type].localeCompare(b[type]));
  }

  return students.sort((a, b) => b[type].localeCompare(a[type]));
}

function sortByType(
  students: Student[], type: string, order: SortOrder,
): Student[] {
  if (order === 'asc') {
    return students.sort((a, b) => a[type] - b[type]);
  }

  return students.sort((a, b) => b[type] - a[type]);
}

function averageCallback(firstValue: number[], secondValue: number[]): number {
  const firstNumber: number = firstValue
    .reduce((prev, total) => prev + total)
    / firstValue.length;

  const secondNumber: number = secondValue
    .reduce((prev, total) => prev + total)
    / secondValue.length;

  return firstNumber - secondNumber;
}

function sortByAverage(students: Student[], order: SortOrder): Student[] {
  if (order === 'asc') {
    return students.sort((a, b) => averageCallback(a.grades, b.grades));
  }

  return students.sort((a, b) => averageCallback(b.grades, a.grades));
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      sortedStudents = sortByString(sortedStudents, SortType.Name, order);
      break;

    case SortType.Surname:
      sortedStudents = sortByString(sortedStudents, SortType.Surname, order);
      break;

    case SortType.Age:
      sortedStudents = sortByType(sortedStudents, SortType.Age, order);
      break;

    case SortType.Married:
      sortedStudents = sortByType(sortedStudents, SortType.Married, order);
      break;

    case SortType.AverageGrade:
      sortedStudents = sortByAverage(sortedStudents, order);
      break;

    default:
      break;
  }

  return sortedStudents;
}
