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

function getAverageGrade(grades: number[]): number {
  const sumOfGrades: number = grades.reduce(
    (sum: number, current: number) => sum + current,
  );

  return sumOfGrades / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((studentA: Student, studentB: Student): number => {
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      copyStudents.sort((studentA: Student, studentB: Student): number => {
        return order === 'asc'
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      copyStudents.sort((studentA: Student, studentB: Student): number => {
        return order === 'asc'
          ? getAverageGrade(studentA[sortBy])
            - getAverageGrade(studentB[sortBy])
          : getAverageGrade(studentB[sortBy])
            - getAverageGrade(studentA[sortBy]);
      });
      break;

    default:
      throw new Error('Unknown sort type');
  }

  return copyStudents;
}
