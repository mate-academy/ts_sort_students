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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  function getAverageGrade(grades: number[]): number {
    return grades.reduce((sum, num) => sum + num, 0) / grades.length;
  }

  const orderBy = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyStudents.sort((studentA, studentB) => (
        orderBy
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy])
      ));
    case SortType.Age:
      return copyStudents.sort((studentA, studentB) => (
        orderBy
          ? studentA[sortBy] - studentB[sortBy]
          : studentB[sortBy] - studentA[sortBy]
      ));
    case SortType.Married:
      return copyStudents
        .filter((student) => student.married === true)
        .concat(copyStudents.filter((student) => student.married === false));
    case SortType.AverageGrade:
      return copyStudents.sort((a, b) => (
        orderBy
          ? getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy])
          : getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy])
      ));
    default:
      throw new Error('Arguments are incorrect!!!');
  }
}
