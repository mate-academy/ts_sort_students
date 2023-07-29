export interface Student {
  name: string;
  surname: string;
  age: number,
  married: boolean,
  grades: number [],

}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const copySt = [...students];

  const sortByName = (a: Student, b: Student) : number => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }

    return 0;
  };

  const sortBySurname = (a: Student, b: Student): number => {
    const surnameA = a.surname.toUpperCase();
    const surnameB = b.surname.toUpperCase();

    switch (order) {
      case 'asc':
        if (surnameA < surnameB) {
          return -1;
        }

        if (surnameA > surnameB) {
          return 1;
        }

        break;

      case 'desc':
        if (surnameA < surnameB) {
          return -1;
        }

        if (surnameA > surnameB) {
          return 1;
        }
        break;

      default:
        return 0;
    }

    return 0;
  };

  const sortByAverageAge = (a: Student, b: Student): number => {
    const averageGradeA = a.grades.reduce(
      (sum, grade) => sum + grade,
    ) / a.grades.length;

    const averageGradeB = b.grades.reduce(
      (sum, grade) => (sum + grade),
    ) / b.grades.length;

    let num = 0;

    if (order === 'desc') {
      num = averageGradeB - averageGradeA;
    }

    if (order === 'asc') {
      num = averageGradeA - averageGradeB;
    }

    return num;
  };

  let result1;
  let result2;
  let finalResult;

  switch (sortBy) {
    case SortType.Name:
      return copySt.sort(sortByName);

    case SortType.Surname:
      return copySt.sort(sortBySurname);

    case SortType.Age:
      return copySt.sort((a: Student, b: Student): number => b.age - a.age);

    case SortType.Married:
      result1 = copySt.filter((p) => p.married === true);
      result2 = copySt.filter((p) => p.married === false);

      finalResult = [...result1, ...result2];

      return finalResult;

    case SortType.AverageGrade:
      return copySt.sort(sortByAverageAge);

    default:
      return students;
  }
}
