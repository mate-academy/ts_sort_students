
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

  return sortedStudents.sort((
    personA: Student,
    personB: Student,
  ): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? personA[sortBy].localeCompare(personB[sortBy])
          : personB[sortBy].localeCompare(personA[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(personA[sortBy]) - Number(personB[sortBy])
          : Number(personB[sortBy]) - Number(personA[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(personA[sortBy]) - getAverageGrade(personB[sortBy])
          : getAverageGrade(personB[sortBy]) - getAverageGrade(personA[sortBy]);

      default:
        return 0;
    }
  });
}
