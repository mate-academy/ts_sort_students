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

function calculateAvarageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = Object.assign([], students);

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copyStudents.sort((first, second) => (
          first[sortBy].localeCompare(second[sortBy])))
        : copyStudents.sort((first, second) => (
          second[sortBy].localeCompare(first[sortBy])));

    case SortType.Age:
      return order === 'asc'
        ? copyStudents.sort((first, second) => first[sortBy] - second[sortBy])
        : copyStudents.sort((first, second) => second[sortBy] - first[sortBy]);

    case SortType.Married:
      return order === 'asc'
        ? copyStudents.sort((first, second) => (
          Number(first[sortBy]) - Number(second[sortBy])))
        : copyStudents.sort((first, second) => (
          Number(second[sortBy]) - Number(first[sortBy])));

    case SortType.AverageGrade:
      return order === 'asc'
        ? copyStudents.sort((first, second) => (
          // eslint-disable-next-line
          calculateAvarageGrade(first[sortBy]) - calculateAvarageGrade(second[sortBy])))
        : copyStudents.sort((first, second) => (
          // eslint-disable-next-line
          calculateAvarageGrade(second[sortBy]) - calculateAvarageGrade(first[sortBy])));

    default:
      return copyStudents;
  }
}
