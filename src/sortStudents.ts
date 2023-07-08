
export interface Student {
  name: 'string',
  surname: 'string',
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  const copyOfStudents = [...students];
  const getAverage = (arr: number[]): number => {
    return arr.reduce((a, b) => a + b) / arr.length;
  };

  switch (sortBy) {
    case SortType.Name:
      return copyOfStudents.sort((a, b) => a.name.localeCompare(b.name));
    case SortType.Surname:
      return copyOfStudents.sort((a, b) => a.surname.localeCompare(b.surname));
    case SortType.Age:
      return copyOfStudents.sort((a, b) => (order === 'asc'
        ? a.age - b.age
        : b.age - a.age
      ));
    case SortType.Married:
      return copyOfStudents.sort((a, b) => (order === 'asc'
        ? Number(a.married) - Number(b.married)
        : Number(b.married) - Number(a.married)
      ));
    case SortType.AverageGrade:
      return copyOfStudents.sort((a, b) => (
        order === 'asc'
          ? getAverage(a.grades) - getAverage(b.grades)
          : getAverage(b.grades) - getAverage(a.grades)
      ));
    default: return copyOfStudents;
  }
}
