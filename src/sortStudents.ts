
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
) : Student[] | string {
  const copy = [...students];
  const getAvg = (grades: number[]): number => {
    return grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'desc'
        ? copy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]))
        : copy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'desc'
        ? copy.sort((a, b) => +b[sortBy] - +a[sortBy])
        : copy.sort((a, b) => +a[sortBy] - +b[sortBy]);

    case SortType.AverageGrade:
      return order === 'desc'
        ? copy.sort((a, b) => {
          return getAvg(b.grades) - getAvg(a.grades);
        })
        : copy.sort((a, b) => {
          return getAvg(a.grades) - getAvg(b.grades);
        });
    default:
      return 'Incorrect parameters';
  }
}
