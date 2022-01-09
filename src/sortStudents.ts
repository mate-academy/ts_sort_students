
export interface Student {
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

export enum SortOrder {
  Ascending = 'asc',
  Descending = 'des',
}

function sortStrings(
  sortBy: 'name' | 'surname',
  order: SortOrder,
): (a: Student, b: Student) => number {
  return order === SortOrder.Ascending
    ? (a: Student, b: Student): number => a[sortBy].localeCompare(b[sortBy])
    : (a: Student, b: Student): number => b[sortBy].localeCompare(a[sortBy]);
}

function toNumber(value: number | boolean | number[]): number {
  switch (typeof value) {
    case 'number':
      return value;

    case 'boolean':
      return Number(value);

    default:
      return value
        .reduce((total, num) => total + num, 0) / value.length;
  }
}

function sortNumbers(
  sortBy: 'age' | 'married' | 'grades',
  order: SortOrder,
): (a: Student, b: Student) => number {
  return order === SortOrder.Ascending
    ? (a: Student, b: Student): number => (
      toNumber(a[sortBy]) - toNumber(b[sortBy])
    )
    : (a: Student, b: Student): number => (
      toNumber(b[sortBy]) - toNumber(a[sortBy])
    );
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = JSON.parse(JSON.stringify(students));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort(sortStrings(sortBy, order));

    case SortType.Age:
    case SortType.Married:
    case SortType.AverageGrade:
      return studentsCopy.sort(sortNumbers(sortBy, order));

    default:
      throw new Error('Enter valid sort type');
  }
}
