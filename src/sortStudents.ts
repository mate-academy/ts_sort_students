
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const cloneStudens = [...students];

  switch (sortBy) {
    case SortType.Name: {
      cloneStudens.sort((a, b) => a.name.localeCompare(b.name));
      break;
    }

    case SortType.Surname: {
      cloneStudens.sort((a, b) => a.surname.localeCompare(b.surname));
      break;
    }

    case SortType.Age: {
      cloneStudens.sort((a, b) => b.age - a.age);
      break;
    }

    case SortType.Married: {
      cloneStudens.sort((a, b) => Number(b.married) - Number(a.married));
      break;
    }

    case SortType.AverageGrade: {
      /* eslint-disable max-len */
      switch (order) {
        case 'asc': {
          cloneStudens.sort((a, b) => (a.grades.reduce((sum, num) => sum + num, 0) / a.grades.length) - (b.grades.reduce((sum, num) => sum + num, 0) / b.grades.length));
          break;
        }

        case 'desc': {
          cloneStudens.sort((a, b) => (b.grades.reduce((sum, num) => sum + num, 0) / b.grades.length) - (a.grades.reduce((sum, num) => sum + num, 0) / a.grades.length));
          break;
        }

        default: {
          throw new Error('Wrong order');
        }
      }
      break;
    }

    default: {
      throw new Error('Wrong sort');
    }
  }

  return cloneStudens;
}
