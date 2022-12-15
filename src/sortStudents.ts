
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

export type SortOrder = 'asc' | 'desc';

function Average(student: Student): number {
  const sum: number = student.grades.reduce((acc, elem) => acc + elem, 0);

  return sum / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student) => {
    let studentA: Student = a;
    let studentB: Student = b;

    if (order === 'desc') {
      studentA = b;
      studentB = a;
    }

    switch (sortBy) {
      case SortType.Name:
        return studentA.name.localeCompare(studentB.name);

      case SortType.Surname:
        return studentA.surname.localeCompare(studentB.surname);

      case SortType.Age:
        return studentA.age - studentB.age;

      case SortType.Married:
        return (+studentA.married) - (+studentB.married);

      case SortType.AverageGrade:
        return Average(studentA) - Average(studentB);

      default:
        return 0;
    }
  });
}
