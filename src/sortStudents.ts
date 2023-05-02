
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

function averageGrade(grades: number[]): number {
  return grades
    .reduce((prev, curr) => prev + curr, 0)
              / grades.length;
}
// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  // write your function
  const copyOfStudents = [...students];

  return copyOfStudents
    .sort((firstStudent: Student, secondStudent: Student) => {
      const firstStudentavg = averageGrade(firstStudent.grades);

      const secondStudentavg = averageGrade(secondStudent.grades);

      switch (sortBy) {
        case 'name':
          return order === 'asc'
            ? firstStudent.name.localeCompare(secondStudent.name)
            : secondStudent.name.localeCompare(firstStudent.name);
        case 'surname':
          return order === 'asc'
            ? firstStudent.surname.localeCompare(secondStudent.surname)
            : secondStudent.surname.localeCompare(firstStudent.surname);
        case 'age':
          return order === 'asc'
            ? firstStudent.age - secondStudent.age
            : secondStudent.age - firstStudent.age;
        case 'married':
          return order === 'asc'
            ? Number(firstStudent.married) - Number(secondStudent.married)
            : Number(secondStudent.married) - Number(firstStudent.married);
        case 'grades':

          return order === 'asc'
            ? firstStudentavg - secondStudentavg
            : secondStudentavg - firstStudentavg;
        default:
          throw new Error('Incorrect sort type!');
      }
    });
}
