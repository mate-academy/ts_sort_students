
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
}

export type SortOrder = 'asc' | 'desc';

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
    case 'name':
    case 'surname':
      return order === 'asc'
        ? copyStudents.sort((a, b) => {
          return a[sortBy].localeCompare(b[sortBy]);
        })
        : copyStudents.sort((a, b) => {
          return b[sortBy].localeCompare(a[sortBy]);
        });

    case 'married':
    case 'age':
      return order === 'asc'
        ? copyStudents.sort((a, b) => +a[sortBy] - +b[sortBy])
        : copyStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case 'grades':
      return order === 'asc'
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
