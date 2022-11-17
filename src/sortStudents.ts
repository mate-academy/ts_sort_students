
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function getAverageNum(grades: number[]): number {
  return grades.reduce((prev: number, curr: number) => prev + curr)
  / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newArray: Student[] = [...students];
  let result: Student[] = [];

  switch (order) {
    case 'asc':
      if (sortBy === 'name' || sortBy === 'surname') {
        result = newArray.sort((a: Student, b: Student) => {
          return a[sortBy].localeCompare(b[sortBy]);
        });
      }

      if (sortBy === 'age') {
        result = newArray.sort((a: Student, b: Student) => a.age - b.age);
      }

      if (sortBy === 'married') {
        result = newArray.sort((a: Student, b: Student) => {
          return +a.married - +b.married;
        });
      }

      if (sortBy === 'grades') {
        result = newArray.sort((a: Student, b: Student) => {
          const averageFirst = getAverageNum(a.grades);
          const averageSecond = getAverageNum(b.grades);

          return averageFirst - averageSecond;
        });
      }

      break;

    case 'desc':
      if (sortBy === 'name' || sortBy === 'surname') {
        result = newArray.sort((a:Student, b: Student) => {
          return b[sortBy].localeCompare(a[sortBy]);
        });
      }

      if (sortBy === 'age') {
        result = newArray.sort((a: Student, b: Student) => b.age - a.age);
      }

      if (sortBy === 'married') {
        result = newArray.sort((a: Student, b: Student) => {
          return +b.married - +a.married;
        });
      }

      if (sortBy === 'grades') {
        result = newArray.sort((a: Student, b: Student) => {
          const averageFirst = getAverageNum(a.grades);
          const averageSecond = getAverageNum(b.grades);

          return averageSecond - averageFirst;
        });
      }

      break;
    default:
      return result;
  }

  return result;
}
