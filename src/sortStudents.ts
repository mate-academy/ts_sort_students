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
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function calculateAverageGrade(array: number[]): number {
  return array.reduce(
    (acc: number, current: number) => acc + current, 0,
  ) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  copyStudents.sort((a, b) => {
    const averageGradeA = calculateAverageGrade(a.grades);
    const averageGradeB = calculateAverageGrade(b.grades);

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);

      case SortType.Married:
      case SortType.Age:
        if (order === 'asc') {
          return +a[sortBy] - +b[sortBy];
        }

        return +b[sortBy] - +a[sortBy];

      default:
        if (order === 'asc') {
          return averageGradeA - averageGradeB;
        }

        return averageGradeB - averageGradeA;
    }
  });

  return copyStudents;
}
