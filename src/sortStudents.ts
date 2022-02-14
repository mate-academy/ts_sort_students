export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
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
export type SortOrder = {
  asc: string;
  desc: string;
};

export function sortStudents(students, sortBy, order) : Student[] {
  // write your function
  let copy = [...students];

  if (sortBy === 'age' || sortBy === 'married') {
    copy = copy.sort((a, b) => {
      return (order === 'asc')
        ? a[sortBy] - b[sortBy]
        : b[sortBy] - a[sortBy];
    });
  }

  if (sortBy === 'name' || sortBy === 'surname') {
    copy = copy.sort((a, b) => {
      return a[sortBy].localeCompare(b[sortBy]);
    });
  }

  if (sortBy === 'grades') {
    copy = copy.sort((a, b) => {
      const sum1 = a[sortBy].reduce((prev, curr) => prev + curr, 0);
      const sum2 = b[sortBy].reduce((prev, curr) => prev + curr, 0);
      const average1 = sum1 / a[sortBy].length;
      const average2 = sum2 / b[sortBy].length;

      return (order === 'asc')
        ? average1 - average2
        : average2 - average1;
    });
  }

  return copy;
}
