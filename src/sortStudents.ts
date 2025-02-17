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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function averageMark(grades: number[]): number {
  const sum = grades.reduce((acc, curr) => acc + curr, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const orderMultiply = (order === 'asc' ? 1 : -1);

  return [...students].sort((previousStudent, currentStudent): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return previousStudent[sortBy]
          .localeCompare(currentStudent[sortBy])
          * orderMultiply;

      case SortType.Age:
      case SortType.Married:
        return (+(previousStudent[sortBy]) - +(currentStudent[sortBy]))
          * orderMultiply;

      case SortType.AverageGrade:
        return (averageMark(previousStudent[sortBy])
          - averageMark(currentStudent[sortBy]))
          * orderMultiply;

      default:
        throw new Error(`SortType failure! Incorrect argument: ${sortBy}`);
    }
  });
}
