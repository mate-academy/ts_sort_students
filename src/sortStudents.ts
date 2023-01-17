
export interface Student {
  name: string,
  surname: string,
  age: number,
  married:boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desk';

function average({ grades }: Student): number {
  return grades.reduce((sum, grade) => sum + grade) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? average(a) - average(b)
          : average(b) - average(a);
      case SortType.Married:
      case SortType.Age:
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);

      default: throw Error('Error');
    }
  });
}
