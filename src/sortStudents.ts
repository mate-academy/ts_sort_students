
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: [];
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc'| 'desc';

function getAverageAge(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudent: Student[] = [...students];

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        return copyOfStudent.sort((a, b) => a.name.localeCompare(b.name));

      case SortType.Surname:
        return copyOfStudent.sort((a, b) => a.surname.localeCompare(b.surname));

      case SortType.Age:
        return copyOfStudent.sort((a, b) => a.age - b.age);

      case SortType.Married:
        return copyOfStudent.sort((a, b) => Number(a.married)
          - Number(b.married));

      case SortType.AverageGrade:
        return copyOfStudent.sort((a, b) => getAverageAge(a.grades)
          - getAverageAge(b.grades));
      default: return [];
    }
  } else if (order === 'desc') {
    switch (sortBy) {
      case SortType.Name:
        return copyOfStudent.sort((a, b) => b.name.localeCompare(a.name));

      case SortType.Surname:
        return copyOfStudent.sort((a, b) => b.surname.localeCompare(a.surname));

      case SortType.Age:
        return copyOfStudent.sort((a, b) => b.age - a.age);

      case SortType.Married:
        return copyOfStudent.sort((a, b) => Number(b.married)
          - Number(a.married));

      case SortType.AverageGrade:
        return copyOfStudent.sort((a, b) => getAverageAge(b.grades)
          - getAverageAge(a.grades));
      default: return [];
    }
  }

  return copyOfStudent;
}
