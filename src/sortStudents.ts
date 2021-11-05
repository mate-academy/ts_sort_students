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
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  // write your function
  const arrStudent: Student[] = students.map((student) => ({ ...student }));

  switch (sortBy) {
    case 'name':
      return arrStudent.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

    case 'surname':
      return arrStudent.sort((a, b) => {
        return a.surname.localeCompare(b.surname);
      });

    case 'age':
      return arrStudent.sort((a, b) => {
        if (order === 'desc') {
          return b.age - a.age;
        }

        return a.age - b.age;
      });

    case 'married':
      return arrStudent.sort((a, b) => {
        if (order === 'desc') {
          return +b.married - +a.married;
        }

        return +a.married - +b.married;
      });

    case 'averageGrade':
      return arrStudent.sort((a, b) => {
        const arrA = a.grades.reduce((total, amount) => total + amount,
          0) / a.grades.length;
        const arrB = b.grades.reduce((total, amount) => total + amount,
          0) / b.grades.length;

        if (order === 'desc') {
          return arrB - arrA;
        }

        return arrA - arrB;
      });

    default:
      break;
  }

  if (order === 'desc') {
    return arrStudent.reverse();
  }

  return arrStudent;
}
