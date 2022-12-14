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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const allStudents = [...students];

  switch (sortBy) {
    case SortType.Age:
      return allStudents.sort(
        (a: Student, b: Student) => {
          return order === 'asc'
            ? +a[sortBy] - +b[sortBy]
            : +b[sortBy] - +a[sortBy];
        },
      );

    case SortType.Name:
    case SortType.Surname:
      return allStudents.sort(
        (a: Student, b: Student) => {
          return order === 'asc'
            ? String(a[sortBy]).localeCompare(String(b[sortBy]))
            : String(b[sortBy]).localeCompare(String(a[sortBy]));
        },
      );

    case SortType.AverageGrade:
      return allStudents.sort(
        (a: Student, b: Student) => {
          function averageValue(arr: number[]): number {
            return arr.reduce((prevNum, nextNum) => prevNum + nextNum)
            / arr.length;
          }

          return order === 'asc'
            ? averageValue(a[sortBy]) - averageValue(b[sortBy])
            : averageValue(b[sortBy]) - averageValue(a[sortBy]);
        },
      );

    case SortType.Married:
      return allStudents
        .filter((x) => x[sortBy] === true)
        .concat(allStudents.filter((x) => x[sortBy] === false));

    default:
      return allStudents;
  }
}
