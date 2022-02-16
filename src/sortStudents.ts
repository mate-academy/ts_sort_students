
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

export function
sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  // write your function
  const sortStudent = [...students];

  if (order === 'desc' && sortBy === SortType.AverageGrade) {
    sortStudent.sort((a, b) => {
      const aSum = a.grades.reduce((x: number, y: number) => x + y, 0);
      const bSum = b.grades.reduce((x: number, y: number) => x + y, 0);

      return (bSum / b.grades.length) - (aSum / a.grades.length);
    });
  }

  if (order === 'asc' && sortBy === SortType.AverageGrade) {
    sortStudent.sort((a, b) => {
      const aSum = a.grades.reduce((x: number, y: number) => x + y, 0);
      const bSum = b.grades.reduce((x: number, y: number) => x + y, 0);

      return (aSum / a.grades.length) - (bSum / b.grades.length);
    });
  }

  if (order === 'desc' && sortBy === SortType.Married) {
    sortStudent.sort((a, b) => {
      return Number(b.married) - Number(a.married);
    });
  }

  if (order === 'asc' && sortBy === SortType.Name) {
    sortStudent.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  if (order === 'asc' && sortBy === SortType.Surname) {
    sortStudent.sort((a, b) => {
      return a[sortBy].localeCompare(b[sortBy]);
    });
  }

  if (order === 'desc' && sortBy === SortType.Age) {
    sortStudent.sort((a, b) => {
      return b[sortBy] - a[sortBy];
    });
  }

  return sortStudent;
}
