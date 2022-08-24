
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  function calculateAverage(grades: number[]):number {
    return grades.reduce((sum, value) => sum + value, 0) / grades.length;
  }

  copyStudents.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
        if (order === 'asc') {
          return a.age - b.age;
        }

        return b.age - a.age;

      case SortType.Married:
        if (order === 'asc') {
          return +a.married - +b.married;
        }

        return +b.married - +a.married;

      case SortType.AverageGrade:
        if (order === 'asc') {
          return calculateAverage(a.grades) - calculateAverage(b.grades);
        }

        return calculateAverage(b.grades) - calculateAverage(a.grades);

      default:
        throw new Error('Wrong data');
    }
  });

  return copyStudents;
}
