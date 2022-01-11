
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

const getAverageGrade = (student: Student): number => {
  return student.grades.reduce((
    sum: number,
    grades: number,
  ): number => (sum + grades)) / student.grades.length;
};

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? studentCopy.sort((first, second) => (
          first[sortBy].localeCompare(second[sortBy])))
        : studentCopy.sort((first, second) => (
          second[sortBy].localeCompare(first[sortBy])));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? studentCopy.sort((first, second) => (
          +first[sortBy] - +second[sortBy]))
        : studentCopy.sort((first, second) => (
          +second[sortBy] - +first[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentCopy.sort((first, second) => (
          getAverageGrade(first) - getAverageGrade(second)))
        : studentCopy.sort((first, second) => (
          getAverageGrade(second) - getAverageGrade(first)));

    default:
      return [];
  }
}
