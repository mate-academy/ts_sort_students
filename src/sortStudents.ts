
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copyStudents:Student[] = [...students];

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        return copyStudents.sort((a, b) => a.name.localeCompare(b.name));
      case SortType.Surname:
        return copyStudents.sort((a, b) => a.surname.localeCompare(b.surname));
      case SortType.Age:
        return copyStudents.sort((a:Student, b:Student) => a.age - b.age);
      case SortType.Married:
        return copyStudents.sort((a:Student, b:Student) => +a.married
          - +b.married);
      case SortType.AverageGrade:
        return copyStudents.sort((a, b) => {
          const firstNum = a.grades.reduce((prev, next) => {
            return prev + next;
          }, 0) / a.grades.length;
          const secondNum = b.grades.reduce((prev, next) => {
            return prev + next;
          }, 0) / b.grades.length;

          return firstNum - secondNum;
        });
      default:
        return copyStudents;
    }
  } else {
    switch (sortBy) {
      case SortType.Name:
        return copyStudents.sort((a, b) => b.name.localeCompare(a.name));
      case SortType.Surname:
        return copyStudents.sort((a, b) => b.surname.localeCompare(a.surname));
      case SortType.Age:
        return copyStudents.sort((a:Student, b:Student) => b.age - a.age);
      case SortType.Married:
        return copyStudents.sort((a:Student, b:Student) => +b.married
          - +a.married);
      case SortType.AverageGrade:
        return copyStudents.sort((a, b) => {
          const firstNum = a.grades.reduce((prev, next) => {
            return prev + next;
          }, 0) / a.grades.length;
          const secondNum = b.grades.reduce((prev, next) => {
            return prev + next;
          }, 0) / b.grades.length;

          return secondNum - firstNum;
        });
      default:
        return copyStudents;
    }
  }
}
