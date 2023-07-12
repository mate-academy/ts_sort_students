
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades', // sort of grades[]
}

export type SortOrder = 'asc' | 'desc';

function averageGrade(grades: number[]): number {
  const result: number = grades.reduce((accum, current) => accum + current, 0);

  return result / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): object[] {
  const preparedArray: object[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      preparedArray.sort((student1, student2) => (order === 'asc'
        ? student1[sortBy].localeCompare(student2[sortBy])
        : student2[sortBy].localeCompare(student1[sortBy])));

      break;

    case SortType.Age:
    case SortType.Married:
      preparedArray.sort((student1, student2) => (order === 'asc'
        ? student1[sortBy] - student2[sortBy]
        : student2[sortBy] - student1[sortBy]));

      break;

    case SortType.AverageGrade:
      preparedArray.sort((student1, student2) => (order === 'asc'
        ? averageGrade(student1[sortBy]) - averageGrade(student2[sortBy])
        : averageGrade(student2[sortBy]) - averageGrade(student1[sortBy])));

      break;

    default:
      return preparedArray;
  }

  return preparedArray;
}
