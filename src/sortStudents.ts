
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function aveGrade(arr: number[]): number {
  return arr.reduce((sum, grad) => sum + grad) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        copy.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        copy.sort((a, b) => b.name.localeCompare(a.name));
      }

      break;
    case SortType.Surname:
      if (order === 'asc') {
        copy.sort((a, b) => a.surname.localeCompare(b.surname));
      } else {
        copy.sort((a, b) => b.surname.localeCompare(a.surname));
      }

      break;
    case SortType.Married:
      if (order === 'asc') {
        copy.sort((a, b) => +a.married - +b.married);
      }
      copy.sort((a, b) => +b.married - +a.married);

      break;
    case SortType.Age:
      if (order === 'asc') {
        copy.sort((a, b) => a.age - b.age);
      }
      copy.sort((a, b) => b.age - a.age);

      break;
    case SortType.AverageGrade:
      if (order === 'asc') {
        copy.sort((a, b) => aveGrade(a.grades) - aveGrade(b.grades));
      } else {
        copy.sort((a, b) => aveGrade(b.grades) - aveGrade(a.grades));
      }

      break;
    default: break;
  }

  return copy;
}
