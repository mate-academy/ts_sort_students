/* eslint-disable max-len */

export interface Student {
  name: string,
  surname : string,
  age: number,
  married: boolean,
  grades: number[]
  // describe Student interface
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'averageGrade'
  // describe SortType enum
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder):Student[] {
  // write your function
  let sortedStudents = [...students];

  const getAverageGrade = (grades: number[]):number => {
    return grades.reduce((x, y) => x + y) / grades.length;
  };

  switch (sortBy) {
    case SortType.Name:
      switch (order) {
        case 'asc':
          sortedStudents = sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'desc':
          sortedStudents = sortedStudents.sort((a, b) => b.name.localeCompare(a.name));
          break;

        default:
          break;
      }
      break;

    case SortType.Surname:

      switch (order) {
        case 'asc':
          sortedStudents = sortedStudents.sort((a, b) => a.surname.localeCompare(b.surname));
          break;
        case 'desc':
          sortedStudents = sortedStudents.sort((a, b) => b.surname.localeCompare(a.surname));
          break;
        default:
          break;
      }
      break;

    case SortType.Age:
      switch (order) {
        case 'asc':
          sortedStudents = sortedStudents.sort((a, b) => a.age - b.age);
          break;
        case 'desc':
          sortedStudents = sortedStudents.sort((a, b) => b.age - a.age);
          break;
        default:
          break;
      }

      break;

    case SortType.Married:
      switch (order) {
        case 'asc':
          sortedStudents = sortedStudents.sort((a, b) => Number(a.married) - Number(b.married));
          break;
        case 'desc':
          sortedStudents = sortedStudents.sort((a, b) => Number(b.married) - Number(a.married));
          break;
        default:
          break;
      }
      break;

    case SortType.AverageGrade:
      switch (order) {
        case 'asc':
          sortedStudents = sortedStudents.sort((a, b) => getAverageGrade(a.grades) - getAverageGrade(b.grades));
          break;
        case 'desc':
          sortedStudents = sortedStudents.sort((a, b) => getAverageGrade(b.grades) - getAverageGrade(a.grades));

          break;
        default:
          break;
      }
      break;
    default:
      break;
  }

  return sortedStudents;
}
