export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  const averageGrade = (grades: number[]): number => {
    return grades.reduce((acc, curV) => acc + curV, 0) / grades.length;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'desc'
        ? copyStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]))
        : copyStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    case SortType.Married:
    case SortType.Age:
      return order === 'desc'
        ? copyStudents.sort((a, b) => +b[sortBy] - +a[sortBy])
        : copyStudents.sort((a, b) => +a[sortBy] - +b[sortBy]);

    case SortType.AverageGrade:
      return order === 'desc'
        ? copyStudents.sort(
          (a, b) => averageGrade(b.grades) - averageGrade(a.grades),
        )
        : copyStudents.sort(
          (a, b) => averageGrade(a.grades) - averageGrade(b.grades),
        );

    default:
      return copyStudents;
  }
}
