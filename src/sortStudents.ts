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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  function getAverage(student: Student): number {
    return (
      student.grades.reduce(
        (sum, grade) => sum + grade, 0,
      ) / student.grades.length
    );
  }

  sortedStudents.sort((a: Student, b: Student): number => {
    const sortOrder: boolean = order === 'asc';

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return sortOrder
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return sortOrder
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];

      case SortType.AverageGrade:
        return sortOrder
          ? getAverage(a) - getAverage(b)
          : getAverage(b) - getAverage(a);

      default:
        return 0;
    }
  });

  return sortedStudents;
}
