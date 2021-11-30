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

const getAverageGrade = (arr: number[]): number => arr.reduce(
  (a, b) => a + b,
) / arr.length;

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const newStudentsArr = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return newStudentsArr.sort((a, b) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])));

    case SortType.Age:
      return newStudentsArr.sort((a, b) => (order === 'asc'
        ? a[sortBy] - b[sortBy]
        : b[sortBy] - a[sortBy]));

    case SortType.Married:
      return newStudentsArr.sort((a, b) => {
        const valueA = a[sortBy] ? 0 : 1;
        const valueB = b[sortBy] ? 0 : 1;

        return valueA - valueB;
      });

    case SortType.AverageGrade:
      return newStudentsArr.sort((a, b) => {
        const valueA = getAverageGrade(a[sortBy]);
        const valueB = getAverageGrade(b[sortBy]);

        return order === 'asc'
          ? valueA - valueB
          : valueB - valueA;
      });

    default:
      return newStudentsArr;
  }
}
