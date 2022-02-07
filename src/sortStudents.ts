
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
  Grades = 'grades',
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
        answer = studentA.name.localeCompare(studentB.name);
        break;

      case SortType.Surname:
        answer = studentA.surname.localeCompare(studentB.surname);
        break;

      case SortType.Age:
        answer = studentA.age - studentB.age;
        break;

      case SortType.Married:
        if (studentA.married && !studentB.married) {
          answer = 1;
        } else if (!studentA.married && studentB.married) {
          answer = -1;
        } else {
          answer = 0;
        }
        break;

      case SortType.Grades:
        answer = averageGrade(studentA.grades) - averageGrade(studentB.grades);

        // answer
        //   = (studentA.grades.reduce((a, b) => a + b, 0)
        //     / studentA.grades.length)
        //   - (studentB.grades.reduce((a, b) => a + b, 0)
        //     / studentB.grades.length);
        break;

      default:
        break;
    }

    if (order === 'desc') {
      answer *= -1;
    }

    return answer;
  };

  return studentsCopy.sort(callback);
}
