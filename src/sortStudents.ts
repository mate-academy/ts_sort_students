
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades : number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
type SortOrder = 'asc' | 'desc';
// export type SortOrder;

function calculateAverageGrades(array: number[]): number {
  const result = array.reduce((acc: number, val: number)
  : number => acc + val, 0);

  return result / array.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
) : Student[] {
  const filterdArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return filterdArr.sort((a: Student, b: Student) => {
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.Age:
      return filterdArr.sort((a: Student, b: Student) => {
        return (order === 'asc')
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });

    case SortType.Married:
      return filterdArr.sort((a: Student, b: Student) => {
        return (order === 'asc')
          ? +a[sortBy] - (+b[sortBy])
          : +b[sortBy] - (+a[sortBy]);
      });

    case SortType.AverageGrade:
      return filterdArr.sort((a: Student, b: Student) => {
        return (order === 'asc')
          ? calculateAverageGrades(a[sortBy])
            - calculateAverageGrades(b[sortBy])
          : calculateAverageGrades(b[sortBy])
          - calculateAverageGrades(a[sortBy]);
      });

    default:
      return filterdArr;
  }
}
