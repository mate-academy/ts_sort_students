
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  function calculateAverage(grades: number[]): number {
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  }

  return [...students].sort((a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (
          order === 'asc'
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy])
        );

      case SortType.Age:
        return (
          order === 'asc'
            ? a.age - b.age
            : b.age - a.age
        );

      case SortType.Married: {
        return order === 'asc'
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);
      }

      case SortType.AverageGrade: {
        return order === 'asc'
          ? calculateAverage(a.grades) - calculateAverage(b.grades)
          : calculateAverage(b.grades) - calculateAverage(a.grades);
      }

      default: {
        throw new Error('Wrong type');
      }
    }
  });
}
