
export interface Student {
  name: string
  surname: string
  age: number
  married: boolean
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function calculateAverage({ grades }: Student): number {
  return grades.reduce((total, grade) => total + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const orderType: number = order === 'asc'
    ? 1
    : -1;

  return [...students].sort((student1, student2): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return orderType * student1[sortBy].localeCompare(student2[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return orderType
          * (Number(student1[sortBy]) - Number(student2[sortBy]));

      case SortType.AverageGrade:
        return orderType
          * (calculateAverage(student1) - calculateAverage(student2));

      default:
        throw new Error('Invalid sort type.');
    }
  });
}
