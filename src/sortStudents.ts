
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

function getAverage(grades: number[]): number {
  return grades.reduce((acc, item) => {
    return acc + item;
  }, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case 'name':
    case 'surname':
      copyStudents.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case 'age':
    case 'married':
      copyStudents.sort((a, b) => {
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });
      break;

    case 'grades':
      copyStudents.sort((a, b) => {
        const averageA: number = getAverage(a[sortBy]);
        const averageB: number = getAverage(b[sortBy]);

        return order === 'asc' ? averageA - averageB : averageB - averageA;
      });
      break;
    default:
      throw new Error('Your sort type is not correct!');
  }

  return copyStudents;
}
