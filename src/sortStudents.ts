
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverage(object: Student): number {
  return object.grades.reduce((sum: number, x: number) => sum + x)
  / object.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const resultStudents: Student[] = [...students];

  resultStudents.sort((a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.AverageGrade:
        return (order === 'asc')
          ? getAverage(a) - getAverage(b)
          : getAverage(b) - getAverage(a);

      case SortType.Name:
        return (order === 'asc')
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);

      case SortType.Surname:
        return (order === 'asc')
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);

      case SortType.Age:
        return (order === 'asc')
          ? a.age - b.age
          : b.age - a.age;

      case SortType.Married:
        return (order === 'asc')
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);

      default:
        return 0;
    }
  });

  return resultStudents;
}
