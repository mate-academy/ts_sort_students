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

    const averageA = a.grades
      .reduce((acc, value): number => {
        return (acc + value);
      }, 0) / (a.grades.length);

    const averageB = b.grades
      .reduce((acc, value): number => {
        return (acc + value);
      }, 0) / (b.grades.length);

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:

        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Age:
        return a.age - b.age;

      case SortType.Married:
        return a.married
          .toString().localeCompare(b.married.toString());

      case SortType.AverageGrade:
        return averageA - averageB;

      default:
        return 0;
    }
  });

  return copy;
}
