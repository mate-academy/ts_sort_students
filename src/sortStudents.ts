/* eslint-disable max-len */
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
  const average = (numArr: number[]): number => numArr.reduce(
    (sum: number, currentElement: number) => sum + currentElement, 0,
  ) / numArr.length;

  const newStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? newStudents.sort((firstStudent, secondStudent) => firstStudent[sortBy].localeCompare(secondStudent[sortBy]))
        : newStudents.sort((firstStudent, secondStudent) => secondStudent[sortBy].localeCompare(firstStudent[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? newStudents.sort((firstStudent, secondStudent) => +firstStudent[sortBy] - +secondStudent[sortBy])
        : newStudents.sort((firstStudent, secondStudent) => +secondStudent[sortBy] - +firstStudent[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'

        ? newStudents.sort((firstStudent, secondStudent) => average(firstStudent.grades) - average(secondStudent.grades))
        : newStudents.sort((firstStudent, secondStudent) => average(secondStudent.grades) - average(firstStudent.grades));

    default:
      return students;
  }
}
