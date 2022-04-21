
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

function averageGrade(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const arrOfStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? arrOfStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : arrOfStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? arrOfStudents.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : arrOfStudents.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

    case SortType.AverageGrade:
      return arrOfStudents.sort((a, b) => {
        return (order === 'asc')
          ? averageGrade(a[sortBy]) - averageGrade(b[sortBy])
          : averageGrade(b[sortBy]) - averageGrade(a[sortBy]);
      });

    default:
      throw new Error('Error!');
  }
}
