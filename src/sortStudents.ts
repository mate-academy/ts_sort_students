
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function AverageGradesValue(student: Student): number {
  return student.grades.reduce((sum, n) => sum + n, 0) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        return studentsCopy.sort((s1, s2) => s1.name.localeCompare(s2.name));
      }

      return studentsCopy.sort((s1, s2) => s2.name.localeCompare(s1.name));

    case SortType.Surname:
      if (order === 'asc') {
        return studentsCopy
          .sort((s1, s2) => s1.surname.localeCompare(s2.surname));
      }

      return studentsCopy
        .sort((s1, s2) => s2.surname.localeCompare(s1.surname));

    case SortType.Age:
      if (order === 'asc') {
        return studentsCopy.sort((s1, s2) => s1.age - s2.age);
      }

      return studentsCopy.sort((s1, s2) => s2.age - s1.age);

    case SortType.Married:
      if (order === 'asc') {
        return studentsCopy.sort((s1, s2) => +s1.married - +s2.married);
      }

      return studentsCopy.sort((s1, s2) => +s2.married - +s1.married);

    case SortType.AverageGrade:
      if (order === 'asc') {
        return studentsCopy
          .sort((s1, s2) => AverageGradesValue(s1) - AverageGradesValue(s2));
      }

      return studentsCopy
        .sort((s1, s2) => AverageGradesValue(s2) - AverageGradesValue(s1));

    default:
      return studentsCopy;
  }
}
