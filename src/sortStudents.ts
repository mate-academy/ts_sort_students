
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  // write your function
  let resultArray: Student[] = [];

  switch (sortBy) {
    case SortType.Name:
      resultArray = [...students].sort((a, b) => {
        return order === 'asc'
          ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      });
      break;
    case SortType.Surname:
      resultArray = [...students].sort((a, b) => {
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);
      });
      break;
    case SortType.Age:
      resultArray = [...students].sort((a, b) => {
        return order === 'asc'
          ? a.age - b.age : b.age - a.age;
      });
      break;
      // return order === 'asc'
      //   ? students.sort((a, b) => a.age - b.age)
      //   : students.sort((a, b) => b.age - a.age);
    case SortType.Married:
      resultArray = [...students].sort((a, b) => {
        return order === 'asc'
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);
      });
      break;
    case SortType.AverageGrade:
      resultArray = [...students].sort((a, b) => {
        return order === 'asc'
          ? a.grades.reduce((sum, n) => sum + n, 0) / a.grades.length
            - b.grades.reduce((sum, n) => sum + n, 0) / b.grades.length
          : b.grades.reduce((sum, n) => sum + n, 0) / b.grades.length
            - a.grades.reduce((sum, n) => sum + n, 0) / a.grades.length;
      });
      break;
    default:
      return students;
  }

  return resultArray;
}
