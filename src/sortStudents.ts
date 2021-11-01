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
  AverageGrade = 'averageGrade',
}

function average(args: number[]): number {
  return args.reduce((previous, current) => previous + current) / args.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result = [...students];

  switch (sortBy) {
    case 'name':
    case 'surname':
      result.sort((a, b) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])));
      break;

    case 'age':
      result.sort((a, b) => (order === 'asc'
        ? a.age - b.age
        : b.age - a.age));
      break;

    case 'married':
      result.sort((a, b) => (order === 'asc'
        ? Number(a.married) - Number(b.married)
        : Number(b.married) - Number(a.married)));
      break;

    case 'averageGrade':
      result.sort((a, b) => (order === 'asc'
        ? average(a.grades) - average(b.grades)
        : average(b.grades) - average(a.grades)));
      break;

    default:
      return [];
  }

  return result;
}
