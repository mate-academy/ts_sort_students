// import { arrayExpression } from '@babel/types';

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
  Name = 'NAME',
  Surname = 'SURNAME',
  Age = 'AGE',
  Married = 'MARRIED',
  AverageGrade = 'AVERAGEGRADE',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder)
  : Student[] {
  // write your function
  const result = [...students];

  const averageGrade = (array:
  number[]): number => (array.reduce((a, b) => a + b) / array.length);

  result.sort((person1, person2) => {
    let a = person1;
    let b = person2;

    if (order === 'desc') {
      a = person2;
      b = person1;
    }

    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name);

      case SortType.Surname:
        return a.surname.localeCompare(b.surname);

      case SortType.AverageGrade:
        return averageGrade(a.grades) - averageGrade(b.grades);

      case SortType.Age:
        return a.age - b.age;

      case SortType.Married:
        return Number(a.married) - Number(b.married);

      default:
        throw new Error('Data is wrong');
    }
  });

  return result;
}
