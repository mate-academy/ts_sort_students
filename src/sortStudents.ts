export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  return [...students].sort((studentA, studentB) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);

      case SortType.Age: {
        return order === 'asc'
          ? studentA.age - studentB.age
          : studentB.age - studentA.age;
      }

      case SortType.Married: {
        return order === 'asc'
          ? +studentA.married - +studentB.married
          : +studentB.married - +studentA.married;
      }

      case SortType.AverageGrade: {
        const averageStudentA = studentA.grades
          .reduce((a, b) => a + b, 0) / studentA.grades.length;
        const averageStudentB = studentB.grades
          .reduce((a, b) => a + b, 0) / studentB.grades.length;

        return order === 'asc'
          ? averageStudentA - averageStudentB
          : averageStudentB - averageStudentA;
      }

      default:
        throw new Error('Unknown type of search!');
    }
  });
}
