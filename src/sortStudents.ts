
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
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  // write your function
  const arrStudents = [...students];

  function sumAverage(value: number[]): number {
    return value.reduce((sum, current) => sum + current, 0) / value.length;
  }

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        return arrStudents.sort((a, b) => a.name.localeCompare(b.name));
      }

      if (order === 'desc') {
        return arrStudents.sort((a, b) => b.name.localeCompare(a.name));
      }
      break;
    case SortType.Surname:
      if (order === 'asc') {
        return arrStudents.sort((a, b) => a.surname.localeCompare(b.surname));
      }

      if (order === 'desc') {
        return arrStudents.sort((a, b) => b.surname.localeCompare(a.surname));
      }
      break;
    case SortType.Age:
      if (order === 'asc') {
        return arrStudents.sort((a, b) => a.age - b.age);
      }

      if (order === 'desc') {
        return arrStudents.sort((a, b) => b.age - a.age);
      }
      break;
    case SortType.Married:
      if (order === 'asc') {
        return arrStudents.sort((a, b) => a.married - b.married);
      }

      if (order === 'desc') {
        return arrStudents.sort((a, b) => b.married - a.married);
      }
      break;
    case SortType.AverageGrade:
      if (order === 'asc') {
        return arrStudents.sort((a, b) => sumAverage(a.grades)
          - sumAverage(b.grades));
      }

      if (order === 'desc') {
        return arrStudents.sort((a, b) => sumAverage(b.grades)
          - sumAverage(a.grades));
      }
      break;

    default: return arrStudents;
  }

  return arrStudents;
}
