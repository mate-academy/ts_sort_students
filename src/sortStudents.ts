
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
  AverageGrade = 'averagegrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  let result: Student[];
  const studentCopy = [...students];

  function averageGrade(student: Student):number {
    return (student.grades.reduce((a:number, b:number) => a
    + b)) / student.grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      result = order === 'asc'
        ? studentCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : studentCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
      break;
    case SortType.AverageGrade:
      result = order === 'asc'
        ? studentCopy.sort((a, b) => averageGrade(a) - averageGrade(b))
        : studentCopy.sort((a, b) => averageGrade(b) - averageGrade(a));
      break;
    case SortType.Age:
      result = order === 'asc'
        ? studentCopy.sort((a, b) => a[sortBy] - b[sortBy])
        : studentCopy.sort((a, b) => b[sortBy] - a[sortBy]);
      break;
    case SortType.Married:
      result = order === 'asc'
        ? studentCopy.sort((a, b) => +a[sortBy] - +b[sortBy])
        : studentCopy.sort((a, b) => +b[sortBy] - +a[sortBy]);
      break;
    default:
      result = students;
  }

  return result;
}
