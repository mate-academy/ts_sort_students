
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

const findSummOfGrades = (
  prev : number, grade: number,
): number => prev + grade;

const getAverageGrade: AverageGrade
= (object) => object.grades.reduce(findSummOfGrades, 0) / object.grades.length;

export function sortStudents(
  students : Student[], sortBy : SortType, order : SortOrder,
) : Student[] {
  const arrayOfStudents = [...students];
  const checkOrder = order === 'asc';

  arrayOfStudents.sort((prev : Student, curr: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return checkOrder
          ? prev[sortBy].localeCompare(curr[sortBy])
          : curr[sortBy].localeCompare(prev[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return checkOrder
          ? (+prev[sortBy]) - (+curr[sortBy])
          : (+curr[sortBy]) - (+prev[sortBy]);
      case SortType.AverageGrade:
        return checkOrder
          ? getAverageGrade(prev) - getAverageGrade(curr)
          : getAverageGrade(curr) - getAverageGrade(prev);
      default:
        throw new Error('Invalid SortType');
    }
  });

  return arrayOfStudents;
}
