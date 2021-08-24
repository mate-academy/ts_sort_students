// describe Student type
// create and export SortType enum
// create SortOrder type]
interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}
// import { FileWatcherEventKind } from "typescript";

function getAnAverageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newArrOfStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      newArrOfStudents.sort((a, b) => (
        order === SortOrder.Asc
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])
      ));
      break;

    case SortType.Age:
      newArrOfStudents.sort((a, b) => (
        order === SortOrder.Asc
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy]
      ));
      break;

    case SortType.Married:
      newArrOfStudents.sort((a, b) => {
        if (a[sortBy] === b[sortBy]) {
          return 0;
        }

        if (order === SortOrder.Asc) {
          return a[sortBy] ? 1 : -1;
        }

        return a[sortBy] ? -1 : 1;
      });
      break;

    case SortType.AverageGrade:
      newArrOfStudents.sort((a, b) => (
        order === SortOrder.Asc
          ? getAnAverageGrade(a[sortBy]) - getAnAverageGrade(b[sortBy])
          : getAnAverageGrade(b[sortBy]) - getAnAverageGrade(a[sortBy])
      ));
      break;

    default:
      break;
  }

  return newArrOfStudents;
}
