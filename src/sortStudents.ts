
export interface Student {
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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = students.map((student) => {
    return {
      ...student,
      avgGrades: student.grades.reduce(
        (a, b) => a + b, 0,
      ) / student.grades.length,
    };
  });

  if (order === 'asc') {
    return copyStudents.sort((a, b) => {
      switch (sortBy) {
        case SortType.Name:
          return a.name.localeCompare(b.name);

        case SortType.Surname:
          return a.surname.localeCompare(b.surname);

        case SortType.Age:
          return b.age - a.age;

        case SortType.AverageGrade:
          return a.avgGrades - b.avgGrades;

        default:
          return 0;
      }
    });
  }

  if (order === 'desc') {
    return copyStudents.sort((a, b) => {
      switch (sortBy) {
        case SortType.Age:
          return b.age - a.age;

        case SortType.Married:
          return +b.married - +a.married;

        case SortType.AverageGrade:
          return b.avgGrades - a.avgGrades;

        default:
          return 0;
      }
    });
  }

  return students;
}
