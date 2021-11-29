
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

export type SortOrder = 'desc' | 'asc';

function getAverage(arr: Student): number {
  const average = arr.grades.reduce((a: number, b: number) => a + b);

  return average / arr.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((sA, sB) => {
        return order === 'asc'
          ? sA[sortBy].localeCompare(sB[sortBy])
          : sB[sortBy].localeCompare(sA[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      copyStudents.sort((sA, sB) => {
        return order === 'asc'
          ? Number(sA[sortBy]) - Number(sB[sortBy])
          : Number(sB[sortBy]) - Number(sA[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      copyStudents.sort((sA, sB) => {
        return order === 'asc'
          ? getAverage(sA) - getAverage(sB)
          : getAverage(sB) - getAverage(sA);
      });
      break;

    default:
      return copyStudents;
  }

  return copyStudents;
}
