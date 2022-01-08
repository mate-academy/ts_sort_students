
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
sortStudents(students: Student[], sortBy: string, order: SortOrder): object[] {
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
        let countA = 0;
        let sumA = 0;
        let countB = 0;
        let sumB = 0;

        a[sortBy].forEach((item: number) => {
          countA += 1;
          sumA += item;
        });

        const averageA = sumA / countA;

        b[sortBy].forEach((item: number) => {
          countB += 1;
          sumB += item;
        });

        const averageB = sumB / countB;

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
