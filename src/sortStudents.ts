
export interface Student {
  // describe Student interface
  name: 'Jessica',
  surname: 'Buxton',
  age: 26,
  married: true,
  grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';


export function sortStudents(students, sortBy, order) {
  // write your function
}
