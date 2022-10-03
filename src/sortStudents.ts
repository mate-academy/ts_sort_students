
export interface Student {
  name : string;
  surname : string;
  age : number;
  married : boolean;
  grades : number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

function getAverage(s : number[]) : number {
  return s.reduce((r : number, i : number) => r + i, 0)
  / s.length;
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students : Student[],
  sortBy : string, order : string) : object[] {
  const copy = [...students];

  // eslint-disable-next-line default-case
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        copy.sort(
          (a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]),
        );
      } else {
        copy.sort(
          (a: Student, b: Student) => b[sortBy].localeCompare(a[sortBy]),
        );
      }
      break;

    case SortType.Age:
      if (order === 'asc') {
        copy.sort((a: Student, b: Student) => (a[sortBy] - b[sortBy]));
      } else {
        copy.sort((a: Student, b: Student) => (b[sortBy] - a[sortBy]));
      }
      break;

    case SortType.Married:
      copy.sort((a: Student, b: Student) => ((Number(b[sortBy])
      - Number(a[sortBy]))));
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        copy.sort((a: Student, b: Student) => (getAverage(a[sortBy])
        - getAverage(b[sortBy])));
      } else {
        copy.sort((a: Student, b: Student) => (getAverage(b[sortBy])
        - getAverage(a[sortBy])));
      }
      break;
  }

  return copy;
}
