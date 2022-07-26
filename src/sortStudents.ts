
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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  const average = (numbers: number[]): number => {
    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
  };

  copy.sort((studentOne: Student, studentTwo: Student) => {
    switch (sortBy) {
      case SortType.Name:
        if (order === 'asc') {
          return studentOne.name.localeCompare(studentTwo.name);
        }

        return studentTwo.name.localeCompare(studentOne.name);

      case SortType.Surname:
        if (order === 'asc') {
          return studentOne.surname.localeCompare(studentTwo.surname);
        }

        return studentTwo.surname.localeCompare(studentOne.surname);

      case SortType.Age:
        if (order === 'asc') {
          return studentOne.age - studentTwo.age;
        }

        return studentTwo.age - studentOne.age;

      case SortType.Married:
        if (order === 'asc') {
          return Number(studentOne.married) - Number(studentTwo.married);
        }

        return Number(studentTwo.married) - Number(studentOne.married);

      case SortType.AverageGrade:
        if (order === 'asc') {
          return average(studentOne.grades) - average(studentTwo.grades);
        }

        return average(studentTwo.grades) - average(studentOne.grades);

      default:
        throw new Error('Error SortType');
    }
  });

  return copy;
}
