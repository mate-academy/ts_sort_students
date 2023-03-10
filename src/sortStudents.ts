
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
  return [...students].sort((studentA, studentB) => {
    const direct = order === 'asc'
      ? 1
      : -1;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (studentA[sortBy]
          .localeCompare(studentB[sortBy])) * direct;

      case SortType.Age:
      case SortType.Married:
        return (Number(studentA[sortBy])
          - Number(studentB[sortBy])) * direct;

      case SortType.AverageGrade:
        return (calculateAverageGrade(studentA)
            - calculateAverageGrade(studentB)) * direct;
      default:
        return 0;
    }
  });
}
