/* eslint-disable max-len */
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean;
  grades: number[];
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
  const studentsCopy: Student[] = [...students];

  const getAverage = (array: number[]): number => array
    .reduce((total: number, grade: number) => total + grade, 0) / array.length;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy
          .sort((firstStudent, secondStudent) => firstStudent[sortBy]
            .localeCompare(secondStudent[sortBy]))
        : studentsCopy
          .sort((firstStudent, secondStudent) => secondStudent[sortBy]
            .localeCompare(firstStudent[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? studentsCopy
          .sort((firstStudent, secondStudent) => +firstStudent[sortBy] - +secondStudent[sortBy])
        : studentsCopy
          .sort((firstStudent, secondStudent) => +secondStudent[sortBy] - +firstStudent[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy
          .sort((firstStudent, secondStudent) => getAverage(firstStudent.grades) - getAverage(secondStudent.grades))
        : studentsCopy
          .sort((firstStudent, secondStudent) => getAverage(secondStudent.grades) - getAverage(firstStudent.grades));

    default:
      return students;
  }
}
