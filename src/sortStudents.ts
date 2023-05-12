
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
      case 'name':
      case 'surname':
        return x[sortBy].toUpperCase();
      case 'age':
      case 'married':
        return x[sortBy];
      case 'averageGrade':
      default:
        return x.grades.reduce((a, b) => a + b, 0) / x.grades.length;
    }
  }

  return students.slice().sort((a, b) => {
    switch (true) {
      case (compare(a) > compare(b)):
        return setOrder();
      case (compare(a) < compare(b)):
        return -setOrder();
      default:
        return 0;
    }
  });
}
