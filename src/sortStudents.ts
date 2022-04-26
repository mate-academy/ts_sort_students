
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

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const result: Student[] = [...students];

  function averageGrade(student: Student): number {
    return student.grades.reduce((a: number, b: number) => (
      a + b), 0) / student.grades.length;
  }

  switch (sortBy) {
    case (SortType.Age):
      if (order === 'asc') {
        result.sort((a: Student, b: Student): number => a.age - b.age);
      } else {
        result.sort((a: Student, b: Student): number => b.age - a.age);
      }
      break;

    case (SortType.Married):
      if (order === 'asc') {
        result.sort((a: Student, b: Student): number => (
          +a.married - +b.married));
      } else {
        result.sort((a: Student, b: Student): number => (
          +b.married - +a.married));
      }
      break;

    case (SortType.Name):
    case (SortType.Surname):
      if (order === 'asc') {
        result.sort((a: Student, b: Student): number => (
          a[sortBy].localeCompare(b[sortBy])));
      } else {
        result.sort((a: Student, b: Student): number => (
          b[sortBy].localeCompare(a[sortBy])));
      }
      break;

    case (SortType.AverageGrade):
      if (order === 'asc') {
        result.sort((a: Student, b: Student): number => (
          averageGrade(a) - averageGrade(b)));
      } else {
        result.sort((a: Student, b: Student): number => (
          averageGrade(b) - averageGrade(a)));
      }
      break;

    default:
      break;
  }

  return result;
}
