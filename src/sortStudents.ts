
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

function calculateAverageGrade({ grades }: Student): number {
  return grades.reduce((average, current) => (
    average + current)) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const orderCondition = (order === 'asc' ? 1 : -1);

  return [...students].sort((studentA, studentB): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return studentA[sortBy].localeCompare(studentB[sortBy])
          * orderCondition;

      case SortType.Age:
      case SortType.Married:
        return (+(studentA[sortBy]) - +(studentB[sortBy]))
          * orderCondition;

      case SortType.AverageGrade:
        return (
          calculateAverageGrade(studentA) - calculateAverageGrade(studentB)
        )
          * orderCondition;

      default:
        throw new Error('Sort type is invalid');
    }
  });
}
