
export interface Student {
  name: string;
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

export function
sortStudents(students: Student[], sortBy: SortType, order: string): Student[] {
  let copy = [...students];

  switch (sortBy) {
    case SortType.Name:
      copy = (order === 'asc')
        ? copy.sort((a, b) => a.name.localeCompare(b.name))
        : copy.sort((a, b) => a.name.localeCompare(b.name));

      return copy;

    case SortType.Surname:
      copy = (order === 'asc')
        ? copy.sort((a, b) => a.surname.localeCompare(b.surname))
        : copy.sort((a, b) => b.surname.localeCompare(a.surname));

      return copy;

    case SortType.Age:
      copy = (order === 'asc')
        ? copy.sort((a, b) => a.age - b.age)
        : copy.sort((a, b) => b.age - a.age);

      return copy;

    case SortType.Married:
      copy = (order === 'asc')
        ? copy.sort((a, b) => Number(a.married) - Number(b.married))
        : copy.sort((a, b) => Number(b.married) - Number(a.married));

      return copy;

    case SortType.AverageGrade:
      copy = (order === 'asc')
        ? copy.sort((a, b) => (a.grades.reduce((sum, x) => sum + x)
        / a.grades.length)
        - (b.grades.reduce((sum, x) => sum + x) / b.grades.length))
        : copy.sort((a, b) => (b.grades.reduce((sum, x) => sum + x)
        / b.grades.length)
        - (a.grades.reduce((sum, x) => sum + x) / a.grades.length));

      return copy;

    default:
      return copy;
  }
}
