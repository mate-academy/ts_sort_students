export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? students
          .sort((std1, std2) => std1.name.localeCompare(std2.name))
        : students
          .sort((std1, std2) => std2.name.localeCompare(std1.name));
    case SortType.Surname:
      return order === 'asc'
        ? students
          .sort((std1, std2) => std1.surname.localeCompare(std2.surname))
        : students
          .sort((std1, std2) => std2.surname.localeCompare(std1.surname));
    case SortType.Age:
      return order === 'asc'
        ? students.sort((std1, std2) => std1.age - std2.age)
        : students.sort((std1, std2) => std2.age - std1.age);
    case SortType.Married:
      return order === 'asc'
        ? students.sort((std1, std2) => +std1.married - +std2.married)
        : students.sort((std1, std2) => +std2.married - +std1.married);
    case SortType.AverageGrade:
      return order === 'asc'
        ? students.sort((std1, std2) => {
          return (std1.grades.reduce((a, b) => a + b) / std1.grades.length)
            - (std2.grades.reduce((a, b) => a + b) / std2.grades.length);
        })
        : students.sort((std1, std2) => {
          return (std2.grades.reduce((a, b) => a + b) / std2.grades.length)
            - (std1.grades.reduce((a, b) => a + b) / std1.grades.length);
        });
    default:
      return students;
  }
}
