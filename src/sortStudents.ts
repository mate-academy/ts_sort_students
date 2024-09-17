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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const getAverageGrade = (student: Student): number => student.grades.reduce(
    (prevGrade, currGrade) => prevGrade + currGrade,
  ) / student.grades.length;
  const orderDirection = order === 'asc' ? 1 : -1;

  return [...students].sort((aStudent: Student, bStudent: Student): number => {

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (aStudent[sortBy].localeCompare(bStudent[sortBy]))
          * orderDirection;

      case SortType.Age:
      case SortType.Married:
        return (+aStudent[sortBy] - +bStudent[sortBy])
          * orderDirection;

      case SortType.AverageGrade:
        return (getAverageGrade(aStudent) - getAverageGrade(bStudent))
          * orderDirection;

      default:
        throw new Error(`Invalid sort criteria: "${sortBy}"`);
    }
  });
}
