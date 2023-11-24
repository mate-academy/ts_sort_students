
export interface Student {
  name: string
  surname: string
  age: number
  married: boolean
  grades: number[]
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
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const newStudents = [...students];

  const avgGrade = (x) : number => {
    return x.grades
      .reduce((acc: number, curr: number) => acc + curr, 0) / x.grades.length;
  };

  const compare = (a: Student, b: Student): number => {
    let aStud: string | number;
    let bStud: string | number;

    switch (sortBy) {
      case SortType.Name:
        aStud = a.name;
        bStud = b.name;
        break;

      case SortType.Surname:
        aStud = a.surname;
        bStud = b.surname;
        break;

      case SortType.Age:
        aStud = a.age;
        aStud = b.age;
        break;

      case SortType.Married:
        aStud = a.married ? 1 : 0;
        aStud = b.married ? 1 : 0;
        break;

      case SortType.AverageGrade:
        aStud = avgGrade(a);
        aStud = avgGrade(b);
        break;

      default:
        break;
    }

    if (order === 'desc') {
      aStud *= -1;
      bStud *= -1;
    }

    if (aStud < bStud) {
      return 1;
    }

    return -1;
  };

  return newStudents.sort(compare);
}
