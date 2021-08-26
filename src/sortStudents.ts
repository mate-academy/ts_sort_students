// describe Student type
// create and export SortType enum
// create SortOrder type
interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

enum SortOrder {
  Ascending = 'asc',
  Descending = 'desc',
}

function getAverage(grades: number[]): number {
  return grades.reduce((sum: number, grade: number) => sum + grade, 0)
    / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      newStudents.sort((a: Student, b: Student) => (
        order === SortOrder.Ascending
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])
      ));

      break;

    case SortType.Age:
      newStudents.sort((a: Student, b: Student) => (
        order === SortOrder.Ascending
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy]
      ));

      break;

    case SortType.Married:
      newStudents.sort((a: Student, b: Student) => {
        if (a[sortBy] === b[sortBy]) {
          return 0;
        }

        if (order === SortOrder.Ascending) {
          return a[sortBy] ? 1 : -1;
        }

        return a[sortBy] ? -1 : 1;
      });

      break;

    case SortType.AverageGrade:
      newStudents.sort((a: Student, b: Student) => (
        order === SortOrder.Ascending
          ? getAverage(a[sortBy]) - getAverage(b[sortBy])
          : getAverage(b[sortBy]) - getAverage(a[sortBy])
      ));

      break;

    default:
      break;
  }

  return newStudents;
}
