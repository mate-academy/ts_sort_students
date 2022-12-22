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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  const average = (grades: number[]): number => grades
    .reduce((x, y) => x + y) / grades.length;

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? copy.sort((a, b) => a.name.localeCompare(b.name))
        : copy.sort((a, b) => b.name.localeCompare(a.name));

    case SortType.Surname:
      return order === 'asc'
        ? copy.sort((a, b) => a.surname.localeCompare(b.surname))
        : copy.sort((a, b) => b.surname.localeCompare(a.surname));

    case SortType.Age:
      return order === 'asc'
        ? copy.sort((x, y) => x.age - y.age)
        : copy.sort((x, y) => y.age - x.age);

    case SortType.Married:
      return order === 'asc'
        ? copy.sort((x, y) => Number(x.married) - Number(y.married))
        : copy.sort((x, y) => Number(y.married) - Number(x.married));

    case SortType.AverageGrade:
      return order === 'asc'
        ? copy.sort((x, y) => average(x.grades) - average(y.grades))
        : copy.sort((x, y) => average(y.grades) - average(x.grades));

    default:
      return students;
  }
}
