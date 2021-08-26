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
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        copyStudents.sort((a, b) => a.name.localeCompare(b[SortType.Name]));
      } else {
        copyStudents.sort((a, b) => b.name.localeCompare(a.name));
      }

      return copyStudents;

    case SortType.Surname:
      if (order === 'asc') {
        copyStudents.sort((a, b) => a.surname.localeCompare(b.surname));
      } else {
        copyStudents.sort((a, b) => b.surname.localeCompare(a.surname));
      }

      return copyStudents;

    case SortType.Age:
      if (order === 'asc') {
        copyStudents.sort((a, b) => a.age - b.age);
      } else {
        copyStudents.sort((a, b) => b.age - a.age);
      }

      return copyStudents;

    case SortType.Married:
      if (order === 'asc') {
        copyStudents.sort((a, b) => String(a.married)
          .localeCompare(String(b.married)));
      } else {
        copyStudents.sort((a, b) => String(b.married)
          .localeCompare(String(a.married)));
      }

      return copyStudents;

    case SortType.AverageGrade:
      if (order === 'asc') {
        copyStudents.sort((a, b) => a.grades
          .reduce((x, y) => x + y) / a.grades.length
          - b.grades.reduce((x, y) => x + y) / b.grades.length);
      } else {
        copyStudents.sort((a, b) => b.grades
          .reduce((x, y) => x + y) / b.grades.length
          - a.grades.reduce((x, y) => x + y) / a.grades.length);
      }

      return copyStudents;

    default:
      return copyStudents;
  }
}
