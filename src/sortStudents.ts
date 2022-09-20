
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
  const studentsCopy = [...students];
  const getAverageGrade = (grades: number[]): number => grades
    .reduce((sum, grade) => sum + grade, 0) / grades.length;

  switch (sortBy) {
    case SortType.AverageGrade:
      return (order === 'desc')
        ? studentsCopy.sort(
          (a, b) => getAverageGrade(b.grades) - getAverageGrade(a.grades),
        )
        : studentsCopy.sort(
          (a, b) => getAverageGrade(a.grades) - getAverageGrade(b.grades),
        );

    case SortType.Surname:
    case SortType.Name:
      return (order === 'desc')
        ? studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]))
        : studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    case SortType.Married:
    case SortType.Age:
      return (order === 'desc')
        ? studentsCopy.sort((a, b) => +b[sortBy] - +a[sortBy])
        : studentsCopy.sort((a, b) => +a[sortBy] - +b[sortBy]);

    default:
      return studentsCopy;
  }
}
