
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

function calculAverage(grades: number[]): number {
  return grades.reduce((sum: number, x: number) => sum + x, 0) / grades.length;
}

export const sortStudents = (
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] => {
  const newArray = [...students];
  const calculatedOrder = (order === 'asc' ? 1 : -1);

  switch (sortBy) {
    case SortType.Age:
    case SortType.Married:
      newArray.sort((a, b) => (Number((a[sortBy] > b[sortBy]))
      * calculatedOrder));

      return newArray;
    case SortType.Name:
    case SortType.Surname:
      newArray.sort((a, b) => {
        return (a[sortBy].localeCompare(b[sortBy])
        * calculatedOrder);
      });

      return newArray;
    case SortType.AverageGrade:
      newArray.sort((a, b) => {
        const averageA = calculAverage(a.grades);
        const averageB = calculAverage(b.grades);

        return (averageA - averageB) * calculatedOrder;
      });

      return newArray;
    default: break;
  }

  return newArray;
};
