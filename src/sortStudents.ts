export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'merried',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverage(arr: number[]): number {
  return arr.reduce((a: number, b: number) => a + b) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const arr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Age:
      return arr.sort((a: Student, b: Student) => (order === 'asc'
        ? a.age - b.age
        : b.age - a.age));

    case SortType.Name:
      return arr.sort((a: Student, b: Student) => (order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)));

    case SortType.Surname:
      return arr.sort((a: Student, b: Student) => (order === 'asc'
        ? a.surname.localeCompare(b.surname)
        : b.surname.localeCompare(a.surname)));

    case SortType.Married:
      return arr.sort((a: Student, b: Student) => (order === 'asc'
        ? Number(a.married) - Number(b.married)
        : Number(b.married) - Number(a.married)));
    case SortType.AverageGrade:
      return arr.sort((a: Student, b: Student) => (order === 'asc'
        ? getAverage(a.grades) - getAverage(b.grades)
        : getAverage(b.grades) - getAverage(a.grades)));
    default: return arr;
  }
}
