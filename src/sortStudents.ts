
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function

  return [...students].sort((currentStudent, nextStudent) => {
    if (sortBy === SortType.Name || sortBy === SortType.Surname) {
      if (order === 'asc') {
        return currentStudent[sortBy].localeCompare(nextStudent[sortBy]);
      }

      return nextStudent[sortBy].localeCompare(currentStudent[sortBy]);
    }

    if (sortBy === SortType.AverageGrade) {
      const currentStudentAverageGrade = currentStudent[sortBy].reduce(
        (prev, cur) => prev + cur,
        0,
      ) / currentStudent[sortBy].length;
      const nextStudentAverageGrade = nextStudent[sortBy].reduce(
        (prev, cur) => prev + cur,
        0,
      ) / nextStudent[sortBy].length;

      if (order === 'asc') {
        return currentStudentAverageGrade - nextStudentAverageGrade;
      }

      return nextStudentAverageGrade - currentStudentAverageGrade;
    }

    if (order === 'asc') {
      return currentStudent[sortBy] - nextStudent[sortBy];
    }

    return nextStudent[sortBy] - currentStudent[sortBy];
  });
}
