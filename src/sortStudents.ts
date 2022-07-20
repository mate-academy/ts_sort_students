/*eslint-disable*/
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

enum Order {
  asc = 'asc',
  desc = 'desc',
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

  const marriedHandler
    = ():Student[] => {
      const married = students.filter((student) => student.married);
      const single = students.filter((student) => !student.married);

      stringHandler('name');

      return [...married.sort(callback), ...single];
    };

  switch (sortBy) {
    case 'age':
      callback = (a:Student, b:Student):number => {
        return order === Order.asc
          ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
      };
      break;

    case 'grades':
      callback = (a:Student, b:Student):number => {
        const sum1 = a.grades
          .reduce((prev, curr) => prev + curr);

        const sum2 = b.grades
          .reduce((prev, curr) => prev + curr);

        if (order === Order.asc) {
          return sum1 / a.grades.length - sum2 / b.grades.length;
        }

        return sum2 / b.grades.length - sum1 / a.grades.length;
      };
      break;

    case 'married':
      return marriedHandler();
      break;

    default:
      stringHandler();
      break;
  }

  return students.sort(callback);
}
