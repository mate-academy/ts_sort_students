// describe Student type
// create and export SortType enum
// create SortOrder type
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
  Ascending = 'asc',
  Descending = 'desc',
}

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = students.map((student) => ({ ...student }));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((a, b) => (
        order === SortOrder.Ascending
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])
      ));
      break;

    case SortType.Age:
      copyStudents.sort((a, b) => (
        order === SortOrder.Ascending
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy]
      ));
      break;

    case SortType.Married:
      copyStudents.sort((a, b) => {
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
      copyStudents.sort((a, b) => (
        order === SortOrder.Ascending
          ? getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy])
          : getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy])
      ));
      break;

    default:
      break;
  }

  return copyStudents;
}
