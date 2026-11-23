
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

export function sortStudents(students : Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const result = [...students];

  if (sortBy === SortType.Name) {
    result.sort((studentA, studentB) => {
      const comparison = studentA.name.localeCompare(studentB.name);

      return order === 'asc' ? comparison : -comparison;
    });
  }

  if (sortBy === SortType.Surname) {
    result.sort((studentA, studentB) => {
      const comparison = studentA.surname.localeCompare(studentB.surname);

      return order === 'asc' ? comparison : -comparison;
    });
  }

  if (sortBy === SortType.Age) {
    result.sort((studentA, studentB) => {
      const comparison = studentA.age - studentB.age;

      return order === 'asc' ? comparison : -comparison;
    });
  }

  if (sortBy === SortType.Married) {
    result.sort((studentA, studentB) => {
      const valueA = Number(studentA.married);
      const valueB = Number(studentB.married);
      const comparison = valueA - valueB;

      return order === 'asc' ? comparison : -comparison;
    });
  }

  if (sortBy === SortType.AverageGrade) {
    result.sort((studentA, studentB) => {
      const averageA
      = studentA.grades.reduce((sum, grade) => sum + grade, 0)
        / studentA.grades.length;
      const averageB
      = studentB.grades.reduce((sum, grade) => sum + grade, 0)
        / studentB.grades.length;
      const comparison = averageA - averageB;

      return order === 'asc' ? comparison : -comparison;
    });
  }

  return result;
}
