
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number []
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function calculateAverage(array: number[]):number {
  const sum = array.reduce((acc:number, curr:number) => acc + curr, 0);

  return (sum / array.length) || 0;
}

export function sortStudents(
  students: Student [],
  sortBy: keyof Student,
  order: SortOrder,
): Student[] {
  return [...students]
    .sort((a: Student, b: Student) => {
      const firstStudent = a[sortBy];
      const secondStudent = b[sortBy];
      const sortDirection = order === 'asc' ? 1 : -1;

      switch (sortBy) {
        case 'name':
        case 'surname':
          return sortDirection * String(firstStudent)
            .localeCompare(String(secondStudent));

        case 'age':
          return sortDirection * (Number(firstStudent) - Number(secondStudent));
        case 'married':
          return sortDirection * (+firstStudent - +secondStudent);
        case 'grades':

          return sortDirection
          * (calculateAverage(
            firstStudent as number[],
          ) - calculateAverage(
            secondStudent as number[],
          ));
        default:
          return 0;
      }
    });
}
