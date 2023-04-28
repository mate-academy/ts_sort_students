
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function sortNumberValues(
  order: string,
  value1: number,
  value2: number,
): number {
  if (order === 'asc') {
    return value1 - value2;
  }

  return value2 - value1;
}

function getAvarege(arr: number[]): number {
  return arr.reduce((sum, x) => sum + x, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents: Student[] = [...students];

  switch (sortBy) {
    case 'name':
    case 'surname':
      copiedStudents
        .sort((a: Student, b: Student) => {
          if (order === 'asc') {
            return a[sortBy].localeCompare(b[sortBy]);
          }

          return b[sortBy].localeCompare(a[sortBy]);
        });
      break;

    case 'age':
    case 'married':
      copiedStudents
        .sort((a: Student, b: Student) => {
          return sortNumberValues(order, Number(a[sortBy]), Number(b[sortBy]));
        });
      break;

    case 'grades':
      copiedStudents
        .sort((a: Student, b: Student) => {
          const avarageGrade1: number = getAvarege(a.grades);
          const avarageGrade2: number = getAvarege(b.grades);

          return sortNumberValues(order, avarageGrade1, avarageGrade2);
        });
      break;

    default:
      break;
  }

  return copiedStudents;
}
