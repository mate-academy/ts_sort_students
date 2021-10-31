
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
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const copy = students.map((student: Student) => ({ ...student }));

  if (sortBy === SortType.Name) {
    if (order === 'desc') {
      return copy.sort((student1: Student,
        student2: Student) => student2.name.localeCompare(student1.name));
    }

    return copy.sort((student1: Student,
      student2: Student) => student1.name.localeCompare(student2.name));
  }

  if (sortBy === SortType.Surname) {
    if (order === 'desc') {
      return copy.sort((student1: Student,
        student2: Student) => student2.surname.localeCompare(student1.surname));
    }

    return copy.sort((student1: Student,
      student2: Student) => student1.surname.localeCompare(student2.surname));
  }

  if (sortBy === SortType.Age) {
    if (order === 'desc') {
      return copy.sort((student1: Student,
        student2: Student) => student2.age - student1.age);
    }

    return copy.sort((student1: Student,
      student2: Student) => student1.age - student2.age);
  }

  if (sortBy === SortType.Married) {
    if (order === 'desc') {
      return copy.sort((student1: Student,
        student2: Student) => Number(student2.married)
        - Number(student1.married));
    }

    return copy.sort((student1: Student,
      student2: Student) => Number(student1.married)
      - Number(student2.married));
  }

  if (sortBy === SortType.AverageGrade) {
    return copy.sort((student1: Student,
      student2: Student) => {
      const avgGradeStudent1 = student1.grades.reduce(
        (prev, cur) => prev + cur,
      ) / student1.grades.length;
      const avgGradeStudent2 = student2.grades.reduce(
        (prev, cur) => prev + cur,
      ) / student2.grades.length;

      if (order === 'desc') {
        return avgGradeStudent2 - avgGradeStudent1;
      }

      return avgGradeStudent1 - avgGradeStudent2;
    });
  }

  return copy;
}
