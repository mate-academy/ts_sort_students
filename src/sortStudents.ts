
export interface Student {
  name: string
  surname: string
  age: number
  married: boolean
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGrade(x: number[]): number {
  let gradeSum: number = 0;

  x.forEach((grade) => {
    gradeSum += grade;

    return grade;
  });

  return gradeSum / x.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  studentsCopy.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case SortType.Age:
        return order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      case SortType.Married:
        if (order === 'asc') {
          if (b[sortBy] === a[sortBy]) {
            return 0;
          }

          if (b[sortBy] && b[sortBy] !== a[sortBy]) {
            return -1;
          }

          return 1;
        }

        if (a[sortBy] === b[sortBy]) {
          return 0;
        }

        if (a[sortBy] && a[sortBy] !== b[sortBy]) {
          return -1;
        }

        return 1;

      case SortType.AverageGrade:
        return order === 'asc'
          ? averageGrade(a[sortBy]) - averageGrade(b[sortBy])
          : averageGrade(b[sortBy]) - averageGrade(a[sortBy]);
      default:
        return 1;
    }
  });

  return studentsCopy;
}
