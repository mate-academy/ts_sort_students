export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];

  averageGrade: number;
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

export function average(person: Student): number {
  const resultAverage: number = person.grades.reduce((a, b) => a + b)
  / person.grades.length;

  return resultAverage;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

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
        ? copyStudents.sort((a, b) => average(a) - average(b))
        : copyStudents.sort((a, b) => average(b) - average(a));

    default:
      return copyStudents;
  }
}
