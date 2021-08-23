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
  AverageGrade ='grades',
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const sortedArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? sortedArr.sort((a, b) => (
          a[sortBy].localeCompare(b[sortBy])
        ))
        : sortedArr.sort((a, b) => (
          b[sortBy].localeCompare(a[sortBy])
        ));

    case SortType.Age:
      return order === 'asc'
        ? sortedArr.sort((a, b) => (
          a[sortBy] - b[sortBy]
        ))
        : sortedArr.sort((a, b) => (
          b[sortBy] - a[sortBy]
        ));

    case SortType.Married:
      return order === 'asc'
        ? sortedArr.sort((a, b) => (
          a[sortBy] - b[sortBy]
        ))
        : sortedArr.sort((a, b) => (
          b[sortBy] - a[sortBy]
        ));

    case SortType.AverageGrade:
      return order === 'asc'
        ? sortedArr.sort((a, b) => (
          (a.grades.reduce((sum, val) => sum + val, 0) / a.grades.length)
          - (b.grades.reduce((total, v) => total + v, 0) / b.grades.length)
        ))
        : sortedArr.sort((a, b) => (
          (b.grades.reduce((sum, val) => sum + val, 0) / b.grades.length)
          - (a.grades.reduce((total, v) => total + v, 0) / a.grades.length)
        ));

    default: {
      break;
    }
  }

  return sortedArr;
}
