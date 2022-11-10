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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
)
  : object {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((a, b) => {
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b.surname.localeCompare(a.surname);
      });

    case SortType.Age:
    case SortType.Married:
      return sortedStudents.sort((a, b) => {
        if (order === 'asc') {
          return +a[sortBy] - +b[sortBy];
        }

        return +b[sortBy] - +a[sortBy];
      });

    case SortType.AverageGrade:
      return sortedStudents.sort((a, b) => {
        if (order === 'asc') {
          return a.grades.reduce((prev, cur) => prev + cur, 0) / a.grades.length
          - b.grades.reduce((prev, cur) => prev + cur, 0) / b.grades.length;
        }

        return b.grades.reduce((prev, cur) => prev + cur, 0) / b.grades.length
        - a.grades.reduce((prev, cur) => prev + cur, 0) / a.grades.length;
      });

    default:
      throw new Error('Please, input the correct field');
  }
}
