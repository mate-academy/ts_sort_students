
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
  average?: number,
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'average',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const countAverage = (grades: number[]): number => {
    return grades.reduce((acc, cur) => acc + cur, 0) / grades.length;
  };
  const copyStudents = students.map((student) => {
    return {
      ...student,
      average: countAverage(student.grades),
    };
  });

  const sorted = copyStudents.sort((a, b) => {
    if (order === 'asc') {
      return a[sortBy]
        .toLocaleString()
        .localeCompare(b[sortBy].toLocaleString());
    }

    return b[sortBy]
      .toLocaleString()
      .localeCompare(a[sortBy].toLocaleString());
  });

  return sorted;
}
