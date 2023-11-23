export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  averageGrade?: number;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function sort(
  students: Student[],
  value: SortType,
  order: string,
): Student[] {
  return students.sort(
    ({ [value]: value1 = 0 }: Student, { [value]: value2 = 0 }: Student) => {
      let a: typeof value1 = value1;
      let b: typeof value2 = value2;

      if (order === 'desc') {
        [a, b] = [b, a];
      }

      if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b);
      }

      if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
      }

      a = a === true ? 1 : 0;
      b = b === true ? 1 : 0;

      return a - b;
    },
  );
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const dataWithAverageGrade: Student[] = JSON.parse(JSON.stringify(students))
    .map((student: Student) => {
      const copyStudent: Student = { ...student };

      copyStudent.averageGrade = copyStudent.grades.reduce(
        (prev: number, curr: number) => prev + curr, 0,
      ) / copyStudent.grades.length;

      return copyStudent;
    });

  switch (sortBy) {
    case SortType.Name:
      return sort(dataWithAverageGrade, SortType.Name, order);

    case SortType.Surname:
      return sort(dataWithAverageGrade, SortType.Surname, order);

    case SortType.Age:
      return sort(dataWithAverageGrade, SortType.Age, order);

    case SortType.Married:
      return sort(dataWithAverageGrade, SortType.Married, order);

    default:
      return sort(dataWithAverageGrade, SortType.AverageGrade, order);
  }
}
