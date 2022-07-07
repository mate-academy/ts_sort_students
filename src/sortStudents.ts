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
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const key: keyof Student = sortBy;
  const isAsc: boolean = order === 'asc';

  return [...students].sort((
    firstStudent: Student,
    secondStudent: Student,
  ): number => {
    let result: number;
    let firstValue: string;
    let secondValue: string;
    let firstAverageGrade: number;
    let secondAverageGrade: number;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        firstValue = firstStudent[key].toString();
        secondValue = secondStudent[key].toString();

        result = (isAsc)
          ? firstValue.localeCompare(secondValue)
          : secondValue.localeCompare(firstValue);
        break;

      case SortType.Age:
      case SortType.Married:
        result = (isAsc)
          ? +firstStudent[key] - +secondStudent[key]
          : +secondStudent[key] - +firstStudent[key];
        break;

      default:
        firstAverageGrade = firstStudent.grades.reduce((
          sum: number,
          num: number,
        ): number => sum + num) / firstStudent.grades.length;

        secondAverageGrade = secondStudent.grades.reduce((
          sum: number,
          num: number,
        ): number => sum + num) / secondStudent.grades.length;

        result = (isAsc)
          ? firstAverageGrade - secondAverageGrade
          : secondAverageGrade - firstAverageGrade;
    }

    return result;
  });
}
