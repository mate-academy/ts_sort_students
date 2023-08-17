export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: Array<number>,
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Array<Student>,
  sortBy: SortType, order: SortOrder) : Array<Student> {
  const newArr = [...students];
  const sortOrder = order === 'asc' ? 1 : -1;

  for (let i = 0; i < newArr.length; i += 1) {
    newArr[i] = { ...newArr[i] };
  }

  const avg = (x: Array<number>): number => {
    return x.reduce((c: number, d: number): number => c + d, 0)
    / x.length;
  };

  function callback(a: Student, b: Student): number {
    switch (sortBy) {
      case (SortType.Name):
        return a[sortBy].localeCompare(b[sortBy]) * sortOrder;
      case (SortType.Surname):
        return a[sortBy].localeCompare(b[sortBy]) * sortOrder;
      case (SortType.Age):
        return (a[sortBy] - b[sortBy]) * sortOrder;
      case (SortType.Married):
        return (+!!a[sortBy] - +!!b[sortBy]) * sortOrder;
      case (SortType.AverageGrade):
        return (avg(a[sortBy]) - avg(b[sortBy])) * sortOrder;
      default:
        return 0;
    }
  }

  return newArr.sort(callback);
}
