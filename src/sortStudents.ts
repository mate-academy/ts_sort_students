
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
        case SortType.Name:
          return order === 'asc'
            ? studentOne.name.localeCompare(studentTwo.name)
            : studentTwo.name.localeCompare(studentOne.name);

        case SortType.Surname:
          return order === 'asc'
            ? studentOne.surname.localeCompare(studentTwo.surname)
            : studentTwo.surname.localeCompare(studentOne.surname);

        case SortType.Age:
          return order === 'asc'
            ? studentOne.age - studentTwo.age
            : studentTwo.age - studentOne.age;

        case SortType.Married:
          return order === 'asc'
            ? Number(studentOne.married) - Number(studentTwo.married)
            : Number(studentTwo.married) - Number(studentOne.married);

        case SortType.AverageGrade:
          return order === 'asc'
            ? studentOneAverage - studentTwoAverage
            : studentTwoAverage - studentOneAverage;

        default:
          throw new Error('This order is not suported!');
      }
    });
}
