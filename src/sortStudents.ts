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
          (a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]),
        )

        : sortedStudents.sort(
          (a: Student, b: Student) => b[sortBy].localeCompare(a[sortBy]),
        );

    case SortType.Age:
      return (order === 'asc')
        ? sortedStudents.sort((a: Student, b: Student) => a.age - b.age)
        : sortedStudents.sort((a: Student, b: Student) => b.age - a.age);

    case SortType.Married:
      return (order === 'asc')
        ? sortedStudents.sort(
          (a: Student, b: Student) => Number(a.married) - Number(b.married),
        )
        : sortedStudents.sort(
          (a: Student, b: Student) => Number(b.married) - Number(a.married),
        );

    case SortType.AverageGrade:
      return (order === 'asc')
        ? sortedStudents.sort(
          (a: Student, b: Student) => averageMark(a) - averageMark(b),
        )
        : sortedStudents.sort(
          (a: Student, b: Student) => averageMark(b) - averageMark(a),
        );

    default:
      throw new Error('Something went wrong!');
  }
}
