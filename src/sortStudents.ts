
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

function getAverageGrade(grades: number[]):number {
  const value = grades.reduce(
    (sum: number, current: number): number => {
      return sum + current;
    }, 0,
  ) / grades.length;

  return value;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudets: Student[] = [...students];

  switch (sortBy) {
    case SortType.Age: {
      return copyStudets.sort(
        (a: Student, b: Student) => ({
          asc: a[SortType.Age] - b[SortType.Age],
          desc: b[SortType.Age] - a[SortType.Age],
        })[order],
      );
    }

    case SortType.Married: {
      return copyStudets.sort(
        (a: Student, b: Student) => ({
          asc: Number(a[SortType.Married]) - Number(b[SortType.Married]),
          desc: Number(b[SortType.Married]) - Number(a[SortType.Married]),
        })[order],
      );
    }

    case SortType.AverageGrade: {
      return copyStudets.sort(
        (a: Student, b: Student) => {
          const currenValue = getAverageGrade(a[sortBy]);

          const nextValue = getAverageGrade(b[sortBy]);

          return {
            asc: currenValue - nextValue,
            desc: nextValue - currenValue,
          }[order];
        },
      );
    }

    default: {
      copyStudets.sort(
        (a: Student, b: Student) => ({
          asc: a[sortBy].localeCompare(b[sortBy]),
          desc: b[sortBy].localeCompare(a[sortBy]),
        })[order],
      );
    }
  }

  return copyStudets;
}
