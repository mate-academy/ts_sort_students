
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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const getAverageGrades = (marks:number[]): number => {
  return marks
    .reduce((acc, curr) => acc + curr, 0)
    / marks.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):
  Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((prevStudent, currStudent) => {
        return order === 'asc'
          ? prevStudent[sortBy].localeCompare(currStudent[sortBy])
          : currStudent[sortBy].localeCompare(prevStudent[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      studentsCopy.sort((prevStudent, currStudent) => {
        return order === 'asc'
          ? Number(prevStudent[sortBy]) - Number(currStudent[sortBy])
          : Number(currStudent[sortBy]) - Number(prevStudent[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((prevStudent, currStudent) => {
        return order === 'asc'
          ? getAverageGrades(prevStudent[sortBy])
              - getAverageGrades(currStudent[sortBy])
          : getAverageGrades(currStudent[sortBy])
              - getAverageGrades(prevStudent[sortBy]);
      });
      break;

    default:
      throw new Error('Invalid sort type');
  }

  return studentsCopy;
}
