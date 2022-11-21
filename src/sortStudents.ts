export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function averageGradeCalc(student: Student): number {
  return student.grades.reduce((acc, curr) => {
    return acc + curr;
  }, 0) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student): number => {
    switch (sortBy) {
      case ('name'):
      case ('surname'):
        return order === 'desc'
          ? b[sortBy].localeCompare(a[sortBy])
          : a[sortBy].localeCompare(b[sortBy]);

      case 'age':
        return order === 'desc'
          ? b[sortBy] - a[sortBy]
          : a[sortBy] - b[sortBy];

      case ('married'):
        return a[sortBy] ? -1 : 1;

      default:
        return order === 'desc'
          ? averageGradeCalc(b) - averageGradeCalc(a)
          : averageGradeCalc(a) - averageGradeCalc(b);
    }
  });
}
