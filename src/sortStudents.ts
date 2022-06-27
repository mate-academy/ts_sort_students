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
  AverageGrade = 'grade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const sortedStudents: Student[] = [...students];
  const initialOrder: number = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case 'age':
      sortedStudents.sort((studentA, studentB) => (studentA.age
        - studentB.age) * initialOrder);
      break;

    case 'name':
      sortedStudents.sort((studentA, studentB) => studentA.name
        .localeCompare(studentB.name) * initialOrder);
      break;

    case 'surname':
      sortedStudents.sort((studentA, studentB) => studentA.surname
        .localeCompare(studentB.surname) * initialOrder);
      break;

    case 'married':
      sortedStudents.sort((studentA, studentB) => (+studentA.married
        - +studentB.married) * initialOrder);
      break;

    default:
      sortedStudents.sort((studentA, studentB) => ((studentA.grades
        .reduce((acc, item) => acc + item) / studentA.grades.length
        - studentB.grades.reduce((acc, item) => acc + item)
        / studentB.grades.length) * initialOrder));
      break;
  }

  return sortedStudents;
}
