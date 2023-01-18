
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const findAverageGrade = (arr: number[]): number => {
  return arr.reduce((acc, num) => acc + num, 0) / arr.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const studentsToSort = [...students];

  switch (sortBy) {
    case SortType.Married:
    case SortType.Age:
      return studentsToSort.sort((a, b) => {
        let returnValue = +a[sortBy] - +b[sortBy];

        if (order === 'desc') {
          returnValue *= -1;
        }

        return returnValue;
      });
    case SortType.AverageGrade:
      return studentsToSort.sort((a, b) => {
        let returnValue
        = findAverageGrade(a[sortBy]) - findAverageGrade(b[sortBy]);

        if (order === 'desc') {
          returnValue *= -1;
        }

        return returnValue;
      });
    default:
      return studentsToSort.sort((a, b) => {
        let returnValue = 0;

        if (a[sortBy] < b[sortBy]) {
          returnValue = -1;
        }

        if (a[sortBy] > b[sortBy]) {
          returnValue = 1;
        }

        if (order === 'desc') {
          returnValue *= -1;
        }

        return returnValue;
      });
  }
}
