function getAverage(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: true;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name: {
      return studentsCopy.sort((
        studentA, studentB,
      ) => (order === 'asc'
        ? studentA.name.localeCompare(studentB.name)
        : studentB.name.localeCompare(studentA.name)
      ));
    }

    case SortType.Surname: {
      return studentsCopy.sort((
        studentA, studentB,
      ) => (order === 'asc'
        ? studentA.surname.localeCompare(studentB.surname)
        : studentB.surname.localeCompare(studentA.surname)
      ));
    }

    case SortType.Age: {
      return studentsCopy.sort((
        studentA, studentB,
      ) => (order === 'asc'
        ? studentA.age - studentB.age
        : studentB.age - studentA.age
      ));
    }

    case SortType.Married: {
      return studentsCopy.sort((
        studentA, studentB,
      ) => (order === 'asc'
        ? Number(studentA.married) - Number(studentB.married)
        : Number(studentB.married) - Number(studentA.married)
      ));
    }

    case SortType.AverageGrade: {
      return studentsCopy.sort((
        studentA, studentB,
      ) => (order === 'asc'
        ? getAverage(studentA.grades) - getAverage(studentB.grades)
        : getAverage(studentB.grades) - getAverage(studentA.grades)
      ));
    }

    default: {
      throw new Error('Wrong sorting type');
    }
  }
}
