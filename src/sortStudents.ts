
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: string,
): Student[] {
  let result: Student[];
  const sort = SortType[sortBy].toLowerCase();
  const studentCopy = [...students];

  function averageGrade(student: Student):number {
    return (student.grades.reduce((a:number, b:number) => a
    + b)) / student.grades.length;
  }

  switch (sort) {
    case 'name':
    case 'surname':
      result = order === 'asc'
        ? studentCopy.sort((a, b) => a[sort].localeCompare(b[sort]))
        : studentCopy.sort((a, b) => b[sort].localeCompare(a[sort]));
      break;
    case 'averagegrade':
      result = order === 'asc'
        ? studentCopy.sort((a, b) => averageGrade(a) - averageGrade(b))
        : studentCopy.sort((a, b) => averageGrade(b) - averageGrade(a));
      break;
    case 'age':
      result = order === 'asc'
        ? studentCopy.sort((a, b) => a[sort] - b[sort])
        : studentCopy.sort((a, b) => b[sort] - a[sort]);
      break;
    case 'married':
      result = order === 'asc'
        ? studentCopy.sort((a, b) => +a[sort] - +b[sort])
        : studentCopy.sort((a, b) => +b[sort] - +a[sort]);
      break;
    default:
      result = students;
  }

  return result;
}
