
export interface Student {
  // describe Student interface
  name:string;
  surname:string;
  age:number;
  married:boolean;
  grades:number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = string;

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  // write your function
  let callback;
  const stringHandler
    = (param:string = sortBy, secParam:string = order):void => {
      callback = (a:Student, b:Student):number => {
        return order === `${secParam}`
          ? a[`${param}`].localeCompare(b[param])
          : b[`${param}`].localeCompare(a[param]);
      };
    };

  if (sortBy === 'age') {
    callback = (a:Student, b:Student):number => {
      return order === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
    };
  } else if (sortBy === 'grades') {
    callback = (a:Student, b:Student):number => {
      const sum1 = a.grades
        .reduce((prev, curr) => prev + curr);

      const sum2 = b.grades
        .reduce((prev, curr) => prev + curr);

      if (order === 'asc') {
        return sum1 / a.grades.length - sum2 / b.grades.length;
      }

      return sum2 / b.grades.length - sum1 / a.grades.length;
    };
  } else if (sortBy === 'married') {
    const married = students.filter((student:Student) => student.married);
    const single = students.filter((student:Student) => !student.married);

    stringHandler('name', 'desc');

    return [...married.sort(callback), ...single];
  } else {
    stringHandler();
  }

  return students.sort(callback);
}
