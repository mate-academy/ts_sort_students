
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
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc'| 'desc';

function avarageGrade(student: Student): number {
  return student.grades.reduce((sum, currentAvarageGrades) => (
    sum + currentAvarageGrades
  ), 0) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortStudentsArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? sortStudentsArr.sort((a: Student, b: Student) => {
          return a.name.localeCompare(b.name);
        })
        : sortStudentsArr.sort((a: Student, b: Student) => {
          return b.name.localeCompare(a.name);
        });

    case SortType.Surname:
      return order === 'asc'
        ? sortStudentsArr.sort((a: Student, b: Student) => {
          return a.surname.localeCompare(b.surname);
        })
        : sortStudentsArr.sort((a: Student, b: Student) => {
          return b.surname.localeCompare(a.surname);
        });

    case SortType.Age:
      return order === 'asc'
        ? sortStudentsArr.sort((a: Student, b: Student) => {
          return a.age - b.age;
        })
        : sortStudentsArr.sort((a: Student, b: Student) => {
          return b.age - a.age;
        });

    case SortType.Married:
      return order === 'asc'
        ? sortStudentsArr.sort((a: Student, b: Student) => {
          return Number(a.married) - Number(b.married);
        })
        : sortStudentsArr.sort((a: Student, b: Student) => {
          return Number(b.married) - Number(a.married);
        });

    case SortType.AverageGrade:
      return order === 'asc'
        ? sortStudentsArr.sort((a: Student, b: Student) => {
          return avarageGrade(a) - avarageGrade(b);
        })
        : sortStudentsArr.sort((a: Student, b: Student) => {
          return avarageGrade(b) - avarageGrade(a);
        });

    default:
      return sortStudentsArr;
  }
  // write your function
}
