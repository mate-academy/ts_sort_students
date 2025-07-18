
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
  AverageGrade = 'averageGrades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];
  let result: Student[];

  switch (sortBy) {
    case SortType.Age:
      if (order === 'asc') {
        result = sortedStudents.sort(
          (user1, user2) => user1.age - user2.age,
        );
      }

      if (order === 'desc') {
        result = sortedStudents.sort(
          (user1, user2) => user2.age - user1.age,
        );
      }

      break;

    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        result = sortedStudents.sort(
          (user1, user2) => user1[sortBy].localeCompare(user2[sortBy]),
        );
      }

      if (order === 'desc') {
        result = sortedStudents.sort(
          (user1, user2) => user2[sortBy].localeCompare(user1[sortBy]),
        );
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        result = sortedStudents.sort(
          (user1, user2) => Number(user1.married) - Number(user2.married),
        );
      }

      if (order === 'desc') {
        result = sortedStudents.sort(
          (user1, user2) => Number(user2.married) - Number(user1.married),
        );
      }

      break;

    case SortType.AverageGrade:
      if (order === 'desc') {
        result = sortedStudents.sort((user1, user2) => getAverageGrade(
          user2.grades,
        ) - getAverageGrade(user1.grades));
      }

      if (order === 'asc') {
        result = sortedStudents.sort((user1, user2) => getAverageGrade(
          user1.grades,
        ) - getAverageGrade(user2.grades));
      }

      break;

    default: throw new Error('Type is not valid');
  }

  return result;
}
