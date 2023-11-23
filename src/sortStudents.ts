
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const compareFunction = (a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name: {
        return a.name.localeCompare(b.name);
      }

      case SortType.Surname: {
        return a.surname.localeCompare(b.surname);
      }

      case SortType.Age: {
        return a.age - b.age;
      }

      case SortType.Married: {
        if (a.married && !b.married) {
          return 1;
        }

        if (!a.married && b.married) {
          return -1;
        }

        return 0;
      }

      case SortType.AverageGrade: {
        const avgGradeA = a.grades.reduce(
          (acc, curr) => acc + curr, 0,
        ) / a.grades.length;
        const avgGradeB = b.grades.reduce(
          (acc, curr) => acc + curr, 0,
        ) / b.grades.length;

        return avgGradeA - avgGradeB;
      }

      default:
        return 0;
    }
  };

  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    const result = compareFunction(a, b);

    if (order === 'asc') {
      return result;
    }

    return -result;
  });

  return sortedStudents;
}
