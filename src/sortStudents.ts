/* eslint-disable implicit-arrow-linebreak */
interface Student {
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

type SortOrder = 'asc' | 'desc';

function calcAvgGrade(student: Student): number {
  const mark: number = student.grades
    .reduce((accum: number, grade: number) => accum + grade, 0)
    / student.grades.length;

  return mark;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy.sort((first: Student, second: Student) =>
          first[sortBy].localeCompare(second[sortBy]))
        : studentsCopy.sort((first: Student, second: Student) =>
          second[sortBy].localeCompare(first[sortBy]));

    case SortType.Age:
      return order === 'asc'
        ? studentsCopy.sort((first: Student, second: Student) =>
          first[sortBy] - second[sortBy])
        : studentsCopy.sort((first: Student, second: Student) =>
          second[sortBy] - first[sortBy]);

    case SortType.Married:
      return order === 'asc'
        ? studentsCopy.sort((first: Student, second: Student) =>
          +first[sortBy] - +second[sortBy])
        : studentsCopy.sort((first: Student, second: Student) =>
          +second[sortBy] - +first[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy.sort((first: Student, second: Student) =>
          calcAvgGrade(first) - calcAvgGrade(second))
        : studentsCopy.sort((first: Student, second: Student) =>
          calcAvgGrade(second) - calcAvgGrade(first));

    default: break;
  }

  return studentsCopy;
}
