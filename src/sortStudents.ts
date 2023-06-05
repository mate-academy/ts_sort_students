
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function calculateAverage(data: number[]):number {
  const sum = data.reduce((acc:number, curr:number) => acc + curr, 0);

  return (sum / data.length) || 0;
}

export function sortStudents(
  students: Student [],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students]
    .sort((a: Student, b: Student) => {
      const aProperty = a[sortBy];
      const bProperty = b[sortBy];
      const sortDirection = order === 'asc' ? 1 : -1;

      switch (sortBy) {
        case 'name':
        case 'surname':
          return sortDirection * String(aProperty)
            .localeCompare(String(bProperty));

        case 'age':
          return sortDirection * (Number(aProperty) - Number(bProperty));
        case 'married':
          return sortDirection * (+aProperty - +bProperty);
        case 'grades':

          return sortDirection
          * (calculateAverage(
            aProperty as number[],
          ) - calculateAverage(
            bProperty as number[],
          ));
        default:
          return 0;
      }
    });
}
