export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
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
  const result = [...students];

  result.sort((studentA, studentB) => {
    let comparison = 0;

    // eslint-disable-next-line default-case
    switch (sortBy) {
      case SortType.Name:
        comparison = studentA.name.localeCompare(studentB.name);
        break;

      case SortType.Surname:
        comparison = studentA.surname.localeCompare(studentB.surname);
        break;

      case SortType.Age:
        comparison = studentA.age - studentB.age;
        break;

      case SortType.Married:
        comparison
        = Number(studentA.married) - Number(studentB.married);
        break;

      case SortType.AverageGrade: {
        const averageA
        = studentA.grades.reduce((sum, grade) => sum + grade, 0)
          / studentA.grades.length;

        const averageB
        = studentB.grades.reduce((sum, grade) => sum + grade, 0)
          / studentB.grades.length;

        comparison = averageA - averageB;
        break;
      }
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return result;
}
