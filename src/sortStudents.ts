
export interface Student {
  name: 'string',
  surname: 'string',
  age: number,
  married: boolean,
  grades: [],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAverage(arrStudent: number[]): number {
  return arrStudent.reduce((a: number, b: number) => a + b) / arrStudent.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const arrStudent: Student[] = [...students];

  switch (sortBy) {
    case SortType.Age:
      return arrStudent.sort((a: Student, b: Student) => (order === 'asc'
        ? a.age - b.age
        : b.age - a.age));

    case SortType.Name:
    case SortType.Surname:
      return arrStudent.sort((a: Student, b: Student) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])));
    case SortType.Married:
      return arrStudent.sort((a: Student, b: Student) => (order === 'asc'
        ? Number(a.married) - Number(b.married)
        : Number(b.married) - Number(a.married)));
    case SortType.AverageGrade:
      return arrStudent.sort((a: Student, b: Student) => (order === 'asc'
        ? getAverage(a.grades) - getAverage(b.grades)
        : getAverage(b.grades) - getAverage(a.grades)));
    default: return arrStudent;
  }
}
