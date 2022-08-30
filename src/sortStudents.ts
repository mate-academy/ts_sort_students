
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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object {
  const newStudentsArr = [...students];

  function callback(a: Student, b: Student): number {
    let firstObj: Student = a;
    let secObj: Student = b;

    if (order === 'desc') {
      [firstObj, secObj] = [secObj, firstObj];
    }

    if (sortBy === SortType.Age || sortBy === SortType.Married) {
      return +firstObj[sortBy] - +secObj[sortBy];
    }

    if (sortBy === SortType.Name || sortBy === SortType.Surname) {
      return firstObj[sortBy].localeCompare(secObj[sortBy]);
    }

    function calcAverageGr(grades: number[]): number {
      const gradesSum: number = grades.reduce((previousValue, currenValue)
      : number => {
        return previousValue + currenValue;
      });

      return gradesSum / grades.length;
    }

    return calcAverageGr(firstObj[sortBy]) - calcAverageGr(secObj[sortBy]);
  }

  newStudentsArr.sort(callback);

  return newStudentsArr;
}
