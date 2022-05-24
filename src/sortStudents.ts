
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function averageGrade(arrOfGrades: number[]): number {
  return arrOfGrades.reduce((sum: number, current: number) => sum + current, 0)
  / arrOfGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsSorted: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsSorted.sort((studentA: Student, studentB: Student) => {
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return studentsSorted.sort((studentA: Student, studentB: Student) => {
        return order === 'asc'
          ? +studentA[sortBy] - +studentB[sortBy]
          : +studentB[sortBy] - +studentA[sortBy];
      });

    case SortType.AverageGrade:
      return studentsSorted.sort((studentA: Student, studentB: Student) => {
        return order === 'asc'
          ? averageGrade(studentA[sortBy]) - averageGrade(studentB[sortBy])
          : averageGrade(studentB[sortBy]) - averageGrade(studentA[sortBy]);
      });

    default:
      return studentsSorted;
  }
}
