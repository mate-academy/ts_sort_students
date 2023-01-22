
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

function averalCalculation(arr: number[]): number {
  const average = arr.reduce((a, b) => a + b, 0) / arr.length;

  return average;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudent: Student[] = [...students];

  return newStudent.sort((
    a: Student,
    b: Student,
  ):number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? averalCalculation(a[sortBy]) - averalCalculation(b[sortBy])
          : averalCalculation(b[sortBy]) - averalCalculation(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      default:
        return 0;
    }
  });
}
