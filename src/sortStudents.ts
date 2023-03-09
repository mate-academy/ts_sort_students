
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

export function averageGrade({ grades }: Student): number {
  return grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const trueOrFalse = order === 'asc' ? 1 : -1;

  return [...students].sort((prevStudent: Student, nextStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return trueOrFalse
          * (prevStudent[sortBy].localeCompare(nextStudent[sortBy]));

      case SortType.Age:
      case SortType.Married:
        return trueOrFalse
          * (Number(prevStudent[sortBy]) - Number(nextStudent[sortBy]));

      case SortType.AverageGrade:
        return trueOrFalse
          * (averageGrade(prevStudent) - averageGrade(nextStudent));

      default:
        throw new Error(`Error type: ${sortBy}`);
    }
  });
}
