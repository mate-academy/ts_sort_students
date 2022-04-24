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
        if (studentA.married && !studentB.married) {
          return order === 'asc' ? 1 : -1;
        }

        if (!studentA.married && studentB.married) {
          return order === 'asc' ? -1 : 1;
        }

        return 0;
      }

      case SortType.AverageGrade: {
        const averageA = studentA.grades
          .reduce((a, b) => a + b, 0) / studentA.grades.length;
        const averageB = studentB.grades
          .reduce((a, b) => a + b, 0) / studentB.grades.length;

        return order === 'asc'
          ? averageA - averageB
          : averageB - averageA;
      }

      default:
        throw new Error('Unknown type of search!');
    }
  });
}
