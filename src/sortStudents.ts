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

const averageGrade = (grades: number[]): number => {
  return grades.reduce((acc, curV) => acc + curV, 0) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

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

    default:
      break;
  }

  if (SortType.AverageGrade && order === 'desc') {
    copyStudents.sort(
      (a, b) => averageGrade(b.grades) - averageGrade(a.grades),
    );
  } else if (SortType.AverageGrade) {
    copyStudents.sort(
      (a, b) => averageGrade(a.grades) - averageGrade(b.grades),
    );
  }

  return copyStudents;
}
