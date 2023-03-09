
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

function getAverageGrades(grades: number[]): number {
  const averageAge = grades.reduce((prev, current) => prev + current);

  return averageAge / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      copy.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });

      break;

    case SortType.Surname:
      copy.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);
      });

      break;

    case SortType.Age:
      copy.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;
      });

      break;

    case SortType.Married:
      copy.sort((a: Student, b: Student) => {
        const aNum = a.married ? 1 : 0;
        const bNum = b.married ? 1 : 0;

        return order === 'asc'
          ? aNum - bNum
          : bNum - aNum;
      });

      break;

    case SortType.AverageGrade:
      copy.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? getAverageGrades(a.grades) - getAverageGrades(b.grades)
          : getAverageGrades(b.grades) - getAverageGrades(a.grades);
      });

      break;

    default:
      return students;
  }

  return copy;
}
