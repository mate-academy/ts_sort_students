export interface Student {
  // describe Student interface
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
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

const averageGrade = (grades: number[]): number => {
  return grades.reduce((acc, currVal) => acc + currVal, 0)
    / (grades.length || 1);
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'desc') {
        return copyStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
      }

      return copyStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    case SortType.Married:
    case SortType.Age:

      // eslint-disable-next-line no-case-declarations
      const result = copyStudents
        .sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

      return order === 'desc'
        ? result
        : result.reverse();

    case SortType.AverageGrade:
      if (order === 'desc') {
        return copyStudents.sort(
          (a, b) => averageGrade(b.grades) - averageGrade(a.grades),
        );
      }

      return copyStudents
        .sort((a, b) => averageGrade(a.grades) - averageGrade(b.grades));

    default:
      throw new Error('Sort type not supported');
  }
}
