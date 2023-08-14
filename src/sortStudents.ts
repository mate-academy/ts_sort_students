export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

const averageGrades = (arrOfGrades: number[]): number => {
  if (arrOfGrades.length === 0) {
    return 0;
  }

  return arrOfGrades.reduce((sum: number,
    grade: number) => sum + grade, 0) / arrOfGrades.length;
};

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copyOfStudent = [...students];
  const orderType = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      if (orderType) {
        return copyOfStudent.sort((a, b) => a.name.localeCompare(b.name));
      }

      return copyOfStudent.sort((a, b) => b.name.localeCompare(a.name));

    case SortType.Surname:
      if (orderType) {
        return copyOfStudent.sort((a, b) => a.surname.localeCompare(b.surname));
      }

      return copyOfStudent.sort((a, b) => b.surname.localeCompare(a.surname));

    case SortType.Age:
      if (orderType) {
        return copyOfStudent.sort((a, b) => a.age - b.age);
      }

      return copyOfStudent.sort((a, b) => b.age - a.age);

    case SortType.AverageGrade:
      if (orderType) {
        return copyOfStudent.sort((a, b) => averageGrades(a.grades)
        - averageGrades(b.grades));
      }

      return copyOfStudent.sort((a, b) => averageGrades(b.grades)
        - averageGrades(a.grades));

    case SortType.Married:
      if (orderType) {
        return copyOfStudent.sort((a, b) => Number(a.married)
          - Number(b.married));
      }

      return copyOfStudent.sort((a, b) => Number(b.married)
        - Number(a.married));

    default:
      return students;
  }
}
