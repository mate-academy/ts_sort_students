
// describe Student interface
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];

}

// describe SortType enum
export enum SortType {
  name,
  surname,
  Age,
  married,
  averageGrade
}

// create SortOrder type
export type SortOrder = 'desc' | 'asc';

export function
sortStudents(students: Student[], sortBy: SortType, order: SortOrder)
  : Student[] |void {
  const newobj = JSON.parse(JSON.stringify(students));

  if (sortBy === SortType.Age && order === 'desc') {
    return newobj.sort((a: Student, b: Student) => b.age - a.age);
  }

  if (sortBy === SortType.Age && order === 'asc') {
    return newobj.sort((a: Student, b: Student) => a.age - b.age);
  }

  return [];
}
