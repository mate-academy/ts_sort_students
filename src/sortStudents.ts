
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

export const sortStudents = (
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] => {
  const newArray = [...students];
  const calculatedOrder = (order === 'asc' ? 1 : -1);

  switch (sortBy) {
    case SortType.Age:
      newArray.sort((a, b) => (a.age - b.age) * calculatedOrder);

      return newArray;
    case SortType.Name:
    case SortType.Surname:
      newArray.sort((a, b) => {
        return (a[sortBy as keyof typeof a]
          .toString()
          .localeCompare(b[sortBy as keyof typeof b].toString())
          * calculatedOrder);
      });

      return newArray;
    case SortType.Married:
      newArray.sort((a, b) => Number((a.married > b.married))
      * calculatedOrder);

      return newArray;
    case SortType.AverageGrade:
      newArray.sort((a, b) => {
        const averageA = a.grades
          .reduce((sum, x) => sum + x, 0) / a.grades.length;
        const averageB = b.grades
          .reduce((sum, x) => sum + x, 0) / b.grades.length;

        return (averageA - averageB) * calculatedOrder;
      });

      return newArray;
    default: break;
  }

  return newArray;
};
