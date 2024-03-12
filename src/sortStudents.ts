
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: Array<number>,
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

function calculateAverageGrade(grades: number[]): number {
  return (grades.reduce((total, grade) => total + grade, 0)) / grades.length;
}

export function sortStudents(students: Array<Student>,
  sortBy: SortType, order: SortOrder): Array<Student> {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let aValue;
    let bValue;

    switch (sortBy) {
      case SortType.Name:
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
        break;
      case SortType.Surname:
        aValue = a.surname.toLowerCase();
        bValue = b.surname.toLowerCase();
        break;
      case SortType.Age:
        aValue = a.age;
        bValue = b.age;
        break;
      case SortType.Married:
        aValue = a.married ? 1 : 0;
        bValue = b.married ? 1 : 0;
        break;
      case SortType.AverageGrade:
        aValue = calculateAverageGrade(a.grades);
        bValue = calculateAverageGrade(b.grades);
        break;
      default:
        throw new Error('Invalid SortType');
    }

    if (order === 'asc') {
      if (aValue < bValue) {
        return -1;
      }

      if (aValue > bValue) {
        return 1;
      }

      return 0;
    }

    if (order === 'desc') {
      if (aValue > bValue) {
        return -1;
      }

      if (aValue < bValue) {
        return 1;
      }

      return 0;
    }

    return 0;
  });

  return sortedStudents;
}
