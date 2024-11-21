
export interface Student {
  name: string;
  surname: string;
  age:number;
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades:number[]):number {
  return grades.reduce((previous:number, current:number) => previous
  + current, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? sortedStudents.sort((first, second) => (
          first[sortBy].localeCompare(second[sortBy])))
        : sortedStudents.sort((first, second) => (
          second[sortBy].localeCompare(first[sortBy])));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? sortedStudents.sort((first, second) => (
          Number(first[sortBy]) - Number((second[sortBy]))))
        : sortedStudents.sort((first, second) => (
          Number(second[sortBy]) - Number(first[sortBy])));

    case SortType.AverageGrade:
      return order === 'asc'
        ? sortedStudents.sort((first, second) => (
          getAverageGrade(first[sortBy]) - getAverageGrade(second[sortBy])))
        : sortedStudents.sort((first, second) => (
          getAverageGrade(second[sortBy]) - getAverageGrade(first[sortBy])));

    default:
      return sortedStudents;
  }
}
