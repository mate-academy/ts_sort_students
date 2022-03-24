
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
  AverageGrade = 'grade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  function averageGrad(arr: number[]): number {
    return arr.reduce((a: number, b: number): number => (a + b)) / arr.length;
  }

  const newArray = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? newArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : newArray.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? newArray.sort((a, b) => +a[sortBy] - +b[sortBy])
        : newArray.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return (order === 'asc')
        ? newArray.sort((a, b) => averageGrad(a.grades) - averageGrad(b.grades))
        : newArray.sort((a, b) => {
          return averageGrad(b.grades) - averageGrad(a.grades);
        });

    default:
      return newArray;
  }
}
