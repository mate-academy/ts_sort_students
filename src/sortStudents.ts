
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

function calculateAverageAge(nums: number[]): number {
  const result = nums.reduce((prev: number, current: number) => prev + current);

  return result / nums.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  switch (sortBy) {
    case SortType.Name:
      return copy.sort((a, b) => (order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
      ));

    case SortType.Surname:
      return copy.sort((a, b) => (order === 'asc'
        ? a.surname.localeCompare(b.surname)
        : b.surname.localeCompare(a.surname)
      ));

    case SortType.Age:
      return copy.sort((a, b) => (order === 'asc'
        ? a.age - b.age
        : b.age - a.age
      ));

    case SortType.Married:
      return copy.sort((a, b) => (order === 'asc'
        ? +a.married - +b.married
        : +b.married - +a.married
      ));

    case SortType.AverageGrade:
      return copy.sort((a, b) => (order === 'asc'
        ? calculateAverageAge(a.grades) - calculateAverageAge(b.grades)
        : calculateAverageAge(b.grades) - calculateAverageAge(a.grades)
      ));

    default:
      throw new Error('Sorry, wrong arguments');
  }
}
