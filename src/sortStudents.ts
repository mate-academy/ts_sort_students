
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: [],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function avgGrade(student: Student): number {
  return student.grades.reduce(
    (prev: number, item: number) => prev + item, 0,
  ) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | undefined {
  const studentsCopy = [...students];
  const orderDirection = order === 'asc';

  switch (sortBy) {
    case 'name':
    case 'surname':
      return orderDirection
        ? studentsCopy.sort(
          (a, b) => a[sortBy].localeCompare(b[sortBy]),
        )
        : studentsCopy.sort(
          (a, b) => b[sortBy].localeCompare(a[sortBy]),
        );

    case 'age':
    case 'married':
      return orderDirection
        ? studentsCopy.sort(
          (a, b) => Number(a[sortBy]) - Number(b[sortBy]),
        )
        : studentsCopy.sort(
          (a, b) => Number(b[sortBy]) - Number(a[sortBy]),
        );

    case 'averageGrade':
      return orderDirection
        ? studentsCopy.sort((a, b) => {
          const aAvg = avgGrade(a);
          const bAvg = avgGrade(b);

          return aAvg - bAvg;
        })
        : studentsCopy.sort((a, b) => {
          const aAvg = avgGrade(a);
          const bAvg = avgGrade(b);

          return bAvg - aAvg;
        });

    default:
      return undefined;
  }
}
