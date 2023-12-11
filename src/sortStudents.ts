
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

  if (sortBy === 'grades') {
    result = newStude.sort((a, b) => {
      if (order === 'asc') {
        return average(a) - average(b);
      }

      return average(b) - average(a);
    });
  }

  if (sortBy === 'name' || sortBy === 'surname') {
    result = [...newStude].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    if (order === 'desc') {
      result = result.reverse();
    }
  }

  if (sortBy === 'age') {
    result = [...newStude].sort((a, b) => {
      if (order === 'asc') {
        return a[sortBy] - b[sortBy];
      }

      return b[sortBy] - a[sortBy];
    });
  }

  if (sortBy === 'married') {
    result = [...newStude].sort((a, b) => {
      let boSort;

      if (order === 'asc') {
        if (a[sortBy] === b[sortBy]) {
          boSort = 0;
        } else if (a[sortBy]) {
          boSort = 1;
        } else {
          boSort = -1;
        }

        return boSort;
      }

      if (a[sortBy] === b[sortBy]) {
        boSort = 0;
      } else if (b[sortBy]) {
        boSort = 1;
      } else {
        boSort = -1;
      }

      return boSort;
    });
  }

  return result;
}
