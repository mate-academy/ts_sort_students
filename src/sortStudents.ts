
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((prevStudent: Student, nextStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? prevStudent[sortBy].localeCompare(nextStudent[sortBy])
          : nextStudent[sortBy].localeCompare(prevStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(prevStudent[sortBy]) - Number(nextStudent[sortBy])
          : Number(nextStudent[sortBy]) - Number(prevStudent[sortBy]);

      case SortType.AverageGrade:
        return order === 'desc'
          ? getAverage(nextStudent[sortBy]) - getAverage(prevStudent[sortBy])
          : getAverage(prevStudent[sortBy]) - getAverage(nextStudent[sortBy]);

      default:
        throw new Error();
    }
  });
}
