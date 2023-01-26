
export interface Student {
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

// create SortOrder type
export type SortOrder = 'asc' |'desc';

const returnAverageCount = (array: number[]): number => {
  return array.reduce((acc: number, el: number) => acc + el, 0) / array.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyArray = JSON.parse(JSON.stringify(students));

  if (sortBy === 'name' || sortBy === 'surname') {
    return copyArray.sort((a: Student, b: Student): number => {
      if (order === 'asc') {
        return a[sortBy].localeCompare(b[sortBy]);
      }

      return b[sortBy].localeCompare(a[sortBy]);
    });
  }

  if (sortBy === 'age') {
    return copyArray.sort((a: Student, b: Student): number => {
      if (order === 'asc') {
        return a[sortBy] - b[sortBy];
      }

      return b[sortBy] - a[sortBy];
    });
  }

  if (sortBy === 'married') {
    return copyArray.sort((a: Student, b: Student): number => {
      if (order === 'asc') {
        return Number(a[sortBy]) - Number(b[sortBy]);
      }

      return Number(b[sortBy]) - Number(a[sortBy]);
    });
  }

  if (sortBy === 'grades') {
    return copyArray.sort((a: Student, b: Student): number => {
      if (order === 'asc') {
        return returnAverageCount(a[sortBy]) - returnAverageCount(b[sortBy]);
      }

      return returnAverageCount(b[sortBy]) - returnAverageCount(a[sortBy]);
    });
  }

  return students;
}
