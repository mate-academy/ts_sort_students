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

export type SortOrder = 'asc' | 'desc';

const average = (arr: number[]): number => {
  return arr.reduce((acc, el) => acc + el, 0) / arr.length;
};

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const clone = [...students];

  switch (sortBy) {
    case 'name':
    case 'surname':
      return order === 'asc'
        ? clone.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : clone.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case 'age':
    case 'married':
      return order === 'asc'
        ? clone.sort((a, b) => +a[sortBy] - +b[sortBy])
        : clone.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case 'grades':
      return order === 'asc'
        ? clone.sort((a, b) => average(a.grades) - average(b.grades))
        : clone.sort((a, b) => average(b.grades) - average(a.grades));

    default:
      break;
  }

  return clone;
}
