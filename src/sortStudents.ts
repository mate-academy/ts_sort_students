
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  sortedStudents.sort((prev: Student, curr: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return prev[sortBy].localeCompare(curr[sortBy]);

      case SortType.Age:
        return order === 'asc'
          ? prev[sortBy] - curr[sortBy]
          : curr[sortBy] - prev[sortBy];

      case SortType.Married:
        return order === 'asc'
          ? Number(prev[sortBy]) - Number(curr[sortBy])
          : Number(curr[sortBy]) - Number(prev[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? prev[sortBy]
            .reduce((a, b) => a + b) / prev[sortBy].length - curr[sortBy]
            .reduce((a, b) => a + b) / curr[sortBy].length
          : curr[sortBy]
            .reduce((a, b) => a + b) / curr[sortBy].length - prev[sortBy]
            .reduce((a, b) => a + b) / prev[sortBy].length;

      default:
        return 0;
    }
  });

  return sortedStudents;
}
