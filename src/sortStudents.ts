
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'AverageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  return [...students].sort((a: Student, b: Student) => {
    switch (sortBy) {
      case 'name': {
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);
      }

      case 'surname': {
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);
      }

      case 'age': {
        if (order === 'asc') {
          return a[sortBy] - b[sortBy];
        }

        return b[sortBy] - a[sortBy];
      }

      case 'married': {
        if (order === 'asc') {
          return +a[sortBy] - +b[sortBy];
        }

        return +b[sortBy] - +a[sortBy];
      }

      case 'AverageGrade': {
        const averageGradeA = a.grades
          .reduce((sum: number, el: number) => sum + el) / a.grades.length;
        const averageGradeB = b.grades
          .reduce((sum: number, el: number) => sum + el) / b.grades.length;

        if (order === 'asc') {
          return averageGradeA - averageGradeB;
        }

        return averageGradeB - averageGradeA;
      }

      default:
        return 0;
    }
  });
}
