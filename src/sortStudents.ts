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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  return sortedStudents.sort((a, b) => {
    switch (sortBy) {
      case SortType.AverageGrade:
        return order === 'asc'
          ? a.grades
            .reduce((sum, cur) => sum + cur, 0) / a.grades.length
            - b.grades.reduce((sum, cur) => sum + cur, 0) / b.grades.length
          : b.grades
            .reduce((sum, cur) => sum + cur, 0) / b.grades.length
            - a.grades.reduce((sum, cur) => sum + cur, 0) / a.grades.length;

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);

      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      default:
        break;
    }

    return 0;
  });
}
