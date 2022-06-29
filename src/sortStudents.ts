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

function getAverageGrades(person: Student): number {
  return person.grades.reduce((acc, item) => acc + item) / person.grades.length;
}

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
    case 'surname':
      sortedStudents.sort((studentA, studentB) => studentA[sortBy]
        .localeCompare(studentB[sortBy]) * initialOrder);
      break;

    case 'married':
      sortedStudents.sort((studentA, studentB) => (Number(studentA.married)
        - Number(studentB.married)) * initialOrder);
      break;

    default:
      sortedStudents.sort((studentA, studentB) => (getAverageGrades(studentA)
        - getAverageGrades(studentB)) * initialOrder);
      break;
  }

  return sortedStudents;
}
