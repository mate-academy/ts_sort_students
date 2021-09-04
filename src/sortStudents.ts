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
  AverageGrade = 'averageGrade',
}

type SortOrder = 'asc' | 'desc';

function valueAverageGrade(arr: number[]): number {
  return arr.reduce((sum, current) => sum + current, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        sortArr.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      }

      if (order === 'desc') {
        sortArr.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
      }
      break;
    case SortType.Age:
      if (order === 'asc') {
        sortArr.sort((a, b) => a.age - b.age);
      }

      if (order === 'desc') {
        sortArr.sort((a, b) => b.age - a.age);
      }
      break;
    case SortType.Married:
      if (order === 'asc') {
        sortArr.sort((a, b) => +a.married - +b.married);
      }

      if (order === 'desc') {
        sortArr.sort((a, b) => +b.married - +a.married);
      }
      break;
    case SortType.AverageGrade:
      if (order === 'asc') {
        sortArr.sort((a, b): number => {
          return valueAverageGrade(a.grades) - valueAverageGrade(b.grades);
        });
      }

      if (order === 'desc') {
        sortArr.sort((a, b): number => {
          return valueAverageGrade(b.grades) - valueAverageGrade(a.grades);
        });
      }
      break;
    default:
      break;
  }

  return sortArr;
}
