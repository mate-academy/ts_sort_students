
export interface Student {
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
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function average(student: Student): number {
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
      case SortType.Surname:
        return studentA[sortBy].localeCompare(studentB[sortBy]);

      case SortType.Age:
        return studentA.age - studentB.age;

      case SortType.AverageGrade:
        return average(studentA) - average(studentB);

      default:
        return (+studentA.married) - (+studentB.married);
    }
  });
}
