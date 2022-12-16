
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
  AverageGrade = 'avgGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: Student): number {
  return student.grades
    .reduce((total, grade) => total + grade) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | string {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case (SortType.Age):
    case (SortType.Married):
      return (order === 'asc')
        ? studentsCopy.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : studentsCopy.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

    case (SortType.AverageGrade):
      return (order === 'asc')
        ? studentsCopy.sort((a, b) => getAverageGrade(a) - getAverageGrade(b))
        : studentsCopy.sort((a, b) => getAverageGrade(b) - getAverageGrade(a));
    default:
      throw new Error('Some error');
  }
}
