
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

export type SortOrder = 'asc' | 'desc';

function comparator(s1: Student, s2: Student,
  sortBy: SortType, order: SortOrder) : number {
  switch (typeof s1[sortBy]) {
    case 'string':
      return order === 'asc'
        ? (s1[sortBy] as string).localeCompare(s2[sortBy] as string)
        : (s2[sortBy] as string).localeCompare(s1[sortBy] as string);
    case 'number':
      return order === 'asc'
        ? (s1[sortBy] as number) - (s2[sortBy] as number)
        : (s2[sortBy] as number) - (s1[sortBy] as number);
    case 'object': {
      const s1Avg = (s1[sortBy] as number[])
        .reduce((acc, curr) => acc + curr, 0) / (s1[sortBy] as number[])
        .length;
      const s2Avg = (s2[sortBy] as number[])
        .reduce((acc, curr) => acc + curr, 0) / (s2[sortBy] as number[])
        .length;

      return order === 'asc' ? s1Avg - s2Avg : s2Avg - s1Avg;
    }
    default: return 0;
}
}

export function sortStudents(students: Student[], sortBy: SortType,
order: SortOrder): Student[] {
return [...students]
.sort((s1: Student, s2: Student) => comparator(s1, s2, sortBy, order));
}
