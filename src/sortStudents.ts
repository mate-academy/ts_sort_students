
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

export type SortOrder = 'asc' | 'desc';

function isValuesEqual(arr: Student[], sortType: SortType): boolean {
  for (let i = 0; i < arr.length - 1; i += 1) {
    let currenValue = arr[i][sortType];
    let nextValue = arr[i + 1][sortType];

    if (Array.isArray(currenValue) && Array.isArray(nextValue)) {
      currenValue = currenValue.reduce(
        (sum: number, current: number): number => {
          return sum + current;
        }, 0,
      );

      nextValue = nextValue.reduce(
        (sum: number, current: number): number => {
          return sum + current;
        }, 0,
      );
    }

    if (currenValue !== nextValue) {
      return false;
    }
  }

  return true;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudets: Student[] = [...students];

  switch (sortBy) {
    case SortType.Age: {
      const isEqual = isValuesEqual(students, sortBy);

      if (isEqual) {
        return copyStudets;
      }

      if (order === 'asc') {
        return copyStudets.sort(
          (a: Student, b: Student) => {
            return a[SortType.Age] - b[SortType.Age];
          },
        );
      }

      if (order === 'desc') {
        return copyStudets.sort(
          (a: Student, b: Student) => {
            return b[SortType.Age] - a[SortType.Age];
          },
        );
      }

      break;
    }

    case SortType.Married: {
      const isEqual = isValuesEqual(students, sortBy);

      if (isEqual) {
        return copyStudets;
      }

      if (order === 'asc') {
        return copyStudets.sort(
          (a: Student, b: Student) => {
            return Number(a[SortType.Married]) - Number(b[SortType.Married]);
          },
        );
      }

      if (order === 'desc') {
        return copyStudets.sort(
          (a: Student, b: Student) => {
            return Number(b[SortType.Married]) - Number(a[SortType.Married]);
          },
        );
      }

      break;
    }

    case SortType.AverageGrade: {
      const isEqual = isValuesEqual(students, sortBy);

      if (isEqual) {
        return copyStudets;
      }

      if (order === 'asc') {
        return copyStudets.sort(
          (a: Student, b: Student): number => {
            const currenValue = a[sortBy].reduce(
              (sum: number, current: number): number => {
                return sum + current;
              }, 0,
            ) / a[sortBy].length;

            const nextValue = b[sortBy].reduce(
              (sum: number, current: number): number => {
                return sum + current;
              }, 0,
            ) / b[sortBy].length;

            return currenValue - nextValue;
          },
        );
      }

      if (order === 'desc') {
        return copyStudets.sort(
          (a: Student, b: Student): number => {
            const currenValue = a[sortBy].reduce(
              (sum: number, current: number): number => {
                return sum + current;
              }, 0,
            ) / a[sortBy].length;

            const nextValue = b[sortBy].reduce(
              (sum: number, current: number): number => {
                return sum + current;
              }, 0,
            ) / b[sortBy].length;

            return nextValue - currenValue;
          },
        );
      }

      break;
    }

    default: {
      const isEqual = isValuesEqual(students, sortBy);

      if (isEqual) {
        return copyStudets;
      }

      copyStudets.sort(
        (a: Student, b: Student) => {
          return a[sortBy].localeCompare(b[sortBy]);
        },
      );

      if (order === 'asc') {
        return copyStudets;
      }

      if (order === 'desc') {
        return copyStudets.reverse();
      } }
  }

  return copyStudets;
}
