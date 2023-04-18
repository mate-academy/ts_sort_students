
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
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      studentsCopy.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case SortType.Surname:
      studentsCopy.sort((a, b) => a.surname.localeCompare(b.surname));
      break;

    case SortType.Age:
      studentsCopy.sort((a, b) => b.age - a.age);
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((a, b) => {
        const averageA = a.grades.reduce((sum, grade) => {
          return sum + grade / a.grades.length;
        }, 0);
        const averageB = b.grades.reduce((sum, grade) => {
          return sum + grade / b.grades.length;
        }, 0);

        if (order === 'desc') {
          return averageB - averageA;
        }

        return averageA - averageB;
      });
      break;

    case SortType.Married:
      studentsCopy.sort((a, b) => Number(b.married) - Number(a.married));
      break;
    default:
  }

  return studentsCopy;
}
