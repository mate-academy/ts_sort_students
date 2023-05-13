
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
  const setOrder = (): number => {
    return order === 'asc' ? 1 : -1;
  };

  type GetProp = (student: Student) => string | number | boolean;

  const getProp: GetProp = (student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return student[sortBy].toUpperCase();
      case SortType.Age:
      case SortType.Married:
        return student[sortBy];
      case SortType.AverageGrade:
      default:
        return student.grades.reduce((a, b) => a + b, 0)
        / student.grades.length;
    }
  };

  return [...students].sort((a, b) => {
    const aProp = getProp(a);
    const bProp = getProp(b);

    if (aProp > bProp) {
      return setOrder();
    }

    if (aProp < bProp) {
      return -setOrder();
    }

    return 0;
  });
}
