
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
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageValue(value: number[]): number {
  return value.reduce((a, b) => a + b) / value.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? [...students].sort((a, b) => a.name.localeCompare(b.name))
        : [...students].sort((a, b) => b.name.localeCompare(a.name));

    case SortType.Surname:
      return order === 'asc'
        ? [...students].sort((a, b) => a.surname.localeCompare(b.surname))
        : [...students].sort((a, b) => b.surname.localeCompare(a.surname));

    case SortType.Age:
      return order === 'asc'
        ? [...students].sort((a, b) => a.age - b.age)
        : [...students].sort((a, b) => b.age - a.age);

    case SortType.Married:
      return order === 'asc'
        ? [...students].sort((a, b) => Number(a.married) - Number(b.married))
        : [...students].sort((a, b) => Number(b.married) - Number(a.married));

    default:
      return order === 'asc'
        ? [...students]
          .sort((a, b) => getAverageValue(a.grades) - getAverageValue(b.grades))
        : [...students]
          .sort(
            (a, b) => getAverageValue(b.grades) - getAverageValue(a.grades),
          );
  }
}
