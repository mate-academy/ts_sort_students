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
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

function calculateAverageGrade(student: Student): number {
  return student.grades.reduce((prev, curr) => prev + curr, 0)
    / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const allStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      allStudents.sort((studentA: Student, studentB: Student): number => {
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      });
      break;

    case SortType.Age:
      allStudents.sort((studentA: Student, studentB: Student): number => {
        return order === 'asc'
          ? studentA.age - studentB.age
          : studentB.age - studentA.age;
      });
      break;

    case SortType.Married:
      allStudents.sort((studentA: Student, studentB: Student): number => {
        return order === 'asc'
          ? Number(studentA.married) - Number(studentB.married)
          : Number(studentB.married) - Number(studentA.married);
      });
      break;

    case SortType.AverageGrade:
      allStudents.sort((studentA: Student, studentB: Student): number => {
        const averageA = calculateAverageGrade(studentA);
        const averageB = calculateAverageGrade(studentB);

        return order === 'asc'
          ? averageA - averageB
          : averageB - averageA;
      });
      break;

    default:
      throw new Error('Something went wrong!');
  }

  return allStudents;
}
