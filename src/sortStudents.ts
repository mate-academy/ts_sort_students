
export interface Student {
  name: string,
  surname: 'string',
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];
  const ascOrder = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      return ascOrder
        ? [...students].sort((a, b) => a.name.localeCompare(b.name))
        : [...students].sort((a, b) => b.name.localeCompare(a.name));

    case SortType.Surname:
      return ascOrder
        ? [...students]
          .sort((a, b) => a.surname.localeCompare(b.surname))
        : [...students]
          .sort((a, b) => b.surname.localeCompare(a.surname));

    case SortType.Age:
      return ascOrder
        ? [...students].sort((a, b) => a.age - b.age)
        : [...students].sort((a, b) => b.age - a.age);

    case SortType.Married:
      return ascOrder
        ? [...students].sort((a, b) => +a.married - +b.married)
        : [...students].sort((a, b) => +b.married - +a.married);

    case SortType.AverageGrade:
      return !ascOrder
        ? [...students]
          .sort((a, b) => b.grades
            .reduce((sum, x) => sum + x) / b.grades.length - a.grades
            .reduce((sum, x) => sum + x) / a.grades.length)
        : [...students]
          .sort((a, b) => a.grades
            .reduce((sum, x) => sum + x) / a.grades.length - b.grades
            .reduce((sum, x) => sum + x) / b.grades.length);
    default:
      return studentsCopy;
  }
}
