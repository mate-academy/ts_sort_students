
export type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: Array<number>;
};

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrder = 'asc' | 'desc';

enum Order {
  Asc = 'asc',
  Desc = 'desc',
}

function averageGrade(grades: number[]): number {
  return grades.reduce((a, b) => a + b) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === Order.Asc
        ? copyStudents.sort((a, b) => {
          return a[sortBy].localeCompare(b[sortBy]);
        })
        : copyStudents.sort((a, b) => {
          return b[sortBy].localeCompare(a[sortBy]);
        });

    case SortType.Married:
    case SortType.Age:
      return order === Order.Asc
        ? copyStudents.sort((a, b) => +a[sortBy] - +b[sortBy])
        : copyStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === Order.Asc
        ? copyStudents.sort((a, b) => {
          return averageGrade(a[sortBy]) - averageGrade(b[sortBy]);
        })
        : copyStudents.sort((a, b) => {
          return averageGrade(b[sortBy]) - averageGrade(a[sortBy]);
        });

    default:
      return copyStudents;
  }
}
