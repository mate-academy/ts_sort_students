
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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];

  return copiedStudents
    .sort((studentOne: Student, studentTwo: Student) => {
      const studentOneAverage = (studentOne.grades)
        .reduce((sum, num) => sum + num, 0) / studentOne.grades.length;

      const studentTwoAverage = (studentTwo.grades)
        .reduce((sum, num) => sum + num, 0) / studentTwo.grades.length;

      switch (sortBy) {
        case 'name':
          if (order === 'asc') {
            return studentOne.name.localeCompare(studentTwo.name);
          }

          return studentTwo.name.localeCompare(studentOne.name);

        case 'surname':
          if (order === 'asc') {
            return studentOne.surname.localeCompare(studentTwo.surname);
          }

          return studentTwo.surname.localeCompare(studentOne.surname);

        case 'age':
          if (order === 'asc') {
            return studentOne.age - studentTwo.age;
          }

          return studentTwo.age - studentOne.age;

        case 'married':
          if (order === 'asc') {
            return Number(studentOne.married) - Number(studentTwo.married);
          }

          return Number(studentTwo.married) - Number(studentOne.married);

        case 'grades':
          if (order === 'asc') {
            return studentOneAverage - studentTwoAverage;
          }

          return studentTwoAverage - studentOneAverage;

        default:
          throw new Error('Dej tu err msg');
      }
    });
}
