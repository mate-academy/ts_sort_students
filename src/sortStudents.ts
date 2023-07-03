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

export type SortOrder = 'asc' | 'desc';

function getAverage(st: Student):number {
  return st.grades.reduce((acc, el) => acc + el, 0) / st.grades.length;
}

// eslint-disable-next-line max-len
export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder):Student[] {
  return [...students].sort((a:Student, b:Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverage(a) - getAverage(b)
          : getAverage(b) - getAverage(a);
      default:
        return 0;
    }
  });
}
