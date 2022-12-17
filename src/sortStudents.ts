
export interface Student {
  name: string;
  surname: string,
  age: number,
  married: boolean,
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

function calculateAverageMark(marks: number[]): number {
  const sumOfMarks = marks.reduce((prev, current) => prev + current, 0);

  return sumOfMarks / marks.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        studentsCopy.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        studentsCopy.sort((a, b) => b.name.localeCompare(a.name));
      }
      break;

    case SortType.Surname:
      if (order === 'asc') {
        studentsCopy.sort((a, b) => a.surname.localeCompare(b.surname));
      } else {
        studentsCopy.sort((a, b) => b.surname.localeCompare(a.surname));
      }
      break;

    case SortType.Age:
      if (order === 'asc') {
        studentsCopy.sort((a, b) => a.age - b.age);
      } else {
        studentsCopy.sort((a, b) => b.age - a.age);
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        studentsCopy.sort((a, b) => Number(a.married) - Number(b.married));
      } else {
        studentsCopy.sort((a, b) => Number(b.married) - Number(a.married));
      }
      break;

    default:
      if (order === 'asc') {
        studentsCopy.sort((a, b) => calculateAverageMark(a.grades)
        - calculateAverageMark(b.grades));
      } else {
        studentsCopy.sort((a, b) => calculateAverageMark(b.grades)
        - calculateAverageMark(a.grades));
      }
  }

  return studentsCopy;
}
