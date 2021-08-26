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

enum SortField {
  inFront = 'asc',
  inReverse = 'desc',
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortField,
): Student[] {
  const sortedStudents: Student[] = [...students];

  function AverageGrade(grades: number[]): number {
    return grades.reduce((sum, item) => sum + item, 0) / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents.sort((a: Student, b: Student) => {
        return order === SortField.inFront
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Age:
      sortedStudents.sort((a: Student, b: Student) => {
        return order === SortField.inFront
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });
      break;

    case SortType.Married:
      sortedStudents.sort((a: Student, b: Student) => {
        if (a[sortBy] === b[sortBy]) {
          return 0;
        }

        if (order === SortField.inFront) {
          return a[sortBy] ? 1 : -1;
        }

        return a[sortBy] ? -1 : 1;
      });
      break;

    case SortType.AverageGrade:
      sortedStudents.sort((a: Student, b: Student) => {
        return order === SortField.inFront
          ? AverageGrade(a[sortBy]) - AverageGrade(b[sortBy])
          : AverageGrade(b[sortBy]) - AverageGrade(a[sortBy]);
      });
      break;

    default:
      break;
  }

  return sortedStudents;
}
