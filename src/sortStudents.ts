
export interface Student {
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function calcAverage(arrOfGrades: number[]): number {
  return arrOfGrades.reduce((acc, grade) => {
    return acc + grade;
  }, 0) / arrOfGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  return [...students].sort((firstStudent, secondStudent) => {
    const direction = order === 'asc' ? 1 : -1;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (
          firstStudent[sortBy].localeCompare(secondStudent[sortBy]) * direction
        );

      case SortType.Age:
      case SortType.Married:
        return (
          (Number(firstStudent[sortBy]) - Number(secondStudent[sortBy]))
            * direction
        );

      case SortType.AverageGrade:
        return (
          calcAverage(firstStudent.grades) - calcAverage(secondStudent.grades)
        ) * direction;

      default:
        throw new Error('unknown sort type');
    }
  });
}
