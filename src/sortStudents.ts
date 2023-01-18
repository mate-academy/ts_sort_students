
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  function getAverageGrade(student: Student): number {
    return student.grades.reduce((acc, curr) => acc + curr, 0)
      / student.grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? studentsCopy.sort((a, b) => +a[sortBy] - +b[sortBy])
        : studentsCopy.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return (order === 'asc')
        ? studentsCopy.sort((a, b) => getAverageGrade(a) - getAverageGrade(b))
        : studentsCopy.sort((a, b) => getAverageGrade(b) - getAverageGrade(a));

    default:
      throw new Error('SortType is not valid');
  }
}
