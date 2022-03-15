export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number [],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'average grade'
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: Student): number {
  return student.grades.reduce(
    (accumulator: number, grade: number) => accumulator + grade, 0,
  ) / student.grades.length;
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
      return order === 'asc'
        ? studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
      return order === 'asc'
        ? studentsCopy.sort((a, b) => a.age - b.age)
        : studentsCopy.sort((a, b) => b.age - a.age);

    case SortType.Married:
      return order === 'asc'
        ? studentsCopy.sort((a, b) => +a.married - +b.married)
        : studentsCopy.sort((a, b) => +b.married - +a.married);

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy.sort((a, b) => getAverageGrade(a) - getAverageGrade(b))
        : studentsCopy.sort((a, b) => getAverageGrade(b) - getAverageGrade(a));

    default:
      return studentsCopy;
  }
}
