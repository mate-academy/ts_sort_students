
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      newArr.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      newArr.sort((a, b) => {
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });
      break;

    case SortType.AverageGrade:
      newArr.sort((a, b) => {
        const averageA: number = a.grades
          .reduce((acc, n) => acc + n, 0) / a.grades.length;
        const averageB: number = b.grades
          .reduce((acc, n) => acc + n, 0) / b.grades.length;

        if (order === 'asc') {
          return averageA - averageB;
        }

        return averageB - averageA;
      });
      break;

    default:
      return newArr;
  }

  return newArr;
}
