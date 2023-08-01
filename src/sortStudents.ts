
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
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const getAverageGrades = (grades: number[]): number => {
  return grades
    .reduce((init, curr) => init + curr, 0) / grades.length;
};

// eslint-disable-next-line max-len
export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] {
  // write your function
  const studentArray = [...students];
  const isAcs = order === 'asc';

  studentArray.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return isAcs
          ? a[sortBy].localeCompare(b[sortBy])
          : a[sortBy].localeCompare(a[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return isAcs
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      case SortType.AverageGrade:
      default:
        return isAcs
          ? getAverageGrades(a[sortBy]) - getAverageGrades(b[sortBy])
          : getAverageGrades(b[sortBy]) - getAverageGrades(a[sortBy]);
    }
  });

  return studentArray;
}
