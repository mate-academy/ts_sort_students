
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
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc'|'desc';

function getAverageValue(value: number[]): number {
  return value.reduce((a, b) => a + b) / value.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  function sortByString(property: 'name'|'surname'): Student[] {
    return order === 'asc'
      ? studentsCopy.sort((a, b) => a[property].localeCompare(b[property]))
      : studentsCopy.sort((a, b) => b[property].localeCompare(a[property]));
  }

  function sortByNumber(property: 'age'|'married'): Student[] {
    return order === 'asc'
      ? studentsCopy.sort((a, b) => Number(a[property]) - Number(b[property]))
      : studentsCopy.sort((a, b) => Number(b[property]) - Number(a[property]));
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortByString(sortBy);

    case SortType.Age:
    case SortType.Married:
      return sortByNumber(sortBy);

    default:
      return order === 'asc'
        ? studentsCopy
          .sort((a, b) => getAverageValue(a.grades) - getAverageValue(b.grades))
        : studentsCopy
          .sort(
            (a, b) => getAverageValue(b.grades) - getAverageValue(a.grades),
          );
  }
}
