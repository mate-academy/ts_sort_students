
export interface Student {
  name : string,
  surname : string,
  age : number,
  married : boolean,
  grades : number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

type AverageGrade = (x : Student) => number;

const callback = (
  prev : number, grade: number,
): number => prev + grade;

const getAverageGrade: AverageGrade
= (object) => object.grades.reduce(callback, 0) / object.grades.length;

export function sortStudents(
  students : Student[], sortBy : SortType, order : SortOrder,
) : Student[] {
  const arrayOfStudents = [...students];

  arrayOfStudents.sort((prev : Student, curr: Student) => {
    switch (sortBy) {
      case SortType.Name: case SortType.Surname:
        return order === 'asc'
          ? prev[sortBy].localeCompare(curr[sortBy])
          : curr[sortBy].localeCompare(prev[sortBy]);
      case SortType.Age: case SortType.Married:
        return order === 'asc'
          ? (+prev[sortBy]) - (+curr[sortBy])
          : (+curr[sortBy]) - (+prev[sortBy]);
      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(prev) - getAverageGrade(curr)
          : getAverageGrade(curr) - getAverageGrade(prev);
      default:
        throw new Error('Invalid SortType');
    }
  });

  return arrayOfStudents;
}
