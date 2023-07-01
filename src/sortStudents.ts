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

function calcAvg(grades: number[]): number {
  return grades.reduce((acc, item) => acc + item, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  // eslint-disable-next-line default-case
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        sortedStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      } else {
        sortedStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
      }
      break;

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        sortedStudents.sort((a, b) => +a[sortBy] - +b[sortBy]);
      } else {
        sortedStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        sortedStudents.sort((a, b) => calcAvg(a[sortBy]) - calcAvg(b[sortBy]));
      } else {
        sortedStudents.sort((a, b) => calcAvg(b[sortBy]) - calcAvg(a[sortBy]));
      }
      break;
  }

  return sortedStudents;
}
