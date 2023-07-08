
export interface Student {
  name: string,
  surname:string,
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calculateAverageGrade(grades: number[]): number {
  const sum = grades.reduce(
    (accum: number, curent: number) => accum + curent,
    0,
  );

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsSort = [...students];

  studentsSort.sort((studentA, studentB) => {
    const averageGradeA = calculateAverageGrade(studentA.grades);
    const averageGradeB = calculateAverageGrade(studentB.grades);

    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? studentA.name.localeCompare(studentB.name)
          : studentB.name.localeCompare(studentA.name);
      case SortType.Surname:
        return order === 'asc'
          ? studentA.surname.localeCompare(studentB.surname)
          : studentA.surname.localeCompare(studentB.surname);
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
          ? averageGradeA - averageGradeB
          : averageGradeB - averageGradeA;
      default:
        return 0;
    }
  });

  return studentsSort;
}
