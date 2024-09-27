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
type Element = string | number | boolean | number[];

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const cloneStudent: Student[] = [...students];

  return cloneStudent.sort((a: Student, b: Student): number => {
    let firstStudent: Element = a[sortBy];
    let secondStudent: Element = b[sortBy];
    const copyFirstStudent: Element = firstStudent;

    if (order === 'desc') {
      firstStudent = secondStudent;
      secondStudent = copyFirstStudent;
    }

    switch (sortBy) {
      case SortType.Name:
        return firstStudent.localeCompare(secondStudent);

      case SortType.Surname:
        return firstStudent.localeCompare(secondStudent);

      case SortType.Age:
        return firstStudent - secondStudent;

      case SortType.Married:
        return firstStudent - secondStudent;

      case SortType.AverageGrade:
        return firstStudent.reduce((
          accFirst: number,
          currFirst: number,
        ): number => accFirst + currFirst)
        / firstStudent.length
        - secondStudent.reduce((
          accSecond: number,
          currSecond: number,
        ): number => accSecond + currSecond)
        / secondStudent.length;

      default:
        return 0;
    }
  });
}
