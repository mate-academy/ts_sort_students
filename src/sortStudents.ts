
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number [];
}

export enum SortType {
  // describe SortType enum
  Name='name',
  Surname='surname',
  Age='age',
  Married='married',
  AverageGrade='grades'
}

// create SortOrder type
export type SortOrder = 'asc'|'desc';

function getAverage(grades:number[]):number {
  const sum = grades.reduce((acc, val) => acc + val, 0);

  return sum / grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  // write your function

  switch (sortBy) {
    case 'name':
    case 'surname':
      return order === 'asc' ? [...students].sort((a, b) => a[sortBy]
        .localeCompare(b[sortBy]))
        : [...students].sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case 'age':
      return order === 'asc' ? [...students].sort((a, b) => a[sortBy]
      - b[sortBy])
        : [...students].sort((a, b) => b[sortBy] - a[sortBy]);

    case 'married':
      return order === 'asc' ? [...students].sort((a, b) => (+a[sortBy])
      - (+b[sortBy])) : [...students].sort((a, b) => +b.married - +a.married);

    case 'grades':
      return order === 'asc' ? [...students].sort((a, b) => (
        getAverage(a[sortBy])) - (getAverage(b[sortBy])))
        : [...students].sort((a, b) => getAverage(b[sortBy])
        - getAverage(a[sortBy]));

    default:
      return students;
  }
}
