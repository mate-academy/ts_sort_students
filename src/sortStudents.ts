// describe Student type
// create and export SortType enum
// create SortOrder type

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
  Married = 'isMaried',
  AverageGrade = 'grades',
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];
  const callback = (prev: number, curr: number): number => {
    return prev + curr;
  };

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        sortedStudents
          .sort((a, b) => a.name.localeCompare(b.name));
      } else {
        sortedStudents
          .sort((a, b) => b.name.localeCompare(a.name));
      }

      return sortedStudents;

    case SortType.Surname:
      if (order === 'asc') {
        sortedStudents
          .sort((a, b) => a.surname.localeCompare(b.surname));
      } else {
        sortedStudents
          .sort((a, b) => b.surname.localeCompare(a.surname));
      }

      return sortedStudents;

    case SortType.Age:
      if (order === 'asc') {
        sortedStudents
          .sort((a, b) => a.age - b.age);
      } else {
        sortedStudents
          .sort((a, b) => b.age - a.age);
      }

      return sortedStudents;

    case SortType.Married:
      if (order === 'asc') {
        sortedStudents
          .sort((a, b) => +a.married - +b.married);
      } else {
        sortedStudents
          .sort((a, b) => +b.married - +a.married);
      }

      return sortedStudents;

    case SortType.AverageGrade:
      if (order === 'asc') {
        sortedStudents
          .sort((a, b) => a.grades.reduce(callback, 0)
          - b.grades.reduce(callback, 0));
      } else {
        sortedStudents
          .sort((a, b) => b.grades.reduce(callback, 0)
          - a.grades.reduce(callback, 0));
      }

      return sortedStudents;

    default:
      return sortedStudents;
  }
}
