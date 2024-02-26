
export interface Student {
  name: string,
  surname: string,
  age: number,
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

// eslint-disable-next-line max-len
export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] {
  const correctOrderStuds = [...students];

  correctOrderStuds.sort((a, b) => {
    let difference = 0;

    switch (sortBy) {
      case SortType.Name:
        difference = a.name.localeCompare(b.name);
        break;

      case SortType.Surname:
        difference = a.surname.localeCompare(b.surname);
        break;

      case SortType.Age:
        difference = a.age - b.age;
        break;

      case SortType.Married:

        // if (a.married !== b.married) {
        //   difference = a.name.localeCompare(b.name);
        // }
        difference = Number(a.married) - Number(b.married);
        break;

      case SortType.AverageGrade: {
        // eslint-disable-next-line max-len
        const averageA = a.grades.reduce((acc, current) => acc + current, 0) / a.grades.length;
        // eslint-disable-next-line max-len
        const averageb = b.grades.reduce((acc, current) => acc + current, 0) / b.grades.length;

        difference = averageA - averageb;
        break;
      }
      default:
        throw new Error('Invalid data');
    }

    if (order === 'desc') {
      difference *= -1;
    }

    if (difference === 0) {
      return students.indexOf(a) - students.indexOf(b);
    }

    return difference;
  });

  return correctOrderStuds;
}
