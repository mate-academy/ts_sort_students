
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
    switch (sortBy) {
      case SortType.Name:
        return copyStudents.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });

      case SortType.Surname:
        return copyStudents.sort((a, b) => {
          return a.surname.localeCompare(b.surname);
        });

      case SortType.Age:
        return copyStudents.sort((a, b) => b.age - a.age);

      case SortType.AverageGrade:
        return copyStudents.sort((a, b) => a.avgGrades - b.avgGrades);

      default:
        return [];
    }
  }

  if (order === 'desc') {
    switch (sortBy) {
      case SortType.Age:
        return copyStudents.sort((a, b) => b.age - a.age);

      case SortType.Married:
        return copyStudents.sort((a, b) => +b.married - +a.married);

      case SortType.AverageGrade:
        return copyStudents.sort((a, b) => b.avgGrades - a.avgGrades);

      default:
        return [];
    }
  }

  return [];
}
