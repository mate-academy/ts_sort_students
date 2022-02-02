
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
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

type SortStudentsFunction =
  (students: Student[], sortBy: SortType, order: SortOrder) => Student[];

const SortCallbackByGrades
  = (grades1: number[], grades2: number[], order: string): number => {
    const firstAvgGrade = grades1.reduce((sum, grade) => sum + grade, 0)
    / grades1.length;
    const secondAvgGrade = grades2.reduce((sum, grade) => sum + grade, 0)
    / grades2.length;

    return order === 'asc'
      ? firstAvgGrade - secondAvgGrade
      : secondAvgGrade - firstAvgGrade;
  };

const SortByString
  = (string1: string, string2: string, order: string): number => {
    return order === 'asc'
      ? string1.localeCompare(string2)
      : string2.localeCompare(string1);
  };

const SortByNumber
  = (number1: number, number2: number, order: string): number => {
    return order === 'asc'
      ? number1 - number2
      : number2 - number1;
  };

export const sortStudents: SortStudentsFunction = (students, sortBy, order) => {
  const studentsCopy = [...students];

  return studentsCopy.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
        return SortByString(a.name, b.name, order);

      case SortType.Surname:
        return SortByString(a.surname, b.surname, order);

      case SortType.Age:
        return SortByNumber(a.age, b.age, order);

      case SortType.Married:
        return SortByNumber(Number(a.married), Number(b.married), order);

      case SortType.AverageGrade:
        return SortCallbackByGrades(a.grades, b.grades, order);

      default: return 0;
    }
  });
};
