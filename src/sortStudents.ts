
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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
)
  : Student[] {
  let result: Student[] = Object.assign([], students);

  if (sortBy === 'name' || sortBy === 'surname') {
    result = (order === 'asc')
      ? result.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
      : result.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }

  if (sortBy === 'grades') {
    result.sort((a, b) => {
      const firstLenght: number = a.grades.length;
      const secondLenght: number = b.grades.length;
      const first: number = a[sortBy].reduce((prev, el) => {
        return prev + el;
      }, 0) / firstLenght;
      const second: number = b[sortBy].reduce((prev, el) => {
        return prev + el;
      }, 0) / secondLenght;

      const resultSol = (order === 'asc')
        ? (first - second)
        : (second - first);

      return resultSol;
    });
  }

  if (sortBy === 'age' || sortBy === 'married') {
    result = (order === 'asc')
      ? result.sort((a, b) => +a[sortBy] - +b[sortBy])
      : result.sort((a, b) => +b[sortBy] - +a[sortBy]);
  }

  return result;
}
