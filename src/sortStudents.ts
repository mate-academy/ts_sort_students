export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];
  let direction: number;

  if (order === 'asc') {
    direction = 1;
  } else {
    direction = -1;
  }

  function sortNumbers(
    a: Student,
    b: Student,
    getValue: (student: Student) => number,
    multiplier: number,
  ): number {
    return (getValue(a) - getValue(b)) * multiplier;
  }

  function sortWords(
    a: Student,
    b: Student,
    getValue: (student: Student) => string,
    multiplier: number,
  ): number {
    return getValue(a).localeCompare(getValue(b)) * multiplier;
  }

  switch (sortBy) {
    case SortType.Name:
      copy.sort((a, b) => sortWords(
        a, b, (student) => student.name, direction,
      ));
      break;

    case SortType.Surname:
      copy.sort((a, b) => sortWords(
        a, b, (student) => student.surname, direction,
      ));
      break;

    case SortType.Age:
      copy.sort((a, b) => sortNumbers(
        a, b, (student) => student.age, direction,
      ));
      break;

    case SortType.Married:
      copy.sort((a, b) => sortNumbers(
        a, b, (student) => Number(student.married), direction,
      ));
      break;

    case SortType.AverageGrade:
      copy.sort((a, b) => sortNumbers(
        a,
        b,
        (student) => student.grades.reduce((sum, grade) => sum + grade, 0)
            / student.grades.length,
        direction,
      ));
      break;

    default:
      break;
  }

  return copy;
}
