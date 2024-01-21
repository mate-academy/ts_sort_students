
export interface Student {
  name: string
  surname: string
  age: number
  married: boolean
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'AverageGrade'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      copyStudents.sort((a, b) => {
        const valueA = a[SortType.Name];
        const valueB = b[SortType.Name];

        const sortValue = valueA.localeCompare(valueB);

        return order === 'asc' ? sortValue : -sortValue;
      });
      break;
    case SortType.Surname:
      copyStudents.sort((a, b) => {
        const valueA = a[SortType.Surname];
        const valueB = b[SortType.Surname];

        const sortValue = valueA.localeCompare(valueB);

        return order === 'asc' ? sortValue : -sortValue;
      });
      break;
    case SortType.Age:
      copyStudents.sort((a, b) => {
        const valueA = a[SortType.Age];
        const valueB = b[SortType.Age];

        const sortValue = valueA - valueB;

        return order === 'asc' ? sortValue : -sortValue;
      });
      break;
    case SortType.Married:
      copyStudents.sort((a, b) => {
        const valueA = a[SortType.Married] as unknown as number;
        const valueB = b[SortType.Married] as unknown as number;

        const sortValue = valueA - valueB;

        return order === 'asc' ? sortValue : -sortValue;
      });
      break;
    case SortType.AverageGrade:
      copyStudents.sort((a, b) => {
        const valueA = a.grades.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0) / a.grades.length;
        const valueB = b.grades.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0) / b.grades.length;

        const sortValue = valueA - valueB;

        return order === 'asc' ? sortValue : -sortValue;
      });
      break;

    default:
      break;
  }

  return copyStudents;
}
