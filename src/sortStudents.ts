
export interface Student {
  name: string,
  surname: string,
  age:number,
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

export type SortOrder = 'asc' | 'desc';

function sortStringTypeACS(a: string, b: string): number {
  return a.localeCompare(b);
}

function sortStringTypeDESC(a: string, b: string): number {
  return b.localeCompare(a);
}

function sortNumberTypeACS(a: number | boolean, b: number | boolean): number {
  return +a - +b;
}

function sortNumberTypeDESC(a: number | boolean, b: number | boolean): number {
  return +b - +a;
}

function sortArrTypeACS(a: number[], b: number[]): number {
  return a.reduce((acc, el) => acc + el) / a.length
  - b.reduce((acc, el) => acc + el) / b.length;
}

function sortArrTypeDESC(a: number[], b: number[]): number {
  return b.reduce((acc, el) => acc + el) / b.length
  - a.reduce((acc, el) => acc + el) / a.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const filteredStudents = [...students];

  return filteredStudents.sort((a: Student, b: Student) => {
    if (typeof a[sortBy] === 'string' && typeof b[sortBy] === 'string') {
      return order === 'asc'
        ? sortStringTypeACS(a[sortBy] as string, b[sortBy] as string)
        : sortStringTypeDESC(a[sortBy] as string, b[sortBy] as string);
    }

    if (typeof a[sortBy] === 'number' && typeof b[sortBy] === 'number') {
      return order === 'asc'
        ? sortNumberTypeACS(a[sortBy] as number, b[sortBy] as number)
        : sortNumberTypeDESC(a[sortBy] as number, b[sortBy] as number);
    }

    if (typeof a[sortBy] === 'boolean' && typeof b[sortBy] === 'boolean') {
      return order === 'asc'
        ? sortNumberTypeACS(a[sortBy] as boolean, b[sortBy] as boolean)
        : sortNumberTypeDESC(a[sortBy] as boolean, b[sortBy] as boolean);
    }

    if (typeof a[sortBy] === 'object' && typeof b[sortBy] === 'object') {
      return order === 'asc'
        ? sortArrTypeACS(a[sortBy] as number[], b[sortBy] as number[])
        : sortArrTypeDESC(a[sortBy] as number[], b[sortBy] as number[]);
    }

    return 0;
  });
}
