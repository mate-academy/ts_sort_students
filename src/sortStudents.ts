
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
  sortBy: SortType,
  order: SortOrder): object[] {
  const copyOfPeople = [...students];

  if (sortBy === SortType.Name && order === 'asc') {
    copyOfPeople.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === SortType.Name && order === 'desc') {
    copyOfPeople.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (sortBy === SortType.Surname && order === 'asc') {
    copyOfPeople.sort((a, b) => a.surname.localeCompare(b.surname));
  }

  if (sortBy === SortType.Surname && order === 'desc') {
    copyOfPeople.sort((a, b) => b.surname.localeCompare(a.surname));
  }

  if (sortBy === SortType.Age && order === 'asc') {
    copyOfPeople.sort((a, b) => a.age - b.age);
  }

  if (sortBy === SortType.Age && order === 'desc') {
    copyOfPeople.sort((a, b) => b.age - a.age);
  }

  if (sortBy === SortType.Married && order === 'asc') {
    copyOfPeople.sort((a, b) => Number(a.married) - Number(b.married));
  }

  if (sortBy === SortType.Married && order === 'desc') {
    copyOfPeople.sort((a, b) => Number(b.married) - Number(a.married));
  }

  if (sortBy === SortType.AverageGrade && order === 'asc') {
    copyOfPeople.sort((a, b) => {
      const firstGrades
      = a.grades.reduce((sum, x) => sum + x, 0) / a.grades.length;
      const secondGrades
      = b.grades.reduce((sum, x) => sum + x, 0) / b.grades.length;

      return firstGrades - secondGrades;
    });
  }

  if (sortBy === SortType.AverageGrade && order === 'desc') {
    copyOfPeople.sort((a, b) => {
      const firstGrades
        = a.grades.reduce((sum, x) => sum + x, 0) / a.grades.length;
      const secondGrades
        = b.grades.reduce((sum, x) => sum + x, 0) / b.grades.length;

      return secondGrades - firstGrades;
    });
  }

  return copyOfPeople;
}
