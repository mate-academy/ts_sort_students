export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name= 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
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
      case SortType.Married:

        return +studentA[sortBy] - +studentB[sortBy];

      case SortType.AverageGrade:
        return avaregeA - avaregeB;

      case SortType.Name:
      case SortType.Surname:
        return studentA[sortBy].localeCompare(studentB[sortBy]);

      default:
        return 0;
    }
  });
}
