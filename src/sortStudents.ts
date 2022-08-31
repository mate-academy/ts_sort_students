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

export type SortOrder = 'asc' | 'desc';

const getAverage = (grades : number[]) : number => grades
  .reduce((sum, grade) => sum + grade, 0) / grades.length;

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  return [...students].sort((studentA, studentB) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +studentA[sortBy] - +studentB[sortBy]
          : +studentB[sortBy] - +studentA[sortBy];

      case SortType.AverageGrade: {
        return order === 'asc'
          ? getAverage(studentA[sortBy]) - getAverage(studentB[sortBy])
          : getAverage(studentB[sortBy]) - getAverage(studentA[sortBy]);
      }

      default:
        return 0;
    }
  });
}
