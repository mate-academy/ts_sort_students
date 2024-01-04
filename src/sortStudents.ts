
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  // write your function
  const newStude = students.map((studier) => studier);
  let result: Student[] = [];

  function average(student: Student): number {
    return student.grades.reduce((acc: number, val: number) => (acc + val),
      0) / student.grades.length;
  }

  if (sortBy === SortType.AverageGrade) {
    return newStude.sort((a, b) => (order === 'asc'
      ? average(a) - average(b) : average(b) - average(a)));
  }

  if (sortBy === SortType.Name || sortBy === SortType.Surname) {
    result = [...newStude].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    if (order === 'desc') {
      result = result.reverse();
    }
  }

  if (sortBy === SortType.Age) {
    return [...newStude].sort((a, b) => (order === 'asc'
      ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]));
  }

  if (sortBy === SortType.Married) {
    result = [...newStude].sort((a, b) => {
      let married;

      if (order === 'asc') {
        if (a[sortBy] === b[sortBy]) {
          married = 0;
        } else if (a[sortBy]) {
          married = 1;
        } else {
          married = -1;
        }

        return married;
      }

      if (a[sortBy] === b[sortBy]) {
        married = 0;
      } else if (b[sortBy]) {
        married = 1;
      } else {
        married = -1;
      }

      return married;
    });
  }

  return result;
}
