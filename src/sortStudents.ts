export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copy = [...students];

  copy.sort((studentA: Student, studentB: Student): number => {
    let [a, b] = [studentA, studentB];

    if (order === 'desc') {
      [a, b] = [b, a];
    }

    const averageA = studentA.grades
      .reduce((acc, value): number => {
        return (acc + value);
      }, 0) / (studentA.grades.length);

    const averageB = studentB.grades
      .reduce((acc, value): number => {
        return (acc + value);
      }, 0) / (studentB.grades.length);

    switch (sortBy) {
      case SortType.Name:
        return studentA.name.localeCompare(studentB.name);

      case SortType.Surname:
        return studentA.surname.localeCompare(studentB.surname);

      case SortType.Age:
        return studentA.age - studentB.age;

      case SortType.Married:
        return studentA.married
          .toString().localeCompare(studentB.married.toString());

      case SortType.AverageGrade:
        return averageA - averageB;

      default:
        return 0;
    }
  });

  return copy;
}
