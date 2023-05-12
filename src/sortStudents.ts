
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  function setOrder(): number {
    return order === 'asc' ? 1 : -1;
  }

  type Compare = string | number | boolean;

  function compare(x: Student): Compare {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return x[sortBy].toUpperCase();
      case SortType.Age:
      case SortType.Married:
        return x[sortBy];
      case SortType.AverageGrade:
      default:
        return x.grades.reduce((a, b) => a + b, 0) / x.grades.length;
    }
  }

  return [...students].sort((a, b) => {
    if (compare(a) > compare(b)) {
      return setOrder();
    }

    if (compare(a) < compare(b)) {
      return -setOrder();
    }

    return 0;
  });
}
