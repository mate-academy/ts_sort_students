// describe Student type
// create and export SortType enum
// create SortOrder type]

// import { FileWatcherEventKind } from "typescript";
function averageValue(values: number[]): number {
  return values.reduce(
    (sum, a) => sum + a,
    0,
  );
}

interface Student {
  name: string;
  surname: string;
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

enum SortOrder {
  asc = 'asc',
  desc = 'desc'
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents.sort(
        (first: Student, second: Student) => (
          order === SortOrder.asc
            ? first[sortBy].localeCompare(second[sortBy])
            : second[sortBy].localeCompare(first[sortBy])
        ),
      );
      break;

    case SortType.Age:
      sortedStudents.sort(
        (first: Student, second: Student) => (
          order === SortOrder.asc
            ? first.age - second.age
            : second.age - first.age
        ),
      );
      break;

    case SortType.Married:
      sortedStudents.sort(
        (first: Student, second: Student) => {
          if (first.married === second.married) {
            return 0;
          }

          if (order === SortOrder.asc) {
            return first.married ? 1 : -1;
          }

          return first.married ? -1 : 1;
        },
      );
      break;

    case SortType.AverageGrade:
      sortedStudents.sort(
        (first: Student, second: Student) => (
          order === SortOrder.asc
            ? averageValue(first.grades) - averageValue(second.grades)
            : averageValue(second.grades) - averageValue(first.grades)
        ),
      );
      break;

    default:
      break;
  }

  return sortedStudents;
}
