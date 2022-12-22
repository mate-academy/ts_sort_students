
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const getAverageNumber = (arr: number[]): number => {
  return arr.reduce((prev, current) => prev + current, 0) / arr.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  // write your function
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((firstStudent, secondStudent) => {
        return order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);
      });

      return studentsCopy;

    case SortType.Age:
    case SortType.Married:
      studentsCopy.sort((firstStudent, secondStudent) => {
        return order === 'asc'
          ? Number(firstStudent[sortBy]) - Number(secondStudent[sortBy])
          : Number(secondStudent[sortBy]) - Number(firstStudent[sortBy]);
      });

      return studentsCopy;

    case SortType.AverageGrade:
      studentsCopy.sort((firstStudent, secondStudent) => {
        return order === 'asc'
          ? getAverageNumber(firstStudent[sortBy])
          - getAverageNumber(secondStudent[sortBy])
          : getAverageNumber(secondStudent[sortBy])
          - getAverageNumber(firstStudent[sortBy]);
      });

      return studentsCopy;

    default:
      throw Error('This type doesn\'t exist');
  }
}
