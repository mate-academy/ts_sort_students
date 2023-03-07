
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
  AverageGrade = 'grade',
}

export type SortOrder = 'asc' | 'desc';

const getAverageGrade = ({ grades }: Student): number => {
  return grades.reduce(
    (firstMark, secondMark) => firstMark + secondMark, 0,
  ) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];
  const checkOrder = order === 'asc' ? 1 : -1;

  return copyStudents.sort((currentStudent, nextStudent) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return currentStudent[sortBy].localeCompare(
          nextStudent[sortBy],
        ) * checkOrder;

      case SortType.Age:
      case SortType.Married:
        return (
          Number(currentStudent[sortBy]) - Number(nextStudent[sortBy])
        ) * checkOrder;

      case SortType.AverageGrade:
        return (
          getAverageGrade(currentStudent) - getAverageGrade(nextStudent)
        ) * checkOrder;

      default:
        throw new Error('This sort type is not valid');
    }
  });
}
