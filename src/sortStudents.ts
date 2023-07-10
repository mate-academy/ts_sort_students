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

export type SortOrder = 'asc' | 'desk';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  const studentArr: Student[] = [...students];

  function getGrades(arr: number[]): number {
    return arr.reduce((a: number, b: number) => a + b) / arr.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentArr.sort((a: Student, b: Student) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])));
      break;

    case SortType.Age:
    case SortType.Married:
      studentArr.sort((a: Student, b: Student) => (order === 'asc'
        ? +a[sortBy] - +b[sortBy]
        : +b[sortBy] - +a[sortBy]));
      break;

    default:
      studentArr.sort((a: Student, b: Student) => (order === 'asc'
        ? getGrades(a.grades) - getGrades(b.grades)
        : getGrades(b.grades) - getGrades(a.grades)));
  }

  return studentArr;
}
