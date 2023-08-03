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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    if (sortBy === SortType.AverageGrade) {
      const valueA = a.grades
        .reduce((acc, grade) => acc + grade, 0) / a.grades.length;

      const valueB = b.grades
        .reduce((acc, grade) => acc + grade, 0) / b.grades.length;

      return order === 'asc'
        ? valueA - valueB
        : valueB - valueA;
    }

    if (sortBy === SortType.Age || sortBy === SortType.Married) {
      return order === 'asc'
        ? +a[sortBy] - +b[sortBy]
        : +b[sortBy] - +a[sortBy];
    }

    return order === 'asc'
      ? a[sortBy].localeCompare(b[sortBy])
      : b[sortBy].localeCompare(a[sortBy]);
  });
}
