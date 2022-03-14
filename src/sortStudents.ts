
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort(
    (a: Student, b: Student) => {
      let studentA = a;
      let studentB = b;

      const averageGrades = (grades: number[]): number => {
        return grades.reduce((x: number, y: number) => x + y) / grades.length;
      };

      if (order === 'desc') {
        [studentA, studentB] = [studentB, studentA];
      }

      switch (sortBy) {
        case SortType.Name:
          return studentA.name.localeCompare(studentB.name);

        case SortType.Surname:
          return studentA.surname.localeCompare(studentB.surname);

        case SortType.Age:
          return studentA.age - studentB.age;

        case SortType.Married:
          return Number(studentA.married) - Number(studentB.married);

        case SortType.AverageGrade:
          return averageGrades(studentA.grades)
            - averageGrades(studentB.grades);

        default:
          throw new Error('Invalid data');
      }
    },
  );
}
