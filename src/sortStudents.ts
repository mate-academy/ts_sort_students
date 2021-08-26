// describe Student type
// create and export SortType enum
// create SortOrder type

interface Student {
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

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const arrayFromStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? arrayFromStudents.sort((a, b) => a.name.localeCompare(b.name))
        : arrayFromStudents.sort((a, b) => b.name.localeCompare(a.name));

    case SortType.Surname:
      return order === 'asc'
        ? arrayFromStudents.sort((a, b) => a.surname.localeCompare(b.surname))
        : arrayFromStudents.sort((a, b) => b.surname.localeCompare(a.surname));

    case SortType.Age:
      return order === 'asc'
        ? arrayFromStudents.sort((a, b) => a.age - b.age)
        : arrayFromStudents.sort((a, b) => b.age - a.age);

    case SortType.Married:
      return order === 'asc'
        ? arrayFromStudents.sort((a, b) => String(a.married)
          .localeCompare(String(b.married)))
        : arrayFromStudents.sort((a, b) => String(b.married)
          .localeCompare(String(a.married)));

    case SortType.AverageGrade:
      return order === 'asc'
        ? arrayFromStudents.sort((a, b) => a.grades.reduce((x, y) => x + y)
          / a.grades.length - b.grades.reduce((x, y) => x + y)
          / b.grades.length)
        : arrayFromStudents.sort((a, b) => b.grades.reduce((x, y) => x + y)
        / b.grades.length - a.grades.reduce((x, y) => x + y) / a.grades.length);

    default:
      return arrayFromStudents;
  }
}
