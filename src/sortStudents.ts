/* eslint-disable implicit-arrow-linebreak */
interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  function midMark(student: Student): number {
    const mark: number = student.grades
      .reduce((accum: number, grade: number) => accum + grade, 0)
      / student.grades.length;

    return mark;
  }

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? studentsCopy.sort((first: Student, second: Student) =>
          first.name.localeCompare(second.name))
        : studentsCopy.sort((first: Student, second: Student) =>
          second.name.localeCompare(first.name));

    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy.sort((first: Student, second: Student) =>
          first.surname.localeCompare(second.surname))
        : studentsCopy.sort((first: Student, second: Student) =>
          second.surname.localeCompare(first.surname));

    case SortType.Age:
      return order === 'asc'
        ? studentsCopy.sort((first: Student, second: Student) =>
          first.age - second.age)
        : studentsCopy.sort((first: Student, second: Student) =>
          second.age - first.age);

    case SortType.Married:
      return order === 'asc'
        ? studentsCopy.sort((first: Student, second: Student) =>
          +first.married - +second.married)
        : studentsCopy.sort((first: Student, second: Student) =>
          +second.married - +first.married);

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy.sort((first: Student, second: Student) =>
          midMark(first) - midMark(second))
        : studentsCopy.sort((first: Student, second: Student) =>
          midMark(second) - midMark(first));

    default: break;
  }

  return studentsCopy;
}
