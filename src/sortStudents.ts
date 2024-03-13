
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

export type SortOrder = 'asc' | 'desc';

function calculateGradeAverage(grades: number[]): number {
  return (grades.reduce((acc, curr) => acc + curr, 0)) / grades.length;
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let valueA;
    let valueB;

    switch (sortBy) {
      case SortType.Name:
        valueA = a.name.toLowerCase();
        valueB = b.name.toLowerCase();
        break;
      case SortType.Surname:
        valueA = a.surname.toLowerCase();
        valueB = b.surname.toLowerCase();
        break;
      case SortType.Age:
        valueA = a.age;
        valueB = b.age;
        break;
      case SortType.Married:
        valueA = a.married ? 1 : 0;
        valueB = b.married ? 1 : 0;
        break;
      case SortType.AverageGrade:
        valueA = calculateGradeAverage(a.grades);
        valueB = calculateGradeAverage(b.grades);
        break;
      default:
        throw new Error('Invalid sort type!');
    }

    if (order === 'asc') {
      if (valueA < valueB) {
        return -1;
      }

      if (valueA > valueB) {
        return 1;
      }

      return 0;
    }

    if (order === 'desc') {
      if (valueA > valueB) {
        return -1;
      }

      if (valueA < valueB) {
        return 1;
      }

      return 0;
    }

    return 0;
  });

  return sortedStudents;
}
