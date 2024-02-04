
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function averageGrade(arrayOfGrades : number[]) : number {
  const sum = arrayOfGrades.reduce((a : number, b : number) => a + b, 0);

  return sum / arrayOfGrades.length;
}

// eslint-disable-next-line max-len
export function sortStudents(students : Student[], sortBy : SortType, orderBy : SortOrder) : Student[] {
  const allStudents : Student[] = [...students];

  allStudents.sort((a : Student, b : Student) : number => {
    let solution;

    switch (sortBy) {
      case SortType.Name:
        solution = a.name.localeCompare(b.name);
        break;
      case SortType.Surname:
        solution = a.surname.localeCompare(b.surname);
        break;
      case SortType.Age:
        solution = a.age - b.age;
        break;
      case SortType.Married:
        solution = +a.married - +b.married;
        break;
      case SortType.AverageGrade:
        solution = averageGrade(a.grades) - averageGrade(b.grades);
        break;
      default:
        break;
    }

    if (orderBy === 'desc') {
      solution *= -1;
    }

    return solution === 0
      ? allStudents.indexOf(a) - allStudents.indexOf(b) : solution;
  });

  return allStudents;
}
