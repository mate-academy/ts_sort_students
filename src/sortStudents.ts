
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

export function sortByAverageGrades(student1: Student, student2: Student)
  : number {
  const averageGrade1: number = student1.grades
    .reduce((sum:number, grade: number) => sum + grade, 0)
    / student1.grades.length;
  const averageGrade2: number = student2.grades
    .reduce((sum:number, grade: number) => sum + grade, 0)
    / student2.grades.length;

  return averageGrade1 - averageGrade2;
}

export function sortByIsMarried(student1: Student, student2: Student)
  : number {
  let result: number;

  if (student2.married === student1.married) {
    result = 0;
  } else if (student2.married) {
    result = 1;
  } else {
    result = -1;
  }

  return result;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const sortedStudents: Student[] = [...students];

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        sortedStudents.sort(
          (student1, student2) => student1.name.localeCompare(student2.name),
        );
        break;

      case SortType.Surname:
        sortedStudents.sort(
          (student1, student2) => student1.surname
            .localeCompare(student2.surname),
        );
        break;

      case SortType.Age:
        sortedStudents.sort(
          (student1, student2) => student1.age - student2.age,
        );
        break;

      case SortType.Married:
        sortedStudents.sort(
          (student1, student2) => sortByIsMarried(student2, student1),
        );
        break;

      case SortType.AverageGrade:
        sortedStudents.sort(
          (student1, student2) => sortByAverageGrades(student1, student2),
        );
        break;

      default:
        break;
    }
  } else {
    switch (sortBy) {
      case SortType.Name:
        sortedStudents.sort(
          (student1, student2) => student2.name.localeCompare(student1.name),
        );
        break;

      case SortType.Surname:
        sortedStudents.sort(
          (student1, student2) => student2.surname
            .localeCompare(student1.surname),
        );
        break;

      case SortType.Age:
        sortedStudents.sort(
          (student1, student2) => student2.age - student1.age,
        );
        break;

      case SortType.Married:
        sortedStudents.sort(
          (student1, student2) => sortByIsMarried(student1, student2),
        );
        break;

      case SortType.AverageGrade:
        sortedStudents.sort(
          (student1, student2) => sortByAverageGrades(student2, student1),
        );
        break;

      default:
        break;
    }
  }

  return sortedStudents;
}
