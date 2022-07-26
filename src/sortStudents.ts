
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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((a: number, b: number) => a + b, 0) / grades.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArray = [...students];

  switch (sortBy) {
    case SortType.Name:
      studentsArray.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });

      break;

    case SortType.Surname:
      studentsArray.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);
      });

      break;

    case SortType.Age:
      studentsArray.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;
      });

      break;

    case SortType.Married:
      studentsArray.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? +a.married - +b.married
          : +b.married - +a.married;
      });

      break;

    default:
      studentsArray.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? getAverageGrade(a.grades) - getAverageGrade(b.grades)
          : getAverageGrade(b.grades) - getAverageGrade(a.grades);
      });

      break;
  }

  return studentsArray;
}
