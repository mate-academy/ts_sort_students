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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const callback = (a: Student, b:Student): number => {
    let result: number = 0;

    const avgA = a.grades.reduce(
      (sum, grade) => sum + grade, 0,
    ) / a.grades.length;

    const avgB = b.grades.reduce(
      (sum, grade) => sum + grade, 0,
    ) / b.grades.length;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        result = a[sortBy].localeCompare(b[sortBy]);
        break;

      case SortType.Age:
      case SortType.Married:
        result = Number(a[sortBy]) - Number(b[sortBy]);
        break;

      case SortType.AverageGrade:
        result = avgA - avgB;
        break;

      default:
        break;
    }

    return order === 'asc' ? result : -result;
  };

  return [...students].sort(callback);
}
