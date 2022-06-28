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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyData: ExtendedStudent[] = students.map((student) => {
    const averageGrade = student.grades.reduce((acc, item) => (
      acc + item
    ), 0) / student.grades.length;

    return {
      ...student,
      averageGrade,
    };
  });

  const result = copyData.sort((a, b) => {
    const first = a[sortBy] as SortValue;
    const second = b[sortBy] as SortValue;

    switch (sortBy) {
      case SortType.Name:
        return sortByOrder(first, second, order, sortStrings);

      case SortType.Surname:
        return sortByOrder(first, second, order, sortStrings);

      case SortType.Married:
        return sortByOrder(first, second, 'desc', sortNumbers);

      default:
        return sortByOrder(first, second, order, sortNumbers);
    }
  });

  return result;
}
