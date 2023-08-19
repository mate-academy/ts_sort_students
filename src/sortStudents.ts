
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

// reusable averageGrade

function averageGrade(grades: number[]): number {
  const sumOfGrades = grades.reduce((acc, g) => {
    return acc + g;
  });

  const average = sumOfGrades / grades.length;

  return average;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  // write your function
  const sortedStudents = [...students];

  const compareFunction = (studentA: Student, studentB: Student): number => {
    let valueA;
    let valueB;

    switch (sortBy) {
      case SortType.Name:
        valueA = studentA.name;
        valueB = studentB.name;
        break;
      case SortType.Surname:
        valueA = studentA.surname;
        valueB = studentB.surname;
        break;
      case SortType.Age:
        valueA = studentA.age;
        valueB = studentB.age;
        break;
      case SortType.Married:
        valueA = studentA.married;
        valueB = studentB.married;
        break;

      case SortType.AverageGrade: {
        const averageGradeA = averageGrade(studentA.grades);
        const averageGradeB = averageGrade(studentB.grades);

        valueA = averageGradeA;
        valueB = averageGradeB;
        break;
      }
      default:
        throw new Error('Invalid SortType');
    }
    // Porównywanie wartości dla sortowania

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      if (order === 'asc') {
        return valueA.localeCompare(valueB);
      }

      if (order === 'desc') {
        return valueB.localeCompare(valueA);
      }
    } else {
      if (order === 'asc') {
        return valueA - valueB;
      }

      if (order === 'desc') {
        return valueB - valueA;
      }
    }

    return 0;
  };

  return sortedStudents.sort((a, b) => {
    return compareFunction(a, b);
  });
}
