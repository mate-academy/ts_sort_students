
export interface Student {
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
  AverageGrade = 'averageGrade',
}

type SortOrder = 'asc' | 'desc';

function getAverage(grades:number[]): number {
  return grades.reduce((prev, current) => prev + current) / grades.length;
}

export function sortStudents(students: Student[],
  sortBy:SortType, order:SortOrder):Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copyStudents.sort((a:Student, b: Student) => (
          a[sortBy].localeCompare(b[sortBy])
        ))
        : copyStudents.sort((a:Student, b: Student) => (
          b[sortBy].localeCompare(a[sortBy])
        ));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copyStudents.sort((a:Student, b: Student) => (
          Number(a[sortBy]) - Number(b[sortBy])
        ))
        : copyStudents.sort((a:Student, b: Student) => (
          Number(b[sortBy]) - Number(a[sortBy])
        ));

    case SortType.AverageGrade:
      return order === 'asc'
        ? copyStudents.sort((a:Student, b: Student) => (
          getAverage(a.grades) - getAverage(b.grades)
        ))
        : copyStudents.sort((a:Student, b: Student) => (
          getAverage(b.grades) - getAverage(a.grades)
        ));
    default: return students;
  }
}
