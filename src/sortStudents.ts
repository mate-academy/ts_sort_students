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

  return [...students].sort((aStudent: Student, bStudent: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'desc'
          ? bStudent[sortBy].localeCompare(aStudent[sortBy])
          : aStudent[sortBy].localeCompare(bStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'desc'
          ? +bStudent[sortBy] - +aStudent[sortBy]
          : +aStudent[sortBy] - +bStudent[sortBy];

      case SortType.AverageGrade:
        return order === 'desc'
          ? getAverageGrade(bStudent) - getAverageGrade(aStudent)
          : getAverageGrade(aStudent) - getAverageGrade(bStudent);

      default:
        return 0;
    }
  });
}
