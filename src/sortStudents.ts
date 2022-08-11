
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
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc'| 'desc';

function getAverageGrade(grades:number[]):number {
  return grades.reduce((sum, mark) => sum + mark, 0) / (grades.length || 1);
}

function sortAverageAsc(a: Student, b: Student): number {
  return getAverageGrade(a.grades) - getAverageGrade(b.grades);
}

function sortAverageDesc(a:Student, b:Student): number {
  return getAverageGrade(b.grades) - getAverageGrade(a.grades);
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const copyStudents: Student[] = [...students];
  const isMarried:Student[] = [];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    case SortType.Age:
      if (order === 'asc') {
        return copyStudents.sort((a, b) => a.age - b.age);
      }

      return copyStudents.sort((a, b) => b.age - a.age);

    case SortType.Married:
      for (let i = 0; i < copyStudents.length; i += 1) {
        if (copyStudents[i].married === true) {
          isMarried.push(copyStudents[i]);
          copyStudents.splice(i, 1);
        }
      }

      if (order === 'asc') {
        return [...copyStudents, ...isMarried];
      }

      return [...isMarried, ...copyStudents];

    case SortType.AverageGrade:

      if (order === 'asc') {
        return copyStudents.sort(sortAverageAsc);
      }

      return copyStudents.sort(sortAverageDesc);
    default:
      throw new Error('Something wrong!!!');
  }
}
