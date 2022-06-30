export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

interface ExtendedStudent extends Student {
  averageGrade: number,
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';
type SortValue = string & number & boolean;
type SortCallback = (a: SortValue, b: SortValue) => number;

const sortByOrder = (
  a: SortValue,
  b: SortValue,
  order: SortOrder,
  callback: SortCallback,
): number => {
  return order === 'asc' ? callback(a, b) : callback(b, a);
};

const sortNumbers = (a: number, b: number): number => a - b;

const sortStrings = (a: string, b: string): number => a.localeCompare(b);

const getSortCallback = (
  sortBy: SortType,
  order: SortOrder,
): [SortOrder, SortCallback] => {
  switch (sortBy) {
    case SortType.Name:
      return [order, sortStrings];

    case SortType.Surname:
      return [order, sortStrings];

    case SortType.Married:
      return ['desc', sortNumbers];

    default:
      return [order, sortNumbers];
  }
};

const getAverageGrade = (student: Student): number => {
  return student.grades.reduce((acc, item) => (
    acc + item
  ), 0) / student.grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const [sortOrder, sortCallback] = getSortCallback(sortBy, order);

  const copyData: ExtendedStudent[] = students.map((student) => {
    const averageGrade = SortType.AverageGrade ? getAverageGrade(student) : 0;

    return {
      ...student,
      averageGrade,
    };
  });

  const result = copyData.sort((a, b) => {
    const first = a[sortBy] as SortValue;
    const second = b[sortBy] as SortValue;

    return sortByOrder(first, second, sortOrder, sortCallback);
  });

  return result;
}
