export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
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
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
): Array<Student> {
  return [...students].sort((a, b) => {
    let studentA = a;
    let studentB = b;

    if (order === 'desc') {
      [studentA, studentB] = [studentB, studentA];
    }

    const avaregeA: number = studentA.grades
      .reduce((prev, grade) => prev + grade) / studentA.grades.length;
    const avaregeB: number = studentB.grades
      .reduce((prev, grade) => prev + grade) / studentB.grades.length;

    switch (sortBy) {
      case SortType.Age:
        return studentA.age - studentB.age;

      case SortType.AverageGrade:
        return avaregeA - avaregeB;

      case SortType.Married:
        return +studentA.married - +studentB.married;

      case SortType.Surname:
        return studentA.surname.localeCompare(studentB.surname);

      default:
        return studentA.name.localeCompare(studentB.name);
    }
  });
}
