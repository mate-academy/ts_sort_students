
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
        function calc(arr: number[]): number {
          return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
        }

        return order === 'desc'
          ? calc(b[sortBy]) - calc(a[sortBy])
          : calc(a[sortBy]) - calc(b[sortBy]);
      });
      break;
    default:
      throw new Error('There is an error!');
  }

  return res;
}
