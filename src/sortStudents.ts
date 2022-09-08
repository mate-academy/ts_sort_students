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
    /* eslint-disable padding-line-between-statements */
    case SortType.Name:
    case SortType.Surname: {
    /* eslint-enable padding-line-between-statements */
      if (order === 'desc') {
        return studentsCopy.sort((studentA, studentB) => {
          return studentB[sortBy].localeCompare(studentA[sortBy]);
        });
      }

      return studentsCopy.sort((studentA, studentB) => {
        return studentA[sortBy].localeCompare(studentB[sortBy]);
      });
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
