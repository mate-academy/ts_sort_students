export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
  sort(): void;
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function getAverage(items: number[]): number {
  return items.reduce((acc, grade) => acc + grade, 0)
    / items.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: string): Student[] {
  const sorted = [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);

      case SortType.Surname:
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);

      case SortType.Age:
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;

      case SortType.Married:
        return order === 'asc'
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverage(a.grades) - getAverage(b.grades)
          : getAverage(b.grades) - getAverage(a.grades);

      default:
        return 0;
    }
  });

  return sorted;
}
