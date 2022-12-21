
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  const allStudents = [...students];

  switch (sortBy) {
    case SortType.Age:
      return allStudents.sort((a: Student, b: Student) => {
        return (order === 'asc')
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });

    case SortType.Name:
    case SortType.Surname:
      return allStudents.sort((a: Student, b: Student) => {
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : a[sortBy].localeCompare(b[sortBy]);
      });

    case SortType.Married:
      return allStudents.filter((x) => x[sortBy] === true)
        .concat(allStudents.filter((x) => x[sortBy] === false));

    case SortType.AverageGrade:
      return allStudents.sort((a: Student, b: Student) => {
        function sortValue(arr: number[]): number {
          return arr.reduce((sum, currentValue) => sum + currentValue)
          / arr.length;
        }

        return (order === 'asc')
          ? sortValue(a[sortBy]) - sortValue(b[sortBy])
          : sortValue(b[sortBy]) - sortValue(a[sortBy]);
      });

    default:
      return allStudents;
  }
}
