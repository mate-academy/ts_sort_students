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
  AverageGrade = 'average grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(studentGrades: number[]): number {
  return studentGrades
    .reduce((sum, grade) => (sum + grade)) / studentGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];
  const orderSort = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents.sort((studentA, studentB) => studentA[sortBy]
        .localeCompare(studentB[sortBy]) * orderSort);
      break;

    case SortType.Age:
    case SortType.Married:
      sortedStudents
        .sort((studentA, studentB) => (Number(studentA[sortBy])
          - Number(studentB[sortBy])) * orderSort);
      break;

    case SortType.AverageGrade:
      sortedStudents
        .sort((studentA, studentB) => (getAverageGrade(studentA.grades)
          - getAverageGrade(studentB.grades)) * orderSort);
      break;

    default:
      break;
  }

  return sortedStudents;
}
