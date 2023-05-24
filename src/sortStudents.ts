
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  // write your function

  const studentsCopy: Student[] = [...students];

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        return studentsCopy.sort(
          (a: Student, b: Student) => a.name.localeCompare(b.name),
        );

      case SortType.Surname:
        return studentsCopy.sort(
          (a: Student, b: Student) => a.surname.localeCompare(b.surname),
        );

      case SortType.Age:
        return studentsCopy.sort((a: Student, b: Student) => a.age - b.age);

      case SortType.Married:
        return studentsCopy.sort(
          (a: Student, b: Student) => Number(a.married) - Number(b.married),
        );

      case SortType.AverageGrade:
        return studentsCopy.sort((a: Student, b: Student) => a.grades
          .reduce((c: number, d: number) => (c + d)) / a.grades.length
          - b.grades
            .reduce((c: number, d: number) => (c + d)) / b.grades.length);

      default:
    }
  }

  if (order === 'desc') {
    switch (sortBy) {
      case SortType.Name:
        return studentsCopy.sort(
          (a: Student, b: Student) => b.name.localeCompare(a.name),
        );

      case SortType.Surname:
        return studentsCopy.sort(
          (a: Student, b: Student) => b.surname.localeCompare(a.surname),
        );

      case SortType.Age:
        return studentsCopy.sort((a: Student, b: Student) => b.age - a.age);

      case SortType.Married:
        return studentsCopy.sort(
          (a: Student, b: Student) => Number(b.married) - Number(a.married),
        );

      case SortType.AverageGrade:
        return studentsCopy.sort((a: Student, b: Student) => b.grades
          .reduce((c: number, d: number) => (c + d)) / b.grades.length
          - a.grades
            .reduce((c: number, d: number) => (c + d)) / a.grades.length);

      default:
    }
  }

  return students;
}
