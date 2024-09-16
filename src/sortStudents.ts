
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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students : Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((a: Student, b: Student) => {
        const partA = sortBy === SortType.Name
          ? a.name : a.surname;
        const partB = sortBy === SortType.Name
          ? b.name : b.surname;

        return order === 'asc'
          ? partA.localeCompare(partB)
          : partB.localeCompare(partA);
      });
      break;

    case SortType.Age:
      studentsCopy.sort((a, b) => {
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;
      });
      break;

    case SortType.Married:
      studentsCopy.sort((a, b) => {
        return order === 'asc'
          ? +a.married - +b.married
          : +b.married - +a.married;
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((a, b) => {
        const sumA = a.grades.reduce((prev, curr) => prev + curr, 0);
        const sumB = b.grades.reduce((prev, curr) => prev + curr, 0);
        const averageA = sumA / a.grades.length;
        const averageB = sumB / b.grades.length;

        return order === 'asc'
          ? averageA - averageB
          : averageB - averageA;
      });

      break;
    default:
  }

  return studentsCopy;
}
