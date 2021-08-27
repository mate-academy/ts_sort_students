interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

enum SortOrder {
  asc = 'asc',
  desc = 'desc'
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
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((a: Student, b: Student) => {
        return order === SortOrder.asc
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Age:
      copyStudents.sort((a: Student, b: Student) => {
        return order === SortOrder.asc
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });
      break;

    case SortType.Married:
      copyStudents.sort((a: Student, b: Student) => {
        if (a[sortBy] === b[sortBy]) {
          return 0;
        }

        if (order === SortOrder.asc) {
          return a[sortBy] ? 1 : -1;
        }

        return a[sortBy] ? -1 : 1;
      });
      break;

    case SortType.AverageGrade:
      copyStudents.sort((a: Student, b: Student) => {
        return order === SortOrder.asc
          ? (getAverage(a[sortBy]) - getAverage(b[sortBy]))
          : (getAverage(b[sortBy]) - getAverage(a[sortBy]));
      });
      break;

    default:
      break;
  }

  return copyStudents;
}
