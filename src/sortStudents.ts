
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: Array<number>,
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
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
): Array<Student> {
  const copy: Array<Student> = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        copy.sort((a: Student, b: Student) => a.name.localeCompare(b.name));
      } else {
        copy.sort((a: Student, b: Student) => b.name.localeCompare(a.name));
      }
      break;
    case SortType.Surname:
      copy.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a.surname.localeCompare(b.surname);
        }

        if (order === 'desc') {
          return b.surname.localeCompare(a.surname);
        }

        return 0;
      });
      break;
    case SortType.Age:
      if (order === 'asc') {
        copy.sort((a: Student, b: Student) => a.age - b.age);
      } else {
        copy.sort((a: Student, b: Student) => b.age - a.age);
      }
      break;
    case SortType.Married:
      if (order === 'asc') {
        copy.sort((a: Student, b: Student) => a.married - b.married);
      } else {
        copy.sort((a: Student, b: Student) => b.married - a.married);
      }
      break;
    case SortType.AverageGrade:
      copy.sort((a: Student, b: Student) => {
        const averageA = a.grades.reduce((prev, grade) => {
          return grade + prev;
        }, a.grades[0]) / a.grades.length;

        const averageB = b.grades.reduce((prev, grade) => {
          return grade + prev;
        }, b.grades[0]) / b.grades.length;

        if (order === 'asc') {
          return averageA - averageB;
        }

        if (order === 'desc') {
          return averageB - averageA;
        }

        return 0;
      });
      break;
    default:
      return copy;
  }

  return copy;
}
