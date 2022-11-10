
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'avarageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function getAvarageNum(arr: number[]): number {
  return arr.reduce((a: number, b: number) => a + b, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort((first: Student, second: Student) => {
        return order === 'asc'
          ? first[sortBy].localeCompare(second[sortBy])
          : second[sortBy].localeCompare(first[sortBy]);
      });

    case SortType.Age:
      return studentsCopy.sort((first: Student, second: Student) => {
        return order === 'asc'
          ? first.age - second.age
          : second.age - first.age;
      });

    case SortType.Married:
      return studentsCopy.sort((first: Student, second: Student) => {
        return order === 'asc'
          ? +first.married - +second.married
          : +second.married - +first.married;
      });

    case SortType.AverageGrade:
      return studentsCopy.sort((first: Student, second: Student) => {
        return order === 'asc'
          ? getAvarageNum(first.grades) - getAvarageNum(second.grades)
          : getAvarageNum(second.grades) - getAvarageNum(first.grades);
      });

    default: throw new Error('Input type error');
  }
}
