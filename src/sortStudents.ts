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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  let result:Student[] = [];
  const result1:Student[] = students.slice();

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      result = result1.sort((a:Student, b:Student) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;
    case SortType.Age:
    case SortType.Married:
      result = result1.sort((a:Student, b:Student) => {
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });
      break;
    case SortType.AverageGrade:
      result = result1.sort((a:Student, b:Student) => {
        const A = a[sortBy].reduce((prev, item) => prev + item
          , 0) / a[sortBy].length;
        const B = b[sortBy].reduce((prev, item) => prev + item
          , 0) / b[sortBy].length;

        return order === 'asc' ? A - B : B - A;
      });
      break;
    default:
      break;
  }

  return result;
}
