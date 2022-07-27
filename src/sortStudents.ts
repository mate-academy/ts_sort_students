
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

function getAvarageGrades(grades: number[]): number {
  return [...grades].reduce((sum, el) => sum + el, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: string,
): Student[] {
  const copy: Student[] = [...students];
  const result: Student[] = [];

  function sortAvarageGradeASC(a, b): number {
    return getAvarageGrades(a.grades) - getAvarageGrades(b.grades);
  }

  function sortAvarageGradeDESC(a, b): number {
    return getAvarageGrades(b.grades) - getAvarageGrades(a.grades);
  }

  switch (sortBy) {
    case SortType.Name:
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    case SortType.Surname:
      return copy.sort((a, b) => a.surname.localeCompare(b.surname));
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
