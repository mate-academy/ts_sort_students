
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
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGrade(grades: number[]): number {
  const total = grades.reduce((gr1: number, gr2: number) => gr1 + gr2);
  
  return total / grades.length;
}

type SortCallBack = (first: Student, second: Student) => number;

function sortingCallBack(
  // first: Student, 
  // second: Student,
  sortBy: SortType
  ): SortCallBack  {
  switch (sortBy) {
    case SortType.Name:
      return (first: Student, second: Student) => {
        return Number(first.name) -  Number(second.name)
      };
      // return (first.name > second.name)? 1: 0;
    case SortType.Surname:
      // return (first.surname > second.surname)? 1: 0;
      return (first: Student, second: Student) => {
        return Number(first.surname) -  Number(second.surname)
      };
    case SortType.Age:
      // return first.age - second.age;
      return (first: Student, second: Student) => first.age - second.age;
    case SortType.Married:
      // return Number(first.married) - Number(second.married);
      return (first: Student, second: Student) => {
        return Number(first.married) -  Number(second.married)
      };
    case SortType.AverageGrade:
      // return averageGrade(first.grades) - averageGrade(second.grades);
      return (first: Student, second: Student) => {
        return averageGrade(first.grades) - averageGrade(second.grades);
      };
    default:
      return (first: Student, second: Student) => {
        return Number(first.name) -  Number(second.name)
      };
  }
}

export function sortStudents(
  students: Student[],
  sortBy: SortType, 
  order: SortOrder) {
  const sortedStudents: Student[] = [...students];

  sortedStudents.sort(sortingCallBack(sortBy));

  if (order === 'desc') {
    sortedStudents.reverse();
  }

  return sortedStudents;
}
