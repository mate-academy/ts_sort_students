
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: Student): number {
  return student.grades.reduce((i, x) => i + x, 0) / student.grades.length;
}

export function sortStudents(
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
): object[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => a.name.localeCompare(b.name))
        : copyStudents.sort((a, b) => b.name.localeCompare(a.name));

    case SortType.Surname:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => a.surname.localeCompare(b.surname))
        : copyStudents.sort((a, b) => b.surname.localeCompare(a.surname));

    case SortType.Age:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => a.age - b.age)
        : copyStudents.sort((a, b) => b.age - a.age);

    case SortType.Married:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => +a.married - +b.married)
        : copyStudents.sort((a, b) => +b.married - +a.married);

    case SortType.AverageGrade:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => getAverageGrade(a) - getAverageGrade(b))
        : copyStudents.sort((a, b) => getAverageGrade(b) - getAverageGrade(a));

    default:
      return copyStudents;
  }
}
