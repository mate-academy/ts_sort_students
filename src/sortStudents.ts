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

  return arrOfGrades.reduce((sum: number, grade: number) => sum + grade, 0) / arrOfGrades.length;
};

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] {
  const copyOfStudent = [...students];
  const orderType = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      return copyOfStudent.sort((a, b) => orderType
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name));
    case SortType.Surname:
      return copyOfStudent.sort((a, b) => orderType
      ? a.surname.localeCompare(b.surname)
      : b.surname.localeCompare(a.surname));
    case SortType.Age:
      return copyOfStudent.sort((a, b) => orderType
      ? a.age - b.age
      : b.age - a.age);
    case SortType.AverageGrade:
      return copyOfStudent.sort((a, b) => orderType
      ? averageGrades(a.grades) - averageGrades(b.grades)
      : averageGrades(b.grades) - averageGrades(a.grades));
    case SortType.Married:
      return copyOfStudent.sort((a, b) => orderType
      ? Number(a.married) - Number(b.married)
      : Number(b.married) - Number(a.married));
    default:
      return students;
  }
}
