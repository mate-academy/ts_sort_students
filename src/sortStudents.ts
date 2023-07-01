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
  let sortedStuds: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStuds = (order === 'asc')
        ? sortedStuds.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : sortedStuds.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

      break;

    case SortType.Age:
    case SortType.Married:
      sortedStuds = (order === 'asc')
        ? sortedStuds.sort((a, b) => +a[sortBy] - +b[sortBy])
        : sortedStuds.sort((a, b) => +b[sortBy] - +a[sortBy]);
      break;

    case SortType.AverageGrade:
      sortedStuds = (order === 'asc')
        ? sortedStuds.sort((a, b) => calcAvg(a[sortBy]) - calcAvg(b[sortBy]))
        : sortedStuds.sort((a, b) => calcAvg(b[sortBy]) - calcAvg(a[sortBy]));
      break;

    default:
      throw new Error('Enter valid data');
  }

  return sortedStuds;
}
