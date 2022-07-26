
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

const averageGrade = (student: Student): number => {
  return student.grades.reduce((a, b) => a + b, 0) / student.grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case (SortType.Name):
    case (SortType.Surname):
      return order === 'asc'
        ? copyStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copyStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case (SortType.Age):
    case (SortType.Married):
      return order === 'asc'
        ? copyStudents.sort((a, b) => +a[sortBy] - +b[sortBy])
        : copyStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case (SortType.AverageGrade):
      return order === 'asc'
        ? copyStudents.sort((a, b) => averageGrade(a) - averageGrade(b))
        : copyStudents.sort((a, b) => averageGrade(b) - averageGrade(a));

    default:
      break;
  }

  return copyStudents;
}
