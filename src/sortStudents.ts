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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const sortedStudents = students.slice();

  sortedStudents.sort((a, b) => {
    let comparison = 0;

    if (sortBy === SortType.Name) {
      comparison = a.name.localeCompare(b.name);
    } else if (sortBy === SortType.Surname) {
      comparison = a.surname.localeCompare(b.surname);
    } else if (sortBy === SortType.Age) {
      comparison = a.age - b.age;
    } else if (sortBy === SortType.Married) {
      // eslint-disable-next-line no-nested-ternary
      comparison = a.married === b.married ? 0 : a.married ? 1 : -1;
    } else if (sortBy === SortType.AverageGrade) {
      const avgA = a.grades.reduce((sum, grade) => sum + grade, 0)
      / a.grades.length;
      const avgB = b.grades.reduce((sum, grade) => sum + grade, 0)
      / b.grades.length;

      comparison = avgA - avgB;
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return sortedStudents;
}
