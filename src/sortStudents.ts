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
        if (order === 'asc') {
          return studentA[sortBy].localeCompare(studentB[sortBy]);
        }

        return studentB[sortBy].localeCompare(studentA[sortBy]);

      case SortType.Age: {
        if (order === 'asc') {
          return studentA.age - studentB.age;
        }

        return studentB.age - studentA.age;
      }

      case SortType.Married: {
        if (order === 'asc' && studentA.married && !studentB.married) {
          return 1;
        }

        if (order === 'desc' && studentA.married && !studentB.married) {
          return -1;
        }

        return 0;
      }

      case SortType.AverageGrade: {
        const averageA = studentA.grades
          .reduce((a, b) => a + b, 0) / studentA.grades.length;
        const averageB = studentB.grades
          .reduce((a, b) => a + b, 0) / studentB.grades.length;

        if (order === 'asc') {
          return averageA - averageB;
        }

        return averageB - averageA;
      }

      default:
        break;
    }

    return 0;
  });
}
