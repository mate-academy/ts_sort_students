
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
  AverageGrade = 'avarageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAvarageGrades(grades: number[]): number {
  return [...grades].reduce((sum, el) => sum + el, 0) / grades.length;
}

function sortAvarageGradeASC(
  a: Student,
  b: Student,
): number {
  return getAvarageGrades(a.grades) - getAvarageGrades(b.grades);
}

function sortAvarageGradeDESC(
  a:Student,
  b:Student,
): number {
  return getAvarageGrades(b.grades) - getAvarageGrades(a.grades);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: string,
): Student[] {
  const copy: Student[] = [...students];
  const result: Student[] = [];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    case SortType.Age:
      if (order === 'asc') {
        return copy.sort((a, b) => a.age - b.age);
      }

      return copy.sort((a, b) => b.age - a.age);

    case SortType.Married:
      for (let i: number = 0; i < copy.length; i += 1) {
        if (copy[i].married === true) {
          result.push(copy[i]);
          copy.splice(i, 1);
        }
      }

      if (order === 'asc') {
        return [...copy, ...result];
      }

      return [...result, ...copy];
    case SortType.AverageGrade:

      if (order === 'asc') {
        return copy.sort(sortAvarageGradeASC);
      }

      return copy.sort(sortAvarageGradeDESC);
    default:
      throw new Error('Err!');
  }
}
