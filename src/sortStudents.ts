export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: [],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  function averageValue(person: Student): number {
    return person.grades.reduce((sum, item) => sum + item)
      / person.grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => a
          .name.localeCompare(b.name))

        : copyStudents.sort((a, b) => a
          .name.localeCompare(b.name));

    case SortType.Surname:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => a
          .surname.localeCompare(b.surname))

        : copyStudents.sort((a, b) => a
          .surname.localeCompare(b.surname));

    case SortType.Age:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => a
          .age - b.age)

        : copyStudents.sort((a, b) => a
          .age - b.age);

    case SortType.Married:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => Number(a
          .married) - Number(b.married))

        : copyStudents.sort((a, b) => Number(a
          .married) - Number(b.married));

    case SortType.AverageGrade:
      return (order === 'asc')
        ? copyStudents.sort((a,
          b) => averageValue(a)
          - averageValue(b))

        : copyStudents.sort((a,
          b) => averageValue(a)
          - averageValue(b));

    default:
      return copyStudents;
  }
}
