
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'ask' | 'desc';

function calculateAverageGrade(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }

  const sum = grades.reduce((total, grade) => total + grade, 0);

  return sum / grades.length;
}

export function sortStudents(students, sortBy, order): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let comparison = 0;
    let averageA: number;
    let averageB: number;

    switch (sortBy) {
      case SortType.Name:
        comparison = a.name.localeCompare(b.name);
        break;
      case SortType.Surname:
        comparison = a.surname.localeCompare(b.surname);
        break;
      case SortType.Age:
        comparison = a.age - b.age;
        break;
      case SortType.Married:
        if (a.married === b.married) {
          comparison = 0;
        } else {
          comparison = a.married - b.married;
        }
        break;
      case SortType.AverageGrade:
        averageA = calculateAverageGrade(a.grades);
        averageB = calculateAverageGrade(b.grades);
        comparison = averageA - averageB;
        break;
      default:
        throw new Error('Invalid sortBy value');
    }

    if (order === 'desc') {
      comparison = -comparison;
    }

    if (comparison === 0) {
      comparison = students.indexOf(a) - students.indexOf(b);
    }

    return comparison;
  });

  return sortedStudents;
}
