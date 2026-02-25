
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const copy: Student[] = [...students];

  copy.sort((a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name:
        if (order === 'asc') {
          return a.name.localeCompare(b.name);
        }

        return b.name.localeCompare(a.name);

      case SortType.Surname:
        if (order === 'asc') {
          return a.surname.localeCompare(b.surname);
        }

        return b.surname.localeCompare(a.surname);

      case SortType.Age:
        if (order === 'asc') {
          return a.age - b.age;
        }

        return b.age - a.age;

      case SortType.Married:
        if (order === 'asc') {
          return Number(a.married) - Number(b.married);
        }

        return Number(b.married) - Number(a.married);

      case SortType.AverageGrade: {
        const avgA: number
          = a.grades.reduce((total: number, current:number) => {
            return total + current;
          }, 0) / a.grades.length;

        const avgB: number
          = b.grades.reduce((total: number, current:number) => {
            return total + current;
          }, 0) / b.grades.length;

        if (order === 'asc') {
          return avgA - avgB;
        }

        return avgB - avgA;
      }
      default:
        return 0;
    }
  });

  return copy;
}
