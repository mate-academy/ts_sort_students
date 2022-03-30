
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];
  let mul = 1;

  if (order === 'desc') {
    mul = -1;
  }

  switch (sortBy) {
    case SortType.Name:
      return copyStudents.sort((a, b) => (a.name.localeCompare(b.name)) * mul);
    case SortType.Surname:
      return copyStudents.sort((a, b) => (a.surname.localeCompare(b.surname))
      * mul);
    case SortType.Age:
      return copyStudents.sort((a: Student, b: Student) => (a.age - b.age)
      * mul);
    case SortType.Married:
      return copyStudents.sort((a: Student, b: Student) => (+a.married
        - +b.married) * mul);
    case SortType.AverageGrade:
      return copyStudents.sort((a, b) => {
        const firstNum = a.grades.reduce((prev, next) => {
          return prev + next;
        }, 0) / a.grades.length;
        const secondNum = b.grades.reduce((prev, next) => {
          return prev + next;
        }, 0) / b.grades.length;

        return (firstNum - secondNum) * mul;
      });
    default:
      return copyStudents;
  }
}
