
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
  Surname ='surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  // write your function
  const copyOfStudents = [...students];

  return copyOfStudents
    .sort((studentA: Student, studentB: Student) => {
      const studentAavg = studentA.grades
        .reduce((prev, curr) => prev + curr, 0)
              / studentA.grades.length;

      const studentBavg = studentB.grades
        .reduce((prev, curr) => prev + curr, 0)
          / studentB.grades.length;

      switch (sortBy) {
        case 'name':
          return order === 'asc'
            ? studentA.name.localeCompare(studentB.name)
            : studentB.name.localeCompare(studentA.name);
        case 'surname':
          return order === 'asc'
            ? studentA.surname.localeCompare(studentB.surname)
            : studentB.surname.localeCompare(studentA.surname);
        case 'age':
          return order === 'asc'
            ? studentA.age - studentB.age
            : studentB.age - studentA.age;
        case 'married':
          return order === 'asc'
            ? Number(studentA.married) - Number(studentB.married)
            : Number(studentB.married) - Number(studentA.married);
        case 'grades':

          return order === 'asc'
            ? studentAavg - studentBavg
            : studentBavg - studentAavg;
        default:
          return 0;
      }
    });
}
