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
  const reduceCallback = (x: number, y: number): number => x + y;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        copyStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      } else {
        copyStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
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
          .reduce(reduceCallback) / a.grades.length
          - b.grades.reduce(reduceCallback) / b.grades.length);
      } else {
        copyStudents.sort((a, b) => b.grades
          .reduce(reduceCallback) / b.grades.length
          - a.grades.reduce(reduceCallback) / a.grades.length);
      }

      return copyStudents;

    default:
      return copyStudents;
  }
}
