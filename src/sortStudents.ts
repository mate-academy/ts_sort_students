
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
  AverageGrade = 'AverageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copiedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copiedStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;
    case SortType.Age:
      copiedStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });
      break;
    case SortType.AverageGrade:
      copiedStudents.sort((a: Student, b: Student) => {
        const curr: number
          = a.grades.reduce((sum: number, el: number) => sum + el, 0)
          / a.grades.length;
        const next: number
          = b.grades.reduce((sum: number, el: number) => sum + el, 0)
          / b.grades.length;

        return order === 'asc'
          ? curr - next
          : next - curr;
      });
      break;

    case SortType.Married:
      copiedStudents.sort((a: Student, b: Student) => {
        const curr: number = a.married === true ? 1 : 0;
        const next: number = b.married === true ? 1 : 0;

        return order === 'asc'
          ? curr - next
          : next - curr;
      });
      break;

    default:
      break;
  }

  return copiedStudents;
}
