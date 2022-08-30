
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

function calculateAverageAge(nums): number {
  const result = nums.reduce((prev, current) => prev + current);

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
      if (order === 'asc') {
        return copy.sort((a, b) => a.name.localeCompare(b.name));
      }

      return copy.sort((a, b) => b.name.localeCompare(a.name));

    case SortType.Surname:
      if (order === 'asc') {
        return copy.sort((a, b) => a.surname.localeCompare(b.surname));
      }

      return copy.sort((a, b) => b.surname.localeCompare(a.surname));

    case SortType.Age:
      if (order === 'asc') {
        return copy.sort((a, b) => a.age - b.age);
      }

      return copy.sort((a, b) => b.age - a.age);

    case SortType.Married:
      if (order === 'asc') {
        return copy.sort((a, b) => +a.married - +b.married);
      }

      return copy.sort((a, b) => +b.married - +a.married);

    case SortType.AverageGrade:
      if (order === 'asc') {
        return copy
          .sort(
            (
              a,
              b,
            ) => calculateAverageAge(a.grades) - calculateAverageAge(b.grades),
          );
      }

      return copy
        .sort(
          (
            a,
            b,
          ) => calculateAverageAge(b.grades) - calculateAverageAge(a.grades),
        );

    default:
      throw new Error('Sorry, wrong arguments');
  }
}
