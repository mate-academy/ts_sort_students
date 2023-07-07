
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
export type SortOrder = string;

function average(arr: number[]):number {
  return arr.reduce((prev, currentValue) => prev + currentValue) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copystudents = [...students];

  if ((sortBy === SortType.Name || sortBy === SortType.Surname)
  && order === 'asc') {
    return copystudents.sort((a, b) => {
      return a[sortBy].localeCompare(b[sortBy]);
    });
  }

  if ((sortBy === SortType.Name || sortBy === SortType.Surname)
  && order === 'desc') {
    return copystudents.sort((a, b) => {
      return b[sortBy].localeCompare(a[sortBy]);
    });
  }

  if ((sortBy === SortType.Age || sortBy === SortType.Married)
  && order === 'asc') {
    return copystudents.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]));
  }

  if ((sortBy === SortType.Age || sortBy === SortType.Married)
  && order === 'desc') {
    return copystudents.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
  }

  if ((sortBy === SortType.AverageGrade) && order === 'desc') {
    return copystudents.sort((a, b) => {
      return (average(b[sortBy])) - average(a[sortBy]);
    });
  }

  if ((sortBy === SortType.AverageGrade) && order === 'asc') {
    return copystudents.sort((a, b) => {
      return (average(a[sortBy])) - average(b[sortBy]);
    });
  }

  return copystudents;
}
