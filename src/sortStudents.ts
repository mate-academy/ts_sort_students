
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function calculateAverageGrade({ grades }: Student): number {
  return grades.reduce((aver, grade) => aver + grade, 0) / grades.length;
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
): Student[] {
  return [...students].sort((prevStudent, nextStudent) => {
    const direct = order === 'asc'
      ? 1
      : -1;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (prevStudent[sortBy]
          .localeCompare(nextStudent[sortBy])) * direct;

      case SortType.Age:
      case SortType.Married:
        return (Number(prevStudent[sortBy])
          - Number(nextStudent[sortBy])) * direct;

      case SortType.AverageGrade:
        return (calculateAverageGrade(prevStudent)
            - calculateAverageGrade(nextStudent)) * direct;
      default:
        throw new Error('Something');
    }
  });
}
