
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'AverageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const averageGrade = (grades: number[]): number => {
  return grades.reduce((a, b) => a + b) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const studentsCopy: Student[] = [...students];

  const callback = (studentA: Student, studentB: Student): number => {
    let answer: number;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        answer = studentA[sortBy].localeCompare(studentB[sortBy]);
        break;

      case SortType.Age:
        answer = studentA.age - studentB.age;
        break;

      case SortType.Married:
        if (studentA.married && !studentB.married) {
          answer = 1;
        }

        if (!studentA.married && studentB.married) {
          answer = -1;
        }
        break;

      case SortType.AverageGrade:
        answer = averageGrade(studentA.grades) - averageGrade(studentB.grades);
        break;

      default:
        break;
    }

    if (order === 'desc') {
      answer = -answer;
    }

    return answer;
  };

  return studentsCopy.sort(callback);
}
