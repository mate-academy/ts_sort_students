
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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  let res: Student[] = [];

  switch (sortBy) {
    case 'age':
      res = [...students].sort((a: Student, b: Student): number => {
        return order === 'desc'
          ? b[sortBy] - a[sortBy]
          : a[sortBy] - b[sortBy];
      });
      break;

    case 'married':
      res = [...students].sort((a: Student, b: Student): number => {
        return order === 'desc'
          ? Number(b[sortBy]) - Number(a[sortBy])
          : Number(a[sortBy]) - Number(b[sortBy]);
      });
      break;

    case 'name':
    case 'surname':
      res = [...students].sort((a: Student, b: Student): number => {
        return order === 'desc'
          ? b[sortBy].localeCompare(a[sortBy])
          : a[sortBy].localeCompare(b[sortBy]);
      });
      break;

    case 'grades':
      res = [...students].sort((a: Student, b: Student): number => {
        return order === 'desc'
          ? b[sortBy].reduce((acc, cur) => acc + cur) / b[sortBy].length
            - a[sortBy].reduce((acc, cur) => acc + cur) / a[sortBy].length
          : a[sortBy].reduce((acc, cur) => acc + cur) / a[sortBy].length
            - b[sortBy].reduce((acc, cur) => acc + cur) / b[sortBy].length;
      });
      break;

    default:
      throw new Error('There is an error!');
  }

  /*

  if (sortBy === 'age') {
    res = [...students].sort((a: Student, b: Student): number => {
      if (order === 'desc') {
        return b[sortBy] - a[sortBy];
      }

      return a[sortBy] - b[sortBy];
    });
  }

  if (sortBy === 'married') {
    res = [...students].sort((a: Student, b: Student) => {
      if (order === 'desc') {
        return Number(b[sortBy]) - Number(a[sortBy]);
      }

      return Number(a[sortBy]) - Number(b[sortBy]);
    });
  }

  if (sortBy === 'name' || sortBy === 'surname') {
    res = [...students].sort((a: Student, b: Student): number => {
      if (order === 'desc') {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    });
  }

  if (sortBy === 'grades') {
    res = [...students].sort((a: Student, b: Student): number => {
      if (order === 'desc') {
        return b[sortBy]
          .reduce((acc, cur) => acc + cur) / b[sortBy].length
        - a[sortBy].reduce((acc, cur) => acc + cur) / a[sortBy].length;
      }

      return a[sortBy]
        .reduce((acc, cur) => acc + cur) / a[sortBy].length
      - b[sortBy].reduce((acc, cur) => acc + cur) / b[sortBy].length;
    });
  }
*/
  return res;
}
