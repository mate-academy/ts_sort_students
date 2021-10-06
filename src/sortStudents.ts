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
  const resultArray = [];

  for (let i: number = 0; i < students.length; i += 1) {
    resultArray.push(students[i]);
  }

  if (sortBy === 'name' || sortBy === 'surname') {
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
  }

  if (sortBy === 'age') {
    if (order === 'asc') {
      resultArray.sort((a, b) => a[sortBy] - b[sortBy]);
    } else {
      resultArray.sort((a, b) => b[sortBy] - a[sortBy]);
    }
  }

  if (sortBy === 'grades') {
    if (order === 'asc') {
      resultArray.sort((a, b) => average(a.grades) - average(b.grades));
    } else {
      resultArray.sort((a, b) => average(b.grades) - average(a.grades));
    }
  }

  if (sortBy === 'married') {
    if (order === 'asc') {
      resultArray.sort((x, y) => Number(x.married) - Number(y.married));
    } else {
      resultArray.sort((x, y) => Number(y.married) - Number(x.married));
    }
  }

  return resultArray;
}
