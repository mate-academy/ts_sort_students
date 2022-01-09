
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

export function
sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): object[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case 'age':
      if (order === 'asc') {
        sortedStudents.sort((a: Student, b: Student): number => {
          return a[sortBy] - b[sortBy];
        });
      } else {
        sortedStudents.sort((a: Student, b: Student): number => {
          return b[sortBy] - a[sortBy];
        });
      }
      break;
    case 'married':
      if (order === 'asc') {
        sortedStudents.sort((a: Student, b: Student): number => {
          return Number(a[sortBy]) - Number(b[sortBy]);
        });
      } else {
        sortedStudents.sort((a: Student, b: Student): number => {
          return Number(b[sortBy]) - Number(a[sortBy]);
        });
      }
      break;
    case 'grades':
      sortedStudents.sort((a: Student, b: Student): number => {
        let sumA = 0;
        let sumB = 0;

        a[sortBy].forEach((item: number) => {
          sumA += item;
        });

        const averageA = sumA / a[sortBy].length;

        b[sortBy].forEach((item: number) => {
          sumB += item;
        });

        const averageB = sumB / b[sortBy].length;

        if (order === 'asc') {
          return averageA - averageB;
        }

        return averageB - averageA;
      });
      break;

    default:
      if (order === 'asc') {
        sortedStudents.sort((a: Student, b: Student): number => {
          return a[sortBy].localeCompare(b[sortBy]);
        });
      } else {
        sortedStudents.sort((a: Student, b: Student): number => {
          return b[sortBy].localeCompare(a[sortBy]);
        });
      }
      break;
  }

  return sortedStudents;
}
