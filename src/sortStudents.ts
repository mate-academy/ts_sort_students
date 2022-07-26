
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, prev) => sum + prev, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsClone = [...students];

  return studentsClone.sort((studentA, studentB) => {
    switch (sortBy) {
      case SortType.Name:

        return order === 'asc'
          ? studentA.name.localeCompare(studentB.name)
          : studentB.name.localeCompare(studentA.name);

      case SortType.Surname:

        return order === 'asc'
          ? studentA.surname.localeCompare(studentB.surname)
          : studentB.surname.localeCompare(studentA.surname);

      case SortType.Age:
        return order === 'asc'
          ? studentA.age - studentB.age
          : studentB.age - studentA.age;

      case SortType.Married:
        return order === 'asc'
          ? Number(studentA.married) - Number(studentB.married)
          : Number(studentB.married) - Number(studentA.married);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(studentA.grades) - getAverageGrade(studentB.grades)
          : getAverageGrade(studentB.grades) - getAverageGrade(studentA.grades);

      default:
        throw new Error('No such sort type');
    }
  });
}
