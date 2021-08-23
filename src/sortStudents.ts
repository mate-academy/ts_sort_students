// describe Student type
// create and export SortType enum
// create SortOrder type

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
      return copyStudents.sort((a: Student, b: Student) => {
        if (a[sortBy] === b[sortBy]) {
          return 0;
        }

        if (order === 'asc') {
          return a[sortBy] ? 1 : -1;
        }

        return a[sortBy] ? -1 : 1;
      });

    case SortType.AverageGrade:
      return order === 'asc'
        ? copyStudents.sort((a: Student, b: Student) => (
          a[sortBy].reduce((x: number, y: number) => x + y)
          - b[sortBy].reduce((x: number, y: number) => x + y)
        ))
        : copyStudents.sort((a: Student, b: Student) => (
          b[sortBy].reduce((x: number, y: number) => x + y)
          - a[sortBy].reduce((x: number, y: number) => x + y)
        ));

    default:
      throw new Error('Input values are incorrect');
  }
}
