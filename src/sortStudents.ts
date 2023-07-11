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
): Student[] {
  const sortedStudents: Student[] = [...students];

  function averageMark({ grades }: Student): number {
    return grades.reduce((acc, cur) => acc + cur, 0) / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? sortedStudents.sort(
          (a, b) => a[sortBy].localeCompare(b[sortBy]),
        )

        : sortedStudents.sort(
          (a, b) => b[sortBy].localeCompare(a[sortBy]),
        );

    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? sortedStudents.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : sortedStudents.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

    case SortType.AverageGrade:
      return (order === 'asc')
        ? sortedStudents.sort(
          (a, b) => averageMark(a) - averageMark(b),
        )
        : sortedStudents.sort(
          (a, b) => averageMark(b) - averageMark(a),
        );

    default:
      throw new Error('Invalid sort type provided.');
  }
}
