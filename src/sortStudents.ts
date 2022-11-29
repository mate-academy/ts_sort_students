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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: [], sortBy: SortType, order: SortOrder,
): object[] {
  const studentCopy: [] = [...students];

  const getAverage = (value: number[], total: number): number => {
    return value.reduce((startValue, current) => (
      current + startValue), 0) / total;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentCopy.sort(
        (Student1: Student, Student2: Student) => {
          return order === 'asc'
            ? Student1[sortBy].localeCompare(Student2[sortBy])
            : Student2[sortBy].localeCompare(Student1[sortBy]);
        },
      );

    case SortType.Age:
    case SortType.Married:
      return studentCopy.sort(
        (Student1: Student, Student2: Student) => {
          return order === 'asc'
            ? +Student1[sortBy] - +Student2[sortBy]
            : +Student2[sortBy] - +Student1[sortBy];
        },
      );

    case SortType.AverageGrade:
      return studentCopy.sort(
        (Student1: Student, Student2: Student) => {
          const grades1 = Student1[sortBy];
          const grades2 = Student2[sortBy];
          const total1 = grades1.length;
          const total2 = grades2.length;

          return order === 'asc'
            ? getAverage(grades1, total1) - getAverage(grades2, total2)
            : getAverage(grades2, total2) - getAverage(grades1, total1);
        },
      );

    default: return studentCopy;
  }
}
