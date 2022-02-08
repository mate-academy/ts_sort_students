
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  avarageGrade?: number;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  function studentAverageGrade(student: Student): number {
    return student.grades
      .reduce((a, b) => a + b, 0) / student.grades.length;
  }

  return [...students].sort((studentA, studentB) => {
    let current: Student = studentA;
    let next: Student = studentB;

    if (order === 'desc') {
      [current, next] = [next, current];
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return current[sortBy].localeCompare(next[sortBy]);

      case SortType.Married:
      case SortType.Age:
        return Number(current[sortBy]) - Number(next[sortBy]);
      case SortType.AverageGrade:
        return studentAverageGrade(current) - studentAverageGrade(next);

      default:
        throw new Error('Unexpected value');
    }
  });
}
