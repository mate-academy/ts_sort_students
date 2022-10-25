
export interface Student {
  name:string;
  surname:string;
  age:number;
  married:boolean;
  grades:number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age ='age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function averCal(arr: number[]): number {
  const average = arr.reduce((a, b) => a + b, 0) / arr.length;

  return average;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudent: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        newStudent
          .sort((a: Student, b:Student) => a[sortBy].localeCompare(b[sortBy]));
      }

      if (order === 'desc') {
        newStudent
          .sort((a:Student, b:Student) => b[sortBy].localeCompare(a[sortBy]));
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        newStudent
          .sort((a, b) => averCal(a[sortBy]) - averCal(b[sortBy]));
      }

      if (order === 'desc') {
        newStudent.sort((a, b) => averCal(b[sortBy]) - averCal(a[sortBy]));
      }
      break;

    default:
      if (order === 'asc') {
        newStudent.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]));
      }

      if (order === 'desc') {
        newStudent.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
      }
  }

  return newStudent;
}
