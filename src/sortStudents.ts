
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGrage(grades: number[]): number {
  return grades.reduce((a, b) => a + b) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? sortedStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : sortedStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? sortedStudents.sort((a, b) => a[sortBy] - b[sortBy])
        : sortedStudents.sort((a, b) => b[sortBy] - a[sortBy]);

    case SortType.AverageGrade:
      return (order === 'asc')
        ? sortedStudents.sort((a, b) => {
          return averageGrage(a[sortBy]) - averageGrage(b[sortBy]);
        })
        : sortedStudents.sort((a, b) => {
          return averageGrage(b[sortBy]) - averageGrage(a[sortBy]);
        });

    default:
      return sortedStudents;
  }
}
