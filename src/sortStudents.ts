/* eslint-disable default-case */
/* eslint-disable no-fallthrough */

export function getAverageValue(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:

    case SortType.Surname:
    {
      if (order === 'asc') {
        return studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      }

      return studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    }

    case SortType.Age: {
      if (order === 'asc') {
        return studentsCopy.sort((a, b) => a.age - b.age);
      }

      return studentsCopy.sort((a, b) => b.age - a.age);
    }

    case SortType.Married: {
      if (order === 'asc') {
        return studentsCopy.sort((a, b) => {
          if (a.married) {
            return 1;
          }

          if (b.married) {
            return -1;
          }

          return 0;
        });
      }

      return studentsCopy.sort((a, b) => {
        if (b.married) {
          return 1;
        }

        if (a.married) {
          return -1;
        }

        return 0;
      });
    }

    case SortType.AverageGrade: {
      if (order === 'asc') {
        return studentsCopy.sort(
          (a, b) => getAverageValue(a.grades) - getAverageValue(b.grades),
        );
      }

      return studentsCopy.sort(
        (a, b) => getAverageValue(b.grades) - getAverageValue(a.grades),
      );
    }
  }

  return studentsCopy; // without it eslint can't live
}
