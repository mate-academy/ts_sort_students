
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

function calculateAverage(data: number[]): number {
  const sum = data.reduce((acc: number, curr: number) => acc + curr, 0);

  return (sum / data.length) || 0;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students]
    .sort((a: Student, b: Student) => {
      const sortDirection = order === 'asc'
        ? 1
        : -1;

      switch (sortBy) {
        case 'name':
        case 'surname':
          return sortDirection * String(a[sortBy])
            .localeCompare(String(b[sortBy]));

        case 'age':
          return sortDirection * (Number(a[sortBy]) - Number(b[sortBy]));

        case 'married':
          return sortDirection * (+a[sortBy] - +b[sortBy]);

        case 'grades':
          // eslint-disable-next-line no-case-declarations
          const aAverageGrade = calculateAverage(a[sortBy] as number[]);
          // eslint-disable-next-line no-case-declarations
          const bAverageGrade = calculateAverage(b[sortBy] as number[]);

          return sortDirection * (aAverageGrade - bAverageGrade);

        default:
          return 0;
      }
    });
}
