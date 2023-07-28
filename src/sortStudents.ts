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

function getAvgGrade(studentsGrades: number[]): number {
  return studentsGrades.reduce(
    (sum: number, grade: number) => sum + grade, 0,
  ) / studentsGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents.sort((studentA: Student, studentB: Student) => (
        order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy])
      ));
      break;
    case SortType.Age:
    case SortType.Married:
      sortedStudents.sort((studentA: Student, studentB: Student) => (
        order === 'asc'
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy])
      ));
      break;
    case SortType.AverageGrade:
      sortedStudents.sort((studentA: Student, studentB: Student) => (
        order === 'asc'
          ? getAvgGrade(studentA[sortBy]) - getAvgGrade(studentB[sortBy])
          : getAvgGrade(studentB[sortBy]) - getAvgGrade(studentA[sortBy])
      ));
      break;
    default:
      break;
  }

  return sortedStudents;
}
