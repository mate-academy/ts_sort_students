
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
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  const averageGrades = (grades: number[]): number => {
    return grades
      .reduce((acc: number, cur: number) => acc + cur, 0) / grades.length;
  };

  switch (sortBy) {
    case SortType.Name:
      copy.sort((a:Student, b: Student) => {
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });

      break;
    case SortType.Surname:
      copy.sort((a:Student, b: Student) => {
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);
      });

      break;
    case SortType.Age:
      copy.sort((a:Student, b: Student) => {
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;
      });

      break;
    case SortType.Married:
      copy.sort((a:Student, b: Student) => {
        return order === 'asc'
          ? +a.married - +b.married
          : +b.married - +a.married;
      });

      break;
    default:
      copy.sort((a:Student, b: Student) => {
        return order === 'asc'
          ? averageGrades(a.grades) - averageGrades(b.grades)
          : averageGrades(b.grades) - averageGrades(a.grades);
      });

      break;
  }

  return copy;
}
