export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name ='name',
  Surname ='surname',
  Age = 'age',
  Married ='married',
  AverageGrade ='grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function average(arr: number[]): number {
  return arr.reduce((acc: number, item: number) => acc + item, 0) / arr.length;
}

function comparing(str1: string, str2: string): number {
  return str1.localeCompare(str2);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newArray: Student[] = [...students].map((student: Student) => {
    return { ...student };
  });

  const sorting = (a: Student, b: Student): number => {
    let result: number;

    switch (sortBy) {
      case 'name':
        result = comparing(a.name, b.name);
        break;
      case 'surname':
        result = comparing(a.surname, b.surname);
        break;
      case 'age':
        result = a.age - b.age;
        break;
      case 'married':
        result = a.married && !b.married ? 1 : -1;
        break;
      default:
        result = average(a.grades) - average(b.grades);
        break;
    }

    return (order === 'asc') ? result : result * -1;
  };

  return newArray.sort(sorting);
}
