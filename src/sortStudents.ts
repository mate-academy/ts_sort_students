
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades:number[],
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  const averageGrade = (grades: number[]): number => {
    const sum = grades.reduce((avg, grade) => avg + grade, 0);

    return sum / grades.length;
  };

  studentsCopy.sort((a, b) => {
    let count = 0;

    switch (sortBy) {
      case SortType.Name:
        count = a.name.localeCompare(b.name);
        break;
      case SortType.Surname:
        count = a.surname.localeCompare(b.surname);
        break;
      case SortType.Age:
        count = a.age - b.age;
        break;
      case SortType.Married:
        // eslint-disable-next-line no-nested-ternary
        if (a.married === b.married) {
          count = 0;
        } else if (a.married) {
          count = 1;
        }
        break;
      case SortType.AverageGrade:
        count = averageGrade(a.grades) - averageGrade(b.grades);
        break;
      default:
        return 0;
    }

    if (order === 'asc') {
      return count;
    }

    return -count;
  });

  return studentsCopy;
}
