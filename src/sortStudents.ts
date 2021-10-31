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
      if (order === 'asc') {
        result.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        result.sort((a, b) => b.name.localeCompare(a.name));
      }
      break;

    case 'surname':
      if (order === 'asc') {
        result.sort((a, b) => a.surname.localeCompare(b.surname));
      } else {
        result.sort((a, b) => b.surname.localeCompare(a.surname));
      }
      break;

    case 'age':
      if (order === 'asc') {
        result.sort((a, b) => a.age - b.age);
      } else {
        result.sort((a, b) => b.age - a.age);
      }
      break;

    case 'married':
      if (order === 'asc') {
        result.sort((a, b) => Number(a.married) - Number(b.married));
      } else {
        result.sort((a, b) => Number(b.married) - Number(a.married));
      }
      break;

    case 'averageGrade':
      if (order === 'asc') {
        result.sort((a, b) => average(a.grades) - average(b.grades));
      } else {
        result.sort((a, b) => average(b.grades) - average(a.grades));
      }
      break;

    default:
      return [];
  }

  return result;
}
