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

const getAverage = (grades: number[]): number => {
  return grades.reduce((acc, cur) => acc + cur) / grades.length;
};

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((prevStudent: Student, nextStudent: Student) => {
    const orderType = (order === 'asc' ? 1 : -1);

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return prevStudent[sortBy].localeCompare(nextStudent[sortBy])
        * orderType;

      case SortType.Age:
      case SortType.Married:
        return (Number(prevStudent[sortBy]) - Number(nextStudent[sortBy]))
        * orderType;

      case SortType.AverageGrade:
        return (getAverage(prevStudent[sortBy])
        - getAverage(nextStudent[sortBy]))
        * orderType;

      default:
        throw new Error('Incorrect sort parameters!');
    }
  });
}
