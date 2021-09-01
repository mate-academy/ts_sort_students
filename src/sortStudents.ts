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

function getAvarageNumber(sum: number, i: number): number {
  return sum + i;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudentArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      copyStudentArr.sort((a: Student, b: Student) => {
        if (order === SortOrder.Ascending) {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Surname:
      copyStudentArr.sort((a: Student, b: Student) => {
        if (order === SortOrder.Ascending) {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Age:
      copyStudentArr.sort((a: Student, b: Student) => {
        if (order === SortOrder.Ascending) {
          return a[sortBy] - b[sortBy];
        }

        return b[sortBy] - a[sortBy];
      });
      break;

    case SortType.Married:
      copyStudentArr.sort((a: Student, b: Student) => {
        if (a[sortBy] === b[sortBy]) {
          return 0;
        }

        if (order === SortOrder.Ascending) {
          return +a[sortBy] || -1;
        }

        return a[sortBy] ? -1 : 1;
      });
      break;

    case SortType.AverageGrade:
      copyStudentArr.sort((a: Student, b: Student) => {
        if (order === SortOrder.Ascending) {
          return a[sortBy].reduce(getAvarageNumber, 0) / a.grades.length
            - b[sortBy].reduce(getAvarageNumber, 0) / b.grades.length;
        }

        return b[sortBy].reduce(getAvarageNumber, 0) / b.grades.length
          - a[sortBy].reduce(getAvarageNumber, 0) / a.grades.length;
      });
      break;

    default:
      break;
  }

  return copyStudentArr;
}
