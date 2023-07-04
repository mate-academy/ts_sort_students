
export interface Student {
  name: string;
  surname: string;
  age: number;
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, mark) => sum + mark, 0) / grades.length;
}

function sortArray(firstData: string | number, secondData: string | number,
  direction: string): number {
  let result: number = 0;

  if (typeof firstData === 'string' && typeof secondData === 'string') {
    if (direction === 'asc') {
      result = firstData.localeCompare(secondData);
    } else {
      result = secondData.localeCompare(secondData);
    }
  }

  if (typeof firstData === 'number' && typeof secondData === 'number') {
    if (direction === 'asc') {
      result = firstData - secondData;
    } else {
      result = secondData - firstData;
    }
  }

  return result;
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const newStudents: Student[] = [...students];

  newStudents.sort((firstStudent: Student, secondStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
        return sortArray(firstStudent.name, secondStudent.name, order);
      case SortType.Surname:
        return sortArray(firstStudent.surname, secondStudent.surname, order);
      case SortType.Age:
        return sortArray(firstStudent.age, secondStudent.age, order);
      case SortType.Married:
        return sortArray(+firstStudent.married, +secondStudent.married, order);
      case SortType.AverageGrade:
        return sortArray(getAverageGrade(firstStudent.grades),
          getAverageGrade(secondStudent.grades), order);
      default:
        return 0;
    }
  });

  return newStudents;
}
