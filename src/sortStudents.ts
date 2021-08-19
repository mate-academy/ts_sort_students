// describe Student type
// create and export SortType enum
// create SortOrder type
export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) :Student[] {
  const studentsCopy: Student[] = [...students];

  const sumOfGrades = (sum: number, grade: number) : number => sum + grade;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((a: Student, b: Student) => {
        if (order === SortOrder.Asc) {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Age:
      studentsCopy.sort((a: Student, b: Student) => {
        if (order === SortOrder.Asc) {
          return a[sortBy] - b[sortBy];
        }

        return b[sortBy] - a[sortBy];
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((a: Student, b: Student) => {
        const averageA: number = a[sortBy].reduce(sumOfGrades, 0);
        const averageB: number = b[sortBy].reduce(sumOfGrades, 0);

        if (order === SortOrder.Asc) {
          return averageA - averageB;
        }

        return averageB - averageA;
      });
      break;

    case SortType.Married:
      studentsCopy.sort((a: Student, b: Student) => {
        if (a[sortBy] === b[sortBy]) {
          return 0;
        }

        if (order === SortOrder.Asc) {
          if (a[sortBy]) {
            return 1;
          }

          return -1;
        }

        if (a[sortBy]) {
          return -1;
        }

        return 1;
      });
      break;

    default:
      break;
  }

  return studentsCopy;
}
