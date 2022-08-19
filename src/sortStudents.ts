
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

const aveGrade = (points: number[]): number => (
  points.reduce((sum, point) => sum + point, 0) / points.length);

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  copyStudents.sort((studentA: Student, studentB: Student) => {
    switch (sortBy) {
      case SortType.Name:
        if (order === 'asc') {
          return studentA.name.localeCompare(studentB.name);
        }

        return studentB.name.localeCompare(studentA.name);

      case SortType.Surname:
        if (order === 'asc') {
          return studentA.surname.localeCompare(studentB.surname);
        }

        return studentB.surname.localeCompare(studentA.surname);

      case SortType.Age:
        if (order === 'asc') {
          return studentA.age - studentB.age;
        }

        return studentB.age - studentA.age;

      case SortType.Married:
        if (order === 'asc') {
          return +studentA.married - +studentB.married;
        }

        return +studentB.married - +studentA.married;

      default:
        if (order === 'asc') {
          return aveGrade(studentA.grades) - aveGrade(studentB.grades);
        }

        return aveGrade(studentB.grades) - aveGrade(studentA.grades);
    }
  });

  return copyStudents;
}
