
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

function getAvarage(studentGrades: number[]): number {
  return studentGrades.reduce((sum: number, curr: number) => (
    sum + curr
  ), 0) / studentGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((prevStudent: Student, currStudent: Student) => (
        order === 'asc'
          ? prevStudent[sortBy].localeCompare(currStudent[sortBy])
          : currStudent[sortBy].localeCompare(prevStudent[sortBy])
      ));

      return studentsCopy;

    case SortType.Age:
    case SortType.Married:
      studentsCopy.sort((prevStudent: Student, currStudent: Student) => (
        order === 'asc'
          ? Number(prevStudent[sortBy]) - Number(currStudent[sortBy])
          : Number(currStudent[sortBy]) - Number(prevStudent[sortBy])
      ));

      return studentsCopy;

    case SortType.AverageGrade:
      studentsCopy.sort((prevStudent: Student, currStudent: Student) => (
        order === 'asc'
          ? getAvarage(prevStudent[sortBy]) - getAvarage(currStudent[sortBy])
          : getAvarage(currStudent[sortBy]) - getAvarage(prevStudent[sortBy])
      ));

      return studentsCopy;

    default:
      return studentsCopy;
  }
}
