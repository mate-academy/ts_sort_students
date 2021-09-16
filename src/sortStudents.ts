// describe Student type
// create and export SortType enum
// create SortOrder type

interface Student {
  name: string,
  surname: string,
  age: 26,
  married: true,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

type SortOrder = 'asc' | 'desc';

function getAverageGrade(array: number[]): number {
  const averageNumber: number = array.reduce((sum, element) => {
    return (sum + element);
  });

  return averageNumber / array.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copy: Student[] = students.slice();

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copy.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Age:
      copy.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a[sortBy] - b[sortBy];
        }

        return b[sortBy] - a[sortBy];
      });
      break;

    case SortType.Married:
      copy.sort((a: Student, b: Student) => {
        if (a[sortBy] === b[sortBy]) {
          return 0;
        }

        if (order === 'asc') {
          return +a[sortBy] - +b[sortBy];
        }

        return +b[sortBy] - +a[sortBy];
      });
      break;

    case SortType.AverageGrade:
      copy.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy]);
        }

        return getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy]);
      });
      break;

    default:
      break;
  }

  return copy;
}
