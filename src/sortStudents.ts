
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
  const result: Student[] = [...students];

  result.sort((studentA, studentB) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc')
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return (order === 'asc')
          ? +studentA[sortBy] - +studentB[sortBy]
          : +studentB[sortBy] - +studentA[sortBy];

      case SortType.AverageGrade:
        return (order === 'asc')
          ? studentA[sortBy].reduce((sum, current) => sum + current, 0)
            / studentA[sortBy].length
            - studentB[sortBy].reduce((sum, current) => sum + current, 0)
            / studentB[sortBy].length
          : studentB[sortBy].reduce((sum, current) => sum + current, 0)
            / studentB[sortBy].length
            - studentA[sortBy].reduce((sum, current) => sum + current, 0)
            / studentA[sortBy].length;

      default:
        throw new Error('Error');
    }
  });

  return result;
}
