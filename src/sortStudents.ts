
export interface Student {
  name: string;
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

type StudentKey = keyof Student;

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function GetAverageValue(array: []): number {
  return array.reduce((sum, value) => sum + value, 0) / array.length;
}

function compareStudentsByKey( // im gonna lose my sanity
  key: StudentKey,
  order: SortOrder,
): (currentStudent: Student, nextStudent: Student) => number {
  return function( // eslint-disable-line
    currentStudent: Student,
    nextStudent: Student,
  ): number {
    const currentValue = Array.isArray(currentStudent[key])
      ? GetAverageValue(currentStudent[key])
      : currentStudent[key];

    const nextValue = Array.isArray(nextStudent[key])
      ? GetAverageValue(nextStudent[key])
      : nextStudent[key];

    const comparison = typeof currentValue === 'string'
      ? currentValue.toString().localeCompare(nextValue.toString())
      : Number(currentValue) - Number(nextValue);

    return order === 'asc' ? comparison : -comparison;
  };
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      return studentsCopy.sort(compareStudentsByKey('name', order));

    case SortType.Surname:
      return studentsCopy.sort(compareStudentsByKey('surname', order));

    case SortType.Age:
      return studentsCopy.sort(compareStudentsByKey('age', order));

    case SortType.Married:
      return studentsCopy.sort(compareStudentsByKey('married', order));

    case SortType.AverageGrade:
      return studentsCopy.sort(compareStudentsByKey('grades', order));

    default: throw new Error('Wrong sort type!');
  }
}
