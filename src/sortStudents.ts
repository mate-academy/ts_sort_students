
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'AverageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageAge(student: Student): number {
  return student.grades.reduce((prev, curr) => prev + curr, 0)
    / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const numberOrder: number = order === 'asc' ? 1 : -1;

  return [...students].sort((studentA: Student, studentB: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return numberOrder
          * studentA[sortBy].localeCompare(studentB[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return numberOrder * (+studentA[sortBy] - +studentB[sortBy]);
      case SortType.AverageGrade:
        return numberOrder
          * (getAverageAge(studentA) - getAverageAge(studentB));
      default:
        return 0;
    }
  });
}
