
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
      let firstStudent = a;
      let secondStudent = b;
      let firstAvgGrades: number = a.grades.reduce(
        (x: number, y: number) => x + y,
      ) / a.grades.length;
      let secondAvgGrades: number = b.grades.reduce(
        (x: number, y: number) => x + y,
      ) / b.grades.length;

      if (order === 'desc') {
        [firstStudent, secondStudent] = [secondStudent, firstStudent];
        [firstAvgGrades, secondAvgGrades] = [secondAvgGrades, firstAvgGrades];
      }

      switch (sortBy) {
        case SortType.Name:
          return firstStudent.name.localeCompare(secondStudent.name);

        case SortType.Surname:
          return firstStudent.surname.localeCompare(secondStudent.surname);

        case SortType.Age:
          return firstStudent.age - secondStudent.age;

        case SortType.Married:
          return Number(firstStudent.married) - Number(secondStudent.married);

        case SortType.AverageGrade:
          return firstAvgGrades - secondAvgGrades;

        default:
          throw new Error('Error :3');
      }
    },
  );
}
