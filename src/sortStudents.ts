
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
  [...students]: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return students.sort((a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]));

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);

      case SortType.AverageGrade:
      {
        const averageA = a.grades
          .reduce((sum, n) => sum + n) / a.grades.length;

        const averageB = b
          .grades.reduce((sum, n) => sum + n) / b.grades.length;

        return order === 'asc'
          ? averageA - averageB
          : averageB - averageA;
      }

      default:
        return 0;
    }
  });
}
