
export interface Student {
  // describe Student interface
}

export enum SortType {
  // describe SortType enum
}

// create SortOrder type
export type SortOrder;


interface Student {
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

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = students.map((student: Student) => (
    ({ ...student })
  ));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copyStudents.sort((a: Student, b: Student) => (
          a[sortBy].localeCompare(b[sortBy])
        ))
        : copyStudents.sort((a: Student, b: Student) => (
          b[sortBy].localeCompare(a[sortBy])
        ));

    case SortType.Age:
      return order === 'asc'
        ? copyStudents.sort((a: Student, b: Student) => a[sortBy] - b[sortBy])
        : copyStudents.sort((a: Student, b: Student) => b[sortBy] - a[sortBy]);

    case SortType.Married:
      return order === 'asc'
        ? copyStudents.sort((a: Student, b: Student) => (
          +a[sortBy] - +b[sortBy]
        ))
        : copyStudents.sort((a: Student, b: Student) => (
          +b[sortBy] - +a[sortBy]
        ));

    case SortType.AverageGrade:
      return order === 'asc'
        ? copyStudents.sort((a: Student, b: Student) => (
          a[sortBy].reduce((x: number, y: number) => x + y) / a[sortBy].length
          - b[sortBy].reduce((x: number, y: number) => x + y) / b[sortBy].length
        ))
        : copyStudents.sort((a: Student, b: Student) => (
          b[sortBy].reduce((x: number, y: number) => x + y) / b[sortBy].length
          - a[sortBy].reduce((x: number, y: number) => x + y) / a[sortBy].length
        ));

    default:
      throw new Error('Input values are incorrect');
  }
}
