
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

export type SortOrder = 'desc' | 'asc';

function getAverageMark(marksArray: number[]): number {
  return marksArray.reduce((sum, el) => sum + el, 0) / marksArray.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | string {
  const studentsCopyArray = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopyArray.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Age:
      return studentsCopyArray.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });

    case SortType.Married:
      studentsCopyArray.sort((a, b) => {
        return order === 'asc'
          ? +(a[sortBy]) - (+b[sortBy])
          : +(b[sortBy]) - (+a[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      return studentsCopyArray.sort((a, b) => {
        return order === 'asc'
          ? getAverageMark(a[sortBy]) - getAverageMark(b[sortBy])
          : getAverageMark(b[sortBy]) - getAverageMark(a[sortBy]);
      });

    default:
      throw new Error('Error');
  }

  return studentsCopyArray;
}
