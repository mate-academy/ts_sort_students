
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
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

export function averageGrade({ grades }: Student): number {
  return grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((prevStudent, nextStudent) => {
    const sortOrder = order === 'asc' ? 1 : -1;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return sortOrder * prevStudent[sortBy]
          .localeCompare(nextStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return sortOrder * (Number(prevStudent[sortBy])
        - Number(nextStudent[sortBy]));

      case SortType.AverageGrade:
        return sortOrder * (averageGrade(prevStudent)
        - averageGrade(nextStudent));

      default:
        throw new Error(`Unknown Sort type: ${sortBy}`);
    }
  });
}
