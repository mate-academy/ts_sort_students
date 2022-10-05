
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((prev: number, curr: number): number => (
    prev + curr
  ), 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents.sort((personA: Student, personB: Student) => (
        order === 'asc'
          ? personA[sortBy].localeCompare(personB[sortBy])
          : personB[sortBy].localeCompare(personA[sortBy])
      ));
      break;

    case SortType.Age:
      sortedStudents.sort((personA: Student, personB: Student) => (
        order === 'asc'
          ? personA[sortBy] - personB[sortBy]
          : personB[sortBy] - personA[sortBy]
      ));
      break;

    case SortType.Married:
      sortedStudents.sort((personA: Student, personB: Student) => (
        order === 'asc'
          ? Number(personA[sortBy]) - Number(personB[sortBy])
          : Number(personB[sortBy]) - Number(personA[sortBy])
      ));
      break;

    case SortType.AverageGrade:
      sortedStudents.sort((personA: Student, personB: Student) => (
        order === 'asc'
          ? getAverageGrade(personA[sortBy]) - getAverageGrade(personB[sortBy])
          : getAverageGrade(personB[sortBy]) - getAverageGrade(personA[sortBy])
      ));
      break;

    default:
      break;
  }

  return sortedStudents;
}
