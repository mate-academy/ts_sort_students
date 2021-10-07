// describe Student type
interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}
// create and export SortType enum
export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}
// create SortOrder type
type SortOrder = 'asc' | 'desc';

function average(array: number[]): number {
  const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return sum / array.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  // write your function
  const resultArray = [...students];

  switch (sortBy) {
    case 'name':
    case 'surname':
      resultArray.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return -1;
        }

        if (a[sortBy] > b[sortBy]) {
          return 1;
        }

        return 0;
      });

      if (order === 'desc') {
        resultArray.reverse();
      }

      break;

    case 'age':
      resultArray.sort((a, b) => {
        if (order === 'asc') {
          return a[sortBy] - b[sortBy];
        }

        return b[sortBy] - a[sortBy];
      });

      break;

    case 'grades':
      resultArray.sort((a, b) => {
        if (order === 'asc') {
          return average(a.grades) - average(b.grades);
        }

        return average(b.grades) - average(a.grades);
      });

      break;

    case 'married':
      resultArray.sort((x, y) => {
        if (order === 'asc') {
          return Number(x.married) - Number(y.married);
        }

        return Number(y.married) - Number(x.married);
      });

      break;

    default:
      return students;
  }

  return resultArray;
}
