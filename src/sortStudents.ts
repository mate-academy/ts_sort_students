
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrades(person: Student): number {
  return person.grades.reduce((accum, curr) => accum + curr, 0)
  / person.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Name: {
        return (order === 'asc')
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }

      case SortType.Surname: {
        return (order === 'asc')
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(b.surname);
      }

      case SortType.Age: {
        return (order === 'asc')
          ? a.age - b.age
          : b.age - a.age;
      }

      case SortType.Married: {
        return (order === 'asc')
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);
      }

      case SortType.AverageGrade: {
        return (order === 'asc')
          ? averageInArray(a) - averageInArray(b)
          : averageInArray(b) - averageInArray(a);
      }

      default: {
        return 0;
      }
    }
  });
}
