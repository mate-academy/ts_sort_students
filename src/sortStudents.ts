
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
  AverageGrade = 'average',
}

const averageGrade
  = (arr: number[]): number => {
    if (arr.length === 0) {
      return 0;
    }

    return arr.reduce((a: number, b: number) => a + b, 0) / arr.length;
  };

export type SortOrder = 'asc' | 'desc';

const calculateValue = (
  student: Student,
  sortBy: SortType,
): string | number | boolean => {
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
    case SortType.Age:
    case SortType.Married:
      return student[sortBy];

    case SortType.AverageGrade:
      return averageGrade(student.grades);

    default:
      throw new Error('no such sort type');
  }
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];
  const orderType = order === 'asc';

  const sortedStudents = studentsCopy.sort((a, b) => {
    const aValue = calculateValue(a, sortBy);
    const bValue = calculateValue(b, sortBy);

    const aValueStr = typeof aValue === 'string' ? aValue : aValue.toString();
    const bValueStr = typeof bValue === 'string' ? bValue : bValue.toString();

    if (typeof aValue === 'string') {
      return orderType
        ? aValueStr.localeCompare(bValueStr)
        : bValueStr.localeCompare(aValueStr);
    }

    return orderType
      ? Number(aValue) - Number(bValue)
      : Number(bValue) - Number(aValue);
  });

  return sortedStudents;
}
